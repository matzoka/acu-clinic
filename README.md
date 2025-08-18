acu-clinic

静的サイト（HTML/CSS/JavaScript）で構成された鍼灸院のウェブサイトです。`index.html`、`styles.css`、`main.js`、および各種画像・アイコンのみで動作します。

**特徴**
- シンプルな構成: ビルドや依存関係なしでそのまま動作
- レスポンシブ対応のレイアウトとアイコン一式
- 画像は PNG/WebP を用意し軽量化

**ローカルでの確認方法**
- 直接開く: `index.html` をブラウザで開く
- 簡易サーバーを起動:
  - Python: `python3 -m http.server 5173` で起動し、`http://localhost:5173/` を開く

**デプロイ（GitHub Pages）**
- `main` ブランチへの push をトリガーに GitHub Actions で自動デプロイ
- 公開 URL（既定）: `https://acu-clinic.pages.dev/`
- 反映タイミング: push 後 1～2 分ほどで反映（Actions の進行に依存）

**予約・お問い合わせ**
- Web予約フォーム: https://forms.gle/kgyipd7Hjen31qgh8
- メール: osugiclinic@gmail.com
- 電話: 042-868-2048

**ディレクトリ構成（抜粋）**
```
.
├── index.html
├── styles.css
├── main.js
├── images/
└── icons/
```

**ライセンス**
- 詳細は `LICENSE` を参照してください。

**更新手順の例**
- 変更: `styles.css` を編集
- コミット: `git add -A && git commit -m "Update styles"`
- 反映: `git push`（自動で Pages にデプロイされます）
