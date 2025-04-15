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

// エラーレスポンスの型を定義
export interface ApiErrorResponse {
  detail: string;
  status_code?: number;
}

// URLを正規化する関数（末尾のスラッシュを一貫して扱う）
const normalizeUrl = (url: string): string => {
  // クエリパラメータがある場合は末尾スラッシュを追加しない
  if (url.includes("?")) {
    return url;
  }

  // ID指定のパスパラメータを検出する正規表現
  // 例：/users/123 や /articles/abc-def など
  const idPathPattern = /\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;

  // ID指定のパスパラメータでも末尾スラッシュは追加しない
  if (idPathPattern.test(url)) {
    return url;
  }

  // その他の場合は末尾スラッシュを追加
  if (!url.endsWith("/")) {
    return `${url}/`;
  }

  return url;
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
      console.error(
        "API Error:",
        error.response?.data || error.message,
        "Status:",
        error.response?.status,
        "URL:",
        error.config?.url
      );

      // カスタムエラーオブジェクトを作成
      const customError = {
        status: error.response?.status || 500,
        message:
          error.response?.data?.detail ||
          "サーバーとの通信中にエラーが発生しました",
        data: error.response?.data,
      };

      return Promise.reject(customError);
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
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.get(url, config);
    return response.data;
  },
  post: async <T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.post(url, data, config);
    return response.data;
  },
  put: async <T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.put(url, data, config);
    return response.data;
  },
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.delete(url, config);
    return response.data;
  },
};
