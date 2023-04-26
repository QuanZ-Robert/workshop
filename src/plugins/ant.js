import Vue from 'vue'
import { Icon, Button, notification } from 'ant-design-vue'
const components = [Icon, Button]

const getComponent = () => {
  Vue.prototype.$notification = notification
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default getComponent
