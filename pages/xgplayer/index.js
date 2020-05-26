// import Player from 'xgplayer'
import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    setTimeout(() => {}, 100)
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h3> 西瓜视频 H5 播放器</h3>
        服务端渲染没有window 报错，尝试改用其他框架
        <div id="mse"></div>
      </div>
    )
  }
}

{
  /* <script>
let player = new Player({
    id: 'mse',
    url: '//abc.com/.mp4',
})
</script> */
}

// 纯函数组件没有生命周期
// export default function NUXT_JS() {
//   return (
//     <div className="">
//       <title>西瓜视频 H5 播放器</title>
//       <div>西瓜视频 H5 播放器</div>
//       <dir>没有compondidmounted 如何操作dom？？</dir>
//       <div id="mse"></div>
//     </div>
//   )
// }
