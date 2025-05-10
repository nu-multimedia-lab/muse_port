// frontend/src/lib/apis/apiClient.ts

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

// APIの基本URLを環境変数から取得
const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:8000";

// API関連の型定義
export interface ApiErrorResponse {
  detail: string;
  status_code?: number;
}

export interface ApiCustomError {
  status: number;
  message: string;
  data?: ApiErrorResponse;
}

export type HttpMethod = "get" | "post" | "put" | "delete";

// APIエラーをフォーマットする共通関数
const formatApiError = (
  error: AxiosError<ApiErrorResponse>
): ApiCustomError => {
  // エラー情報をログに記録
  console.error(
    "API Error:",
    error.response?.data || error.message,
    "Status:",
    error.response?.status,
    "URL:",
    error.config?.url
  );

  // カスタムエラーオブジェクトを返す
  return {
    status: error.response?.status || 500,
    message:
      error.response?.data?.detail ||
      "サーバーとの通信中にエラーが発生しました",
    data: error.response?.data,
  };
};

// URLを正規化する関数（末尾のスラッシュを一貫して扱う）
const normalizeUrl = (url: string): string => {
  // 以下の場合は末尾スラッシュを追加しない:
  // 1. すでに末尾がスラッシュ
  // 2. クエリパラメータ(?を含む)がある
  // 3. /users/123 のような特定IDを指す形式

  // 追加不要条件をチェック
  const hasTrailingSlash = url.endsWith("/");
  const hasQueryParams = url.includes("?");
  const isIdPattern = /\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/.test(url);

  return hasTrailingSlash || hasQueryParams || isIdPattern ? url : `${url}/`;
};

// 共通のAPIクライアントを作成
export const createApiClient = (
  baseUrl: string = API_BASE_URL,
  config: AxiosRequestConfig = {}
): AxiosInstance => {
  const client = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });

  // リクエストインターセプター
  client.interceptors.request.use(
    (config) => {
      // URLを正規化
      if (config.url) {
        config.url = normalizeUrl(config.url);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // レスポンスインターセプター
  client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<ApiErrorResponse>) => {
      // エラーハンドリング
      return Promise.reject(formatApiError(error));
    }
  );

  return client;
};

// デフォルトのAPIクライアントをエクスポート
export const apiClient = createApiClient();

// APIパスをエンドポイント別に定義
export const API_ENDPOINTS = {
  USERS: "/users",
  ARTICLES: "/articles",
};

// 汎用的なAPI関数
export const api = {
  // 共通の処理を行うヘルパー関数
  request: async <T>(
    method: HttpMethod,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await (method === "get" ||
    method === "delete"
      ? apiClient[method](url, config)
      : apiClient[method](url, data, config));
    return response.data;
  },

  // 各HTTPメソッドの関数定義
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return api.request<T>("get", url, undefined, config);
  },

  post: async <T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return api.request<T>("post", url, data, config);
  },

  put: async <T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return api.request<T>("put", url, data, config);
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return api.request<T>("delete", url, undefined, config);
  },
};
