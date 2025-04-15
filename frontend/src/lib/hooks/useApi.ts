import { useState, useCallback, useEffect } from "react";

interface ApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

interface ApiOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

/**
 * APIリクエストを管理するカスタムフック
 * データの取得状態、ローディング状態、エラー状態を管理
 */
export function useApi<T, P extends any[]>(
  apiFunction: (...params: P) => Promise<T>,
  options: ApiOptions = {}
) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const execute = useCallback(
    async (...params: P) => {
      try {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        const data = await apiFunction(...params);
        setState({ data, isLoading: false, error: null });

        if (options.onSuccess) {
          options.onSuccess(data);
        }

        return data;
      } catch (error) {
        const errorObj =
          error instanceof Error ? error : new Error(String(error));
        setState((prev) => ({ ...prev, isLoading: false, error: errorObj }));

        if (options.onError) {
          options.onError(errorObj);
        }

        throw errorObj;
      }
    },
    [apiFunction, options]
  );

  return {
    ...state,
    execute,
    // リセット関数を追加
    reset: useCallback(() => {
      setState({
        data: null,
        isLoading: false,
        error: null,
      });
    }, []),
  };
}

/**
 * データ取得用の特化型フック
 * コンポーネントマウント時に自動的にデータを取得
 */
export function useFetch<T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = [],
  options: ApiOptions = {}
) {
  const api = useApi(fetchFunction, options);

  useEffect(() => {
    api.execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return api;
}
