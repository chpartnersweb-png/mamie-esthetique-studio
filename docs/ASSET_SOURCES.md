# 素材・掲載情報の記録

制作日：2026年10月21日。既存HPの写真を参照し、組み込みのimage_genで画像を生成。写真にタイトルやイメージ注記は配置していない。

## 保存した既存素材

| 使用・参考素材 | 取得元 | 保存先 |
| --- | --- | --- |
| ロゴ・掲載 | https://mamie-es.com/wp-content/themes/Standard_black_cmspro/img/logo_pc.jpg | public/images/brand/mamie-logo-original.jpg |
| 実際の店内・掲載 | https://mamie-es.com/wp-content/themes/Standard_black_cmspro/img/IMG_4056.jpg | docs/references/salon.jpg → public/images/original/salon.webp |
| 顔まわりの施術・生成の参考 | https://mamie-es.com/wp-content/themes/Standard_black_cmspro/img/stockfoto_34002063_S.jpg | docs/references/treatment-reference.jpg |
| 実際の施術・生成の参考 | https://mamie-es.com/wp-content/themes/Standard_black_cmspro/img/24d5ea5c37ecc98cb92d456db2b30aec.jpg | docs/references/hand-treatment.jpg |
| 商品・生成の参考 | https://mamie-es.com/wp-content/themes/Standard_black_cmspro/img/Lre4kRlwtBmzuEK1423218084_1423218139.jpg | docs/references/products.jpg |
| 商品・生成の参考 | https://mamie-es.com/wp-content/themes/Standard_black_cmspro/img/Lre4kRlwtBmzuEK1423218084_1423218531.jpg | docs/references/products-lotion.jpg |

## 生成画像と使用したプロンプト

方式：組み込みimage_gen。既存写真はreferenceとして入力。実際の店内・スタッフ・口コミ投稿者を生成で置き換える用途には使用していない。PNG原本はdocs/references/generated/、掲載用WebPはpublic/images/generated/に保存。Sharpではサイズと形式のみを最適化した。

### hero.webp / hero-mobile.webp

参考：treatment-reference.jpg。元画像：hero.png。モバイルは同じ写真から軽量な800px幅を作成し、CSSで表示位置を調整。

Use case: photorealistic-natural. Asset type: main hero photograph for an elegant Japanese facial salon website. The input image is a reference only for the gentle facial massage pose and white towels, not an identity to copy. Create a NEW photograph: a Japanese adult woman around 35 receiving a gentle facial massage, eyes closed and a serene natural expression, a white towel headband and ivory linen. Two anatomically natural therapist hands gently supporting her temple and jaw, correct fingers. A three-quarter side view of face filling the right half, shoulders modestly covered with white towel, face angled toward the left. Bright soft diffused daylight, very pale blue-gray shadows, warm natural skin, realistic subtle pores. The left quarter is soft out of focus ivory linen and breathing space. Refined quiet beauty editorial photography, intimate human scale, high end but welcoming. Landscape 3:2 composition with the face fully visible in a central crop for mobile. No text, no titles, no captions, no logos, no watermark, no border, no collage, no room panorama, no medical equipment, no flowers, no plastic airbrushed skin. Output a single photograph.

### care.webp

参考：hand-treatment.jpg。元画像：care.png。

Use case: photorealistic-natural. Asset type: secondary portrait photograph for a Japanese facial salon webpage. Input is reference only for real facial skincare setting and the use of white towels; create a different new scene. Close editorial detail of a Japanese adult woman's cheek, jaw and neck, relaxed with eyes softly closed at top of frame, a therapist's anatomically natural hands gently massaging the jaw with light skincare cream. Focus on the gentle contact of fingers and cheek and skin's real subtle texture. Modestly covered in white terrycloth, soft warm daylight, creamy ivory and extremely pale blue-gray tones, quiet intimate welcoming atmosphere. Portrait 4:5, elegant photographic composition with no graphic elements. No device, no extra hands, no repeated fingers, no text, no titles, no labels, no watermark, no collage. Single photographic image.

### homecare.webp

参考：products.jpg、products-lotion.jpg。元画像：homecare.png。元の小さな商品紹介画像をもとに、ホームケア紹介用の写真を生成。

Use case: product-mockup. Asset type: quiet home skincare photograph for a Japanese facial salon website. These two input images are reference scans of the salon's actual products. Photograph the two product bottles shown at the LEFT of each reference scan, preserve the recognizable white and pale icy blue cylindrical bottle forms, silver details, clear lids and their actual tiny LA PRECIA product marks as closely as possible. Remove all of the surrounding Japanese advertising text from the reference scene. Create a single natural still life of these two skincare bottles standing on a pale off-white stone ledge beside a folded ivory towel. Bright soft window light from the left, faint architectural shadow, very pale blue-gray background, restrained Japanese beauty editorial photography. Bottles occupy the central third, plenty of breathing room. Landscape 4:3. Do not add any invented packaging, flowers, plants, bubbles or ornaments. No overlay text, no captions, no titles, no pricing, no graphic labels, no watermark, no collage. The product bottles are the subject; only their small original packaging markings may remain.

## 口コミ

本文と掲載日は取得した個別記事のHTMLと照合。LPには原文の抜粋を掲載し、年代・掲載日・元記事へのリンクを添えている。星評価や人物写真は追加していない。

- M.K様・40代／2019-11-20：https://mamie-es.com/2095
- T.H様・30代／2019-07-06：https://mamie-es.com/2075
- K.N様・40代／2019-04-02：https://mamie-es.com/2038

元記事、メニュー、商品、店舗情報の取得HTMLはdocs/sources/に保存。表示する抜粋とリンクはsrc/data/salon.tsで管理。

## 運用

- お問い合わせ：https://mamie-es.com/contact
- メニュー・料金表：https://mamie-es.com/menu
- ショッピング：https://mamie-es.com/shopping
- 口コミ一覧：https://mamie-es.com/category/voice
- LP内の画像はローカルファイルから配信。元のPNGや参照写真はpublicの外に保管し、本番配信に含めない。
- 画像の再最適化：`node scripts/prepare-images.mjs`（Astroが利用するSharpがインストールされている環境）。
- 生成HTMLと素材の照合：`npm run build`の後に`node scripts/verify-site.mjs`。
