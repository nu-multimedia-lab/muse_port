# Database Configuration

## USERS

- id (PK)
- username
- bio
- created_at

## ARTICLES

- id (PK)
- user_id (FK)
- title
- content
- media (list(URL, type, order))
- tags (list)
- created_at
- updated_at

## COMMENTS

- article_id (PK, FK)
- comment_id (SK)
- user_id
- comment_text
- created_at

## LIKES

- post_id (PK, FK)
- user_id (SK)
- created_at

## TAGS

- tag_name (PK)
- article_ids (list)

## 関係性

| 関係 | 説明 |
|------|------|
| USERS 1 ⇄ ∞ ARTICLES | ユーザーは複数の投稿を持つ |
| ARTICLES 1 ⇄ ∞ COMMENTS | 投稿は複数のコメントを持つ |
| ARTICLES 1 ⇄ ∞ LIKES | 投稿は複数のいいねを持つ |
| ARTICLES ∞ ⇄ ∞ TAGS | 投稿は複数のタグを持つ、タグは複数の投稿に関連付けられる |
