# うまミライ — 地方競馬AI予想メディア

Astro 4 + TypeScript + Tailwind CSS で構築された地方競馬アフィリエイトブログです。

---

## 必要なもの

| ツール | バージョン | 入手先 |
|--------|-----------|--------|
| Node.js | 20系 LTS 推奨 (18以上) | https://nodejs.org/ |
| Git | 最新版 | https://git-scm.com/ |
| GitHub アカウント | — | https://github.com/ |
| Vercel アカウント | — | https://vercel.com/ |

### Node.js のインストール確認

```bash
node -v   # v20.x.x と表示されればOK
npm -v    # 10.x.x 前後
```

---

## ローカルで動かす

```bash
# 1. このフォルダに移動
cd /Users/k/Desktop/Mother/umamirai

# 2. 依存パッケージをインストール (初回のみ、数分かかります)
npm install

# 3. 開発サーバー起動
npm run dev
```

ブラウザで http://localhost:4321 を開くとサイトが表示されます。  
ファイルを保存するたびに自動リロードされます。

---

## GitHub にアップロードする

### 1. GitHub でリポジトリを作成

1. https://github.com/new を開く
2. Repository name: `umamirai` (任意)
3. Private または Public を選ぶ
4. **「Initialize this repository」は チェックしない**
5. 「Create repository」をクリック

### 2. ターミナルで push

```bash
cd /Users/k/Desktop/Mother/umamirai

# Git を初期化
git init

# 全ファイルをステージ
git add .

# 最初のコミット
git commit -m "feat: 初回コミット"

# GitHub のリポジトリと紐付け (URL は自分のものに変更)
git remote add origin https://github.com/あなたのユーザー名/umamirai.git

# push
git branch -M main
git push -u origin main
```

---

## Vercel にデプロイする

1. https://vercel.com/ にログイン
2. 「Add New → Project」をクリック
3. 「Import Git Repository」で先ほど作った GitHub リポジトリを選ぶ
4. Framework Preset が「Astro」と自動検出される (されない場合は手動で選択)
5. 「Deploy」をクリック → 数分で https://umamirai.vercel.app が公開される

---

## 独自ドメイン (umamirai.com) を紐付ける

### Vercel 側の設定

1. Vercel のプロジェクトページ → 「Settings」→「Domains」
2. `umamirai.com` と入力して「Add」
3. `www.umamirai.com` も同様に追加

### お名前.com 側の DNS 設定

お名前.com の「ドメイン設定」→「DNS設定」で以下を登録します:

| タイプ | ホスト名 | 値 |
|--------|---------|-----|
| A | @ (空欄) | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

DNS の反映には最大48時間かかる場合があります (通常は数時間)。

---

## 公開後のチェックリスト

- [ ] https://umamirai.com が表示される
- [ ] https://www.umamirai.com にアクセスして正しくリダイレクトされる
- [ ] https://umamirai.com/sitemap-index.xml にアクセスできる
- [ ] https://umamirai.com/robots.txt にアクセスできる
- [ ] Google Search Console にサイトを登録 → サイトマップ URL を送信
- [ ] OGP 確認: https://cards-dev.twitter.com/validator でトップURLを検査
- [ ] フッターの免責事項が表示されている
- [ ] 各記事の「注意事項」セクションが表示されている
- [ ] contact.astro の `__GOOGLE_FORMS_URL__` を実際の Google フォーム URL に差し替える

---

## 記事の追加方法

`src/content/articles/` フォルダに `.md` ファイルを追加するだけです。

```markdown
---
title: 記事タイトル
description: 120字以内のメタディスクリプション
publishedAt: 2026-05-10
keywords: [地方競馬, キーワード2]
draft: false
---

## 見出し

本文...
```

`draft: true` にすると公開されません (下書き状態)。

---

## ビルド・プレビュー

```bash
# 本番ビルド
npm run build

# ビルド結果をローカルで確認
npm run preview
```

---

## 問い合わせ

contact@umamirai.com
