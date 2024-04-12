export {}

declare module "vue" {
  export interface GlobalComponents {
    Icon: (typeof import("./Icon/Icon.vue"))["default"]
  }
}
