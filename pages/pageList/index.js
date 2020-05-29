import { Button } from 'antd'
import Link from 'next/link'
import 'antd/dist/antd.css'
import '../index.css'

export default function () {
  return (
    <div>
      <p>
        <Button type="primary">
          <a href="http://note.youdao.com/noteshare?id=cdceb903fc357fcd530728e5c613dfd8">
            有道云笔记传送门
          </a>
        </Button>
      </p>
      <p>
        <Link href="/study/nuxt">
          <Button type="primary">next.js 试水demo</Button>
        </Link>
      </p>
      <p>
        <Link href="/xgplayer">
          <Button type="primary">西瓜视频H5播放器demo</Button>
        </Link>
      </p>
      <p>
        <Link href="/qrcode">
          <Button type="primary">二维码生成和解析</Button>
        </Link>
      </p>
    </div>
  )
}
