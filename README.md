### next.js 默认框架

### [发布在 gitHub 上面](https://github.com/dreamSeekerYu/youdaoyun)

```
    https://github.com/dreamSeekerYu/youdaoyun
```

### [zeit 自动化部署](https://zeit.co/dreamseekeryu/youdaoyun)

```
    https://zeit.co/dreamseekeryu/youdaoyun
```

### [访问地址](https://youdaoyun.now.sh/)

```
    https://youdaoyun.now.sh/
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#### 舍弃 styled-jsx 配置 sass 、css 模块化

```
yarn add @zeit/next-sass node-sass @zeit/next-css

// next.config.js 文件中添加
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  postcssLoaderOptions: {
    parser: true,
    config: {
      ctx: {
        theme: JSON.stringify(process.env.REACT_APP_THEME)
      }
    }
  }
})

// next.config.js   兼容  css 和 sass
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
```

#### 添加 antd 按需加载

yarn add antd babel-plugin-import -s
.babelrc 文件

```
{
  "presets": ["next/babel"], // 覆盖nextjs的默认babel配置，以本文件的babel配置为准
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd" // 将antd的引入写法转换成按需引入写法
        //"style": "css", // 统一导入antd的样式
      }
    ]
  ]
}
```
