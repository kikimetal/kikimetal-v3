const schema = {
  title: '作ったものの純粋なタイトル',
  subtitle: 'sub...',
  date: '制作した時期',
  time: '制作したおおよその時間',
  role: '[Array] 担当した工程のリストアップ',
  skill: '[Array] 使用したソフト、言語、アーキテクチャ',
  imgLocalPath: 'dummy.jpg',
  linkto: '#',
  comment: '軽い説明など',
}

const data = [
  // {
  //   title: 'Rose Darena',
  //   subtitle: '美容ブランド ローズダレーナ リブランディング',
  //   date: '2018.11',
  //   time: '3 weeks',
  //   role: ['Direction', 'Design'],
  //   skill: ['AdobeXD', 'Photoshop', 'Illustrator'],
  //   // imgLocalPath: '',
  //   linkto: '/design/rosedarena',
  //   comment: ``,
  // },
  {
    title: 'Autumn',
    subtitle: '株式会社Autumn コーポレートサイト',
    date: '2018.10',
    time: '1 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['Vue', 'Nuxt', 'Sass', 'Firebase'],
    // imgLocalPath: '',
    linkto: 'https://autumn-kyoto.co.jp',
    comment: `
      京都で映像制作を中心にクリエイティブの価値を発信しているクリエイティブチームの株式会社Autumn様の、CI設計とコーポレートサイト制作をしました。
      持ち前の映像表現を活かしたウェブ表現をできるようにデザインをしました。
      1週間という集中期間にCI/VIの再定義から実装までを完遂するために、チームのリソースを無駄なく活用できるよう意識しディレクションを行いました。
    `,
  },
  {
    title: 'CARVANCL',
    subtitle: '株式会社カーバンクル コーポレートサイト',
    date: '2018.09',
    time: '5 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['Vue', 'Vuex', 'Nuxt', 'Sass', 'Firebase', 'GoogleAPI', 'AdobeXD'],
    // imgLocalPath: '',
    linkto: 'https://carvancl.co.jp',
    comment: `
      Webアプリケーション・Webサイトを中心に、様々なデザインアウトプットをされている株式会社CARVANCL様の、CI設計とコーポレートサイト制作をしました。
      最上流の要件定義からチームのデザイナーが誤解なくデザインに集中できるように、コンセプトの丁寧な言語化を意識しました。
      ポップでいきいきとしたCIを表現するために、視差効果デザインを採用し、ニュアンスを表現しました。
    `,
  },
  {
    title: 'Maylily Inc.',
    subtitle: '有限会社メイリリィ コーポレートサイト',
    date: '2018.09',
    time: '5 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['Vue', 'Vuex', 'Nuxt', 'Sass', 'Firebase', 'GoogleAPI'],
    // imgLocalPath: '',
    linkto: 'https://maylily.co.jp',
    comment: `
      フレグランスを中心に美容品の商品開発をされている有限会社メイリリィ様のコーポレートサイトを制作しました。
      リニューアルに伴いCIの設定から今後の事業戦略を見据えてリデザインをしました。
      また短期間の事業成長にフレキシブルに対応できるように、スタッフの方が気軽に情報更新できるよう実装しました。`,
  },
  {
    title: 'nomeru',
    subtitle: 'PWA(プログレッシブウェブアプリケーション)',
    date: '2018.08',
    time: '4 weeks',
    role: ['UI Design', 'Coding'],
    skill: ['AdobeXD', 'Sketch', 'Vue', 'Vuetify', 'Stylus'],
    imgLocalPath: 'nomeru/01.jpg',
    linkto: '/design/nomeru',
    comment: `NTTメディアサプライ株式会社様の新サービスの開発チームに参画させていただきました。
      チームで素早くプロトタイピングを行いながら機能提案をしていきました。
      利用者にヒアリングを重ね、ユーザーに寄り添う形でサービスデザインからUIデザインまでを行いました。`,
  },
  {
    title: 'GARMENT Online Store',
    subtitle: '香水ブランド ガーメント ECサイト',
    date: '2018.03',
    time: '1 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['HTML', 'CSS', 'EC-Cube'],
    // imgLocalPath: '',
    linkto: 'https://www.takeruyamashita.com/ec/html/',
    comment: `
      香水ブランド "GARMENT" を店舗販売のみでなく自社オンラインストアで販売したいということで、ECサイトを制作しました。
      コストをかけずに1日でも早く公開したいという要件に沿い、短い時間で必要な機能の実装をしました。
    `,
  },
  {
    title: 'GARMENT',
    subtitle: '香水ブランド ガーメント ブランドサイト',
    date: '2017.09',
    time: '4 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['React', 'Redux', 'JavaScript ES2017', 'Babel', 'Gulp', 'SVG'],
    // imgLocalPath: '',
    linkto: 'https://www.takeruyamashita.com/garment/',
    comment: `
      ファッションと香水の関わりを再定義する香水ブランド Takeru Yamashita "GARMENT" のブランドサイトを制作しました。
      リニューアルに伴い、デバイス上での高速なレスポンスとシームレスで美しいアニメーションを実現するためにSPA実装を採用しました。
      香水を吹きかける瞬間のようなアニメーションや、街の中に入っているようなワクワクするモバイルメニュー展開などを表現しました。`,
  },
  {
    title: 'Bulgarian Rose Cultual Association',
    subtitle: 'ブルガリアンローズ文化協会 ウェブサイト',
    date: '2017.05',
    time: '5 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['PHP', 'HTML', 'CSS', 'JavaScript ES2015', 'p5JS'],
    // imgLocalPath: '',
    linkto: 'http://www.bulgarian-rose.or.jp/',
    comment: `横浜からブルガリア産のダマスクローズの価値を発信されている、一般社団法人ブルガリアンローズ文化協会様のウェブサイトを制作しました。
      p5JSを利用した花びらのアニメーションにより、薔薇の恵みが広がっていくイメージを表現しました。
      またブルガリアの大地の美しい表現を持ち前の美麗な写真を活かして表現できるように心掛けました。`,
  },
  {
    title: 'GARMENT',
    subtitle: '香水ブランド ガーメント ブランドサイト',
    date: '2016.10',
    time: '2 weeks',
    role: ['Design', 'Illustration', 'Coding', 'Deploy'],
    skill: ['HTML', 'CSS', 'jQuery'],
    imgLocalPath: 'garment-v1.jpg',
    linkto: 'https://maylily.sakura.ne.jp/kikimetal/portfolio/garment/v1/',
    comment: `Takeru Yamashita 香水ブランド "GARMENT" のブランドデビューにつきブランドサイトを制作しました。
      HTML/CSSの基礎を学び始めてから1ヶ月の頃の初めてのWeb制作の仕事でした。
      ふわっとしたアニメーションや、WebGLで液体表現を作り、JavaScriptをもっと学び表現を凝らしていきたいと志すきっかけになりました。`,
  },
]

const designItems = data.map(row => ({
  ...schema,
  ...row,
  imgsrc: row.imgLocalPath
    ? require(`~/assets/img/design/${row.imgLocalPath}`)
    : require(`~/assets/img/design/${schema.imgLocalPath}`),
  linkIsExternal: row.linkto
    ? row.linkto.indexOf('http') === 0
      ? true
      : false
    : schema.linkto.indexOf('http') === 0
      ? true
      : false,
}))

export default designItems
