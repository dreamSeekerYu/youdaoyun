// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = () =>
  withSass(
    withCSS({
      postcssLoaderOptions: {
        parser: true,
        config: {
          ctx: {
            theme: JSON.stringify(process.env.REACT_APP_THEME),
          },
        },
      },
    })
  )
// module.exports = withSass({
//   postcssLoaderOptions: {
//     parser: true,
//     config: {
//       ctx: {
//         theme: JSON.stringify(process.env.REACT_APP_THEME),
//       },
//     },
//   },
// })

// module.exports = withCSS({
//   postcssLoaderOptions: {
//     parser: true,
//     config: {
//       ctx: {
//         theme: JSON.stringify(process.env.REACT_APP_THEME),
//       },
//     },
//   },
// })
