import styles from './next.scss'
import { Button } from 'antd'

export default function NUXT_JS() {
  return (
    <div className="">
      <title>nuxt demo</title>
      {'设置title 会覆盖head里面的title属性，直接改变页面的标题'}
      <link rel="icon" href="/image/beautyLogo.jpg" />
      <p>{'这个 link 修改logo不生效'}</p>
      <img className="img" src="/image/beautyLogo.jpg"></img>
      <pre>
        {`
        Link + href
        Link 与 a 标签的区别： 
          link 跳转不完全刷新页面 a
          标签跳转会导致页面的整体刷新
      `}
      </pre>

      <pre>
        {`
          静态生成是在构建时生成HTML的预渲染方法。预渲染的HTML然后在每个请求上重用
          服务器端渲染是一种预渲染方法，可在每个请求上生成HTML 

          我们建议您尽可能使用“ 静态生成”（带有或不带有数据），
          因为您的页面可以构建一次并由CDN提供服务，这比让服务器根据每个请求呈现页面快得多
          `}
      </pre>
      <Button type="primary">antd-button</Button>
    </div>
  )
}
