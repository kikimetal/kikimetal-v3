const schema = {
  title: '作ったものの純粋なタイトル',
  subtitle: 'sub...',
  date: '制作した時期',
  time: '制作したおおよその時間',
  role: '[Array] 担当した工程のリストアップ',
  skill: '[Array] 使用したソフト、言語、アーキテクチャ',
  comment: '軽い説明など',
  imgLocalPath: 'dummy.jpg',
  linkto: '#',
}

const data = [
  {
    title: 'Rose Darena',
    subtitle: '美容ブランド ローズダレーナ リブランディング',
    date: '2018.11',
    time: '3 weeks',
    role: ['Direction', 'Design'],
    skill: ['AdobeXD', 'Photoshop', 'Illustrator'],
    // imgLocalPath: '',
    // linkto: '',
  },
  {
    title: 'Autumn',
    subtitle: '株式会社Autumn コーポレートサイト',
    date: '2018.10',
    time: '1 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['Vue', 'Nuxt', 'Sass', 'Firebase'],
    // imgLocalPath: '',
    linkto: 'https://autumn-kyoto.co.jp',
  },
  {
    title: 'CARVANCL',
    subtitle: '株式会社カーバンクル コーポレートサイト',
    date: '2018.10',
    time: '5 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['Vue', 'Vuex', 'Nuxt', 'Sass', 'Firebase', 'AdobeXD'],
    // imgLocalPath: '',
    // linkto: '',
  },
  {
    title: 'nomeru',
    subtitle: 'PWA(プログレッシブウェブアプリケーション)',
    date: '2018.08',
    time: '4 weeks',
    role: ['UI Design', 'Coding'],
    skill: ['AdobeXD', 'Sketch', 'Vue', 'Vuetify', 'Stylus'],
    comment: `NTTメディアサプライ株式会社様の新サービスの開発チームに参画させていただきました。
      チームで素早くプロトタイピングを行いながら機能提案をしていきました。利用者にヒアリングを重ね、ユーザーに寄り添う形でサービスデザインからUIデザインまでを行いました。`,
    imgLocalPath: 'nomeru/01.jpg',
    linkto: '/design/nomeru',
  },
  {
    title: 'GARMENT',
    subtitle: '香水ブランド ガーメント ブランドウェブサイト',
    date: '2017.09',
    time: '4 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['React', 'Redux', 'JavaScript ES2017', 'Babel', 'Gulp', 'PHP'],
    // imgLocalPath: '',
    // linkto: '',
  },
  {
    title: 'Bulgarian Rose Cultual Association',
    subtitle: 'ブルガリアンローズ文化協会 ウェブサイト',
    date: '2017.05',
    time: '5 weeks',
    role: ['Direction', 'Design', 'Coding', 'Deploy'],
    skill: ['PHP', 'HTML', 'CSS', 'JavaScript ES2015', 'p5JS'],
    comment: `横浜からブルガリア産のダマスクローズの価値を発信されている、一般社団法人ブルガリアンローズ文化協会様のウェブサイトを制作させていただきました。
      p5JSを利用した花びらのアニメーションにより、薔薇の恵みが広がっていくイメージを表現しました。制作の全行程を担当しました。`,
    // imgLocalPath: '',
    // linkto: '',
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
