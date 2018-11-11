const base = ' | KIKIMETAL ききめたる'
const common = {
  meta: [
    // { name: 'fb:admins', content: 'admin id' },
    // { name: 'og:type', content: 'website' },
    // { name: 'og:url', content: 'url' },
    // { name: 'og:title', content: 'og page title' },
    // { name: 'og:site_name', content: 'og site name' },
    // { name: 'og:description', content: 'og description' },
    // { name: 'og:image', content: 'og image' },
  ],
  link: [],
}

// NUXT に渡すためのフォーマッター
const generate = data => ({
  title: data.title + base,
  meta: [
    { hid: 'description', name: 'description', content: data.description },
    ...common.meta,
  ],
  link: [...common.link],
})

export default {
  '/': generate({
    title: 'About',
  }),
  '/design': generate({
    title: 'Design',
    description: 'KIKIMETALのウェブ/アプリデザインの紹介です。',
  }),
  '/art': generate({
    title: 'Art',
    description: 'KIKIMETALのアート作品などの紹介です。主にふとももの絵です。',
  }),
}
