const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend:{
      colors:{
        '#56AB91':'#56AB91',
        '#030D14':'#030D14',
        'header':'rgba(255, 255, 255, 0.02)',
        '#101920':'#101920',
        '#051018':'#051018',
        '0.25':'rgba(255, 255, 255, 0.25)',
        '#051016':'#051016',
        'btc':'rgba(246, 84, 62, 0.10)',
        'ltc':'rgba(48, 224, 161, 0.10)',
        'xrp':'rgba(99, 143, 254, 0.10)'
      },
      backgroundImage: {
        'contact-bg': "url('./img/contactBg.png')",
        'faqimg': "url('./img/faqimg.png')"
      },
      screens: {
        'tabletmax': '1100px',
        'ddd':'460px',
        'aaa':'360px',
        'sss':'1280px'
      }
    }
  },
  plugins: [],
})
