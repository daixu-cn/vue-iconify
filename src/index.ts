import type { App } from "vue"
import Icon from "./Icon/Icon.vue"
export * from "./Icon/types"

function install(app: App) {
  app.component(Icon.__name!, Icon)
}
Icon.install = install

export default { install }
export { Icon }
