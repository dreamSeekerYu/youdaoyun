import React, { Component } from 'react'
import { Upload, Button } from 'antd'
import { UploadOutlined, StarOutlined } from '@ant-design/icons'
// import qrcode from 'qrcode'
const QRCode = require('qrcode.react')

// import qrcode from './qrcode'
// const qrcode = require('./qrcode')

// //获取预览图片路径

const getObjectURL = function (file) {
  var url = null
  if (window.createObjectURL != undefined) {
    // basic
    url = window.createObjectURL(file)
  } else if (window.URL != undefined) {
    // mozilla(firefox)
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}

// 解析图片生成url
const getQrcodeResult = (file) => {
  console.log(getObjectURL(file)) // newfile[0]是通过input file上传的二维码图片文件
  // QRCode.decode(getObjectURL(file))
  // QRCode.callback = function (imgMsg) {
  //   console.log('imgMsg', imgMsg)
  // }

  // QRCode.toDataURL(getObjectURL(file), function (err, url) {
  //   console.log(url)
  // })
}

// 生成二维码
// const translateUrlToImg = () => {
//   var qrcode = new QRCode(document.getElementById('qrcode'), {
//     width: 100,
//     height: 100,
//   })
// }

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList)
      const res = getQrcodeResult(file)
    }
  },
  beforeUpload(file, fileList) {
    const res = getQrcodeResult(file)
    console.log(file, fileList)
    return true
  },
  defaultFileList: [
    // {
    //   uid: '1',
    //   name: 'xxx.png',
    //   status: 'done',
    //   response: 'Server Error 500', // custom error message to show
    //   url: 'http://www.baidu.com/xxx.png',
    // },
  ],
  showUploadList: {
    showDownloadIcon: true,
    downloadIcon: 'download ',
    showRemoveIcon: true,
    removeIcon: (
      <StarOutlined
        onClick={(e) => console.log(e, 'custom removeIcon event')}
      />
    ),
  },
}

export default class extends Component {
  state = {
    qrcodeResultUrl: '',
    inputValue: 'https://www.ctrip.com/?allianceid=1050724&sid=1786019',
    imgSrc: '',
    // uploadFile: '',
  }
  translateUrlToImg = () => {
    // var qrcode = new qrcode(document.getElementById('qrcode'), {
    //   width: 100,
    //   height: 100,
    // })
  }
  // 重置imgSrc
  setimgSrc = () => {
    this.setState({
      imgSrc: this.state.inputValue,
    })
  }
  setinputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }
  checkUploadFile = (e) => {
    var that = this
    let count = 0
    // console.log('上传文件', e.files[0])
    var files = e.target.files[0]
    this.setState({
      uploadFile: files.name,
    })

    const reader = new FileReader()

    // 转换为base64 的格式
    reader.readAsDataURL(files)

    reader.onload = function (e) {
      that.setState({
        qrcodeResultUrl: this.result,
      })
      console.log(this.result)
      console.log('加载成功')
    }
    reader.onloadstart = function () {
      console.log('开始加载')
    }
    reader.onloadend = () => {
      console.log('加载结束')
    }
    reader.onprogress = function () {
      count++
      console.log('加载中:' + count)
    }
  }
  render() {
    const { qrcodeResultUrl, inputValue, imgSrc, uploadFile } = this.state
    // console.log(QRCode)
    return (
      <div>
        antd 上传配合解析二维码失败
        <Upload {...props}>
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
        选择二维码图片并上传 文件上传转换为base64
        <input
          type="file"
          // value={uploadFile}
          onChange={(e) => this.checkUploadFile(e)}
        />
        <hr />
        <p>解析结果:(base64格式的字符串)</p>
        <p style={{ width: '300px' }}>
          <a style={{ 'word-break': 'break-all' }} href={qrcodeResultUrl}>
            {qrcodeResultUrl}
          </a>
        </p>
        <img src={qrcodeResultUrl} alt="ss" />
        <hr />
        <hr />
        <p>
          <input value={inputValue} onChange={this.setinputValue}></input>
        </p>
        <p>
          <Button onClick={this.setimgSrc}>点击生成二维码</Button>
          <span>
            (默认切换为携程的二维码,默认展示百度二维码，输入自定义网址则生成对应的二维码)
          </span>
        </p>
        <p>
          <QRCode
            // colorDark="#000000"
            // colorLight="#ffffff"
            value={
              imgSrc ? imgSrc : 'https://www.baidu.com/?tn=62095104_26_oem_dg'
            }
          />
        </p>
      </div>
    )
  }
}
