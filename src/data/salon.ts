export const salon = {
  name: "M'amie esthetique studio",
  phone: '03-6906-5411', phoneHref: 'tel:0369065411',
  address: '東京都港区赤坂9-6-29', building: 'パシフィック乃木坂507',
  links: {
    contact: 'https://mamie-es.com/contact', menu: 'https://mamie-es.com/menu',
    shopping: 'https://mamie-es.com/shopping', voices: 'https://mamie-es.com/category/voice',
    facebook: 'https://www.facebook.com/people/Mamie-esthetique-studio/100063775502407/?ref=embed_page',
    map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('東京都港区赤坂9-6-29 パシフィック乃木坂'),
  },
};
export const menus = [
  { name: 'スタンダード クラス', text: '基本のお手入れを、丁寧に。クレンジングから角質ケア、イオン導入、ハンドマッサージ、パックまで。' },
  { name: 'エクセレント クラス', text: 'いつものケアに、もうひと手間。ポレーションやハンドマッサージを取り入れたフェイシャルコース。' },
  { name: 'ロイヤル クラス', text: '肌と向き合う時間を、ゆったりと。ポレーションとイオン導入を組み合わせた、充実のお手入れ。' },
];
// 2026-10-21に公式サイトの個別記事と照合。文章は原文の抜粋。
export const reviews = [
  { author: 'M.K様', age: '40代', date: '2019.11.20', isoDate: '2019-11-20', text: 'とても落ち着く空間で施術していただきいやされました。充実した内容でしたがリーズナブルな価格で満足です。', source: 'https://mamie-es.com/2095' },
  { author: 'T.H様', age: '30代', date: '2019.07.06', isoDate: '2019-07-06', text: 'とても丁寧な施術をしてもらい満足しました。オーナーもお話しやすい方でいろいろためになることを教えてもらい良かったです。', source: 'https://mamie-es.com/2075' },
  { author: 'K.N様', age: '40代', date: '2019.04.02', isoDate: '2019-04-02', text: 'とても穏やかで居心地の良い空間に心から癒されました。熟練された技術の施術者様のお優しい人柄が手から伝わりました。', source: 'https://mamie-es.com/2038' },
];
export const questions = [
  { question: '初めてですが、どのメニューを選べばよいですか？', answer: 'フェイシャルのコース内容は、公式サイトのメニュー・料金表でご覧いただけます。迷われる場合は、お問い合わせページからご相談ください。', link: salon.links.menu, label: 'メニュー・料金表を見る' },
  { question: '予約はどこからできますか？', answer: 'お電話、または公式サイトのご予約・お問い合わせページからご連絡ください。完全予約制・女性専用のサロンです。', link: salon.links.contact, label: 'ご予約・お問い合わせへ' },
  { question: 'ホームケアの商品も購入できますか？', answer: 'サロンで使用しているホームケア商品を、公式サイトのショッピングページでご紹介しています。商品や購入についてのお問い合わせも、そちらからご確認いただけます。', link: salon.links.shopping, label: 'ショッピングを見る' },
];

