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
      // ここにリクエスト前の処理を追加
      // 例: authトークンの追加など
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
      console.error("API Error:", error.response?.data || error.message);

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
