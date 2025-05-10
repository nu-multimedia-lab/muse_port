/**
 * 日付型（ISO 8601形式の文字列として扱う）
 */
export type ISODateString = string;

/**
 * ベースモデル - 共通フィールド
 */
export interface BaseModel {
  id: string;
  created_at: ISODateString;
  updated_at: ISODateString;
}

/**
 * ユーザーモデル
 */
export interface User extends BaseModel {
  username: string;
  bio?: string | null;
  avatar_url?: string | null;
}

/**
 * ユーザー作成時のデータ
 */
export interface UserCreate {
  username: string;
  bio?: string;
  avatar_url?: string;
}

/**
 * ユーザー更新時のデータ
 */
export interface UserUpdate {
  username?: string;
  bio?: string;
  avatar_url?: string;
}

/**
 * 記事モデル
 */
export interface Article extends BaseModel {
  user_id: string;
  title: string;
  content: string;
  tags?: string[];
  image_url?: string | null;
}

/**
 * 記事作成時のデータ
 */
export interface ArticleCreate {
  user_id: string;
  title: string;
  content: string;
  tags?: string[];
  image_url?: string;
}

/**
 * 記事更新時のデータ
 */
export interface ArticleUpdate {
  title?: string;
  content?: string;
  tags?: string[];
  image_url?: string;
}

/**
 * APIエラーレスポンス
 */
export interface ApiError {
  status: number;
  message: string;
  data?: any;
}
