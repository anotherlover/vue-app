import * as custom from './filters'

export default {
  install(Vue) {
    Object.keys(custom).forEach( key => Vue.filter(key, custom[key]))
  }
}