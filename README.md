# HK Portfolio

私のポートフォリオサイトです（モダンな感じになっていればいいな...）

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: GSAP, Framer Motion
- **3D**: Three.js, React Three Fiber
- **Icons**: Lucide React, React Icons
- **Linting**: ESLint, Prettier

## プロジェクト構成

```
hk-web/
├── app/
│   ├── components/
│   │   ├── ui/          # 再利用可能なUIコンポーネント
│   │   ├── layout/      # レイアウトコンポーネント
│   │   └── sections/    # セクションコンポーネント
│   ├── lib/
│   │   ├── hooks/       # カスタムフック
│   │   └── utils/       # ユーティリティ関数
│   ├── types/           # TypeScript型定義
│   ├── styles/          # グローバルスタイル
│   └── page.tsx         # トップページ
├── public/
│   ├── images/          # 画像ファイル
│   └── fonts/           # カスタムフォント
└── requirements.md      # 要件定義書
```

## 開発環境のセットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 環境変数の設定:
```bash
cp .env.example .env.local
```

3. 開発サーバーの起動:
```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 利用可能なコマンド

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードチェック
- `npm run format` - Prettierでコードフォーマット

## デプロイ

このプロジェクトは [Vercel](https://vercel.com) へのデプロイを推奨しています。

詳細は [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。
