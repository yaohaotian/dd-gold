import { createApp } from 'vue'
import { IconFont } from '@nutui/icons-vue'
import '@nutui/icons-vue/dist/style_iconfont.css'

import vconsole from 'vconsole'

import { requestLogin } from '@/utils/request1'

import './app.scss'

new vconsole()

const App = createApp({
  async onLaunch(options) {
    await requestLogin()
  },
  onShow() {}
})
App.use(IconFont)
export default App
