# SEO設定

更新日：2026年10月22日

## 正規URL

https://mamie-esthetique-studio.pages.dev/

Astroの`site`、canonical、OG URL、構造化データ、robots.txt、sitemap.xmlをこのURLに統一。

## 対応内容

- タイトル：`乃木坂のフェイシャルエステ｜M'amie esthetique studio（マミー）`
- 説明文に乃木坂・六本木からのアクセス、港区赤坂、完全予約制・女性専用、フェイシャルの内容を反映。
- 本文のサロン紹介に正式店名・日本語名・所在地・施術種別を明記。
- canonicalを追加し、ハッシュやクエリーのないトップページを正規URLに指定。
- robotsメタタグとrobots.txtにクロール・インデックスの許可を記載。
- サイトマップは実在するLPのトップURLのみを掲載。ページ内アンカーや外部サイトのURLは掲載せず、根拠のない更新日も設定しない。
- OGとX向けのタイトル・説明・画像・画像代替文を設定。
- 既存ヒーロー画像を1200×630pxのJPEGへ変換してOG画像に使用。画像へのタイトルや注記は追加しない。
- WebSite、WebPage、ImageObject、BeautySalonを`@id`で関連付けたJSON-LDを設定。
- 店舗情報には住所・電話・営業時間・不定休の説明・地図・既存HP・Facebookを設定。
- 店舗自身の口コミに星評価や集計評価の構造化データは追加しない。
- 将来の確認用スクリプトは、本文画像のローカル配信と、OG画像の絶対URLを区別するよう修正。

## 対象ファイル

- `astro.config.mjs`
- `src/pages/index.astro`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/images/og/mamie-esthetique-studio.jpg`
- `scripts/verify-site.mjs`

## 公開後の管理

Cloudflare Pagesへのデプロイ後に反映される設定。Search Consoleでサイトを管理している場合、サイトマップの送信先は`https://mamie-esthetique-studio.pages.dev/sitemap.xml`。

今回の依頼に従い、編集後のビルド、テスト、ブラウザー確認、公開サイトへの反映確認は実行していない。デプロイ・Search Consoleへの登録や送信も実行していない。

## 参照した公式資料

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://docs.astro.build/en/reference/configuration-reference/#site
