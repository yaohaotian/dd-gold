import { createApp } from 'vue'
import { IconFont } from '@nutui/icons-vue'
import vconsole from 'vconsole'

import '@nutui/icons-vue/dist/style_iconfont.css'
import './app.scss'

import { requestLogin } from '@/utils/request1'
// new vconsole()

const App = createApp({
  async onLaunch(options) {
    await requestLogin()
  },
  onShow() {}
})
App.use(IconFont)
export default App
