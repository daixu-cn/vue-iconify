# vue-iconify

English | [简体中文](https://github.com/daixu-cn/vue-iconify/blob/main/README.zh_CN.md)

This is a component for integrating SVG icons into Vue.js projects. It allows you to easily integrate SVG icons into your applications and customize their styles and animations.

When you use the Icon component, it's essential to load the corresponding font icon first. You can achieve this by importing the Iconfont font file in the header of your HTML file, as shown below:

```html
<script src="https://at.alicdn.com/t/c/font_4066504_fxun8e8b6dt.js"></script>
```

The above code embeds the [Alibaba Vector Icon Library](https://www.iconfont.cn/) and loads icons using the `Symbol` method. Subsequently, our component fills the icon content based on the id attribute of the provided `Symbol` tag. This design enables you to easily use icons in your project and customize their styles and sizes as needed. The Icon component supports various scenarios, making your application interface more vibrant and colorful.

Of course, besides the `Alibaba Vector Icon Library`, you can also use other icon libraries or integrate SVG icons into your project using the [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) plugin.

## 🗺 Preview

![Example](https://daixu.oss-cn-hongkong.aliyuncs.com/markdown/vue-iconify.gif)

## 📦 Install

```shell
npm install vue-iconify -S
```

## 💡 Usage
###  Global Import

```ts
// main.ts

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// ---Start---
import Icon from "vue-iconify"
app.use(Icon)
// ---End---

app.mount('#app')
```

```ts
// tsconfig.json

{
  // ...other
  "compilerOptions": {
    // ...other
    "types": ["vue-iconify/global"],
  }
}
```

###  On-Demand Import
```ts
import { Icon } from "vue-iconify"
```

### Example
```vue
<template>
  <div id="Home">
    <Icon href="icon-logo" color="pink" size="30px" :stroke="{ color: 'red' }" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "vue-iconify"
</script>
```

## 🔩 Attributes

### Props
| prop | description | type | default |
| - | - | - | - |
| href | `Custom SVG is optional` Icon name (id) | string | - |
| color | Icon color | string | 'currentColor' |
| size | Icon size | string | '1em' |
| stroke | Stroke animation configuration | [`[StorkConfig]`](#propsstorkconfig) | - |

### Props.StorkConfig
| prop | description | type | default |
| - | - | - | - |
| color | `(required)` Stroke color | string | - |
| width | Stroke width | string | '10px' |
| lineJoin | Defines the shape used at the corners of the path when stroking | "inherit" \| "miter" \| "round" \| "bevel" | 'round' |
| lineCap | Defines the shape to be used at the end of an open subpath when it is stroked | "inherit" \| "round" \| "butt" \| "square" | 'round' |
| transition | Transition effect | [`[TransitionConfig]`](#propstransitionconfig) | - |

### Props.TransitionConfig
| prop | description | type | default |
| - | - | - | - |
| duration | The duration of the transition | string | '1s' |
| timingFunction | The timing function of the transition | string | 'ease' |
| delay | The delay before the transition starts | string | '0s' |

## 🎍 Slots

Custom SVG - Example：

```vue
<template>
  <div id="Example">
    <Icon
      color='pink'
      size="100px"
      :stroke="{ color:'red', width: '30', duration: '3s' }"
    >
      <svg
        t="1712734817395"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3085"
        width="128"
        height="128"
      >
        <path
          d="M250.6 686l598.1-460.5-500.7 513v166.1l111.8-122.4 263.8 122.4 236.7-784.1-896.1 469L250.6 686z"
          p-id="3086"
        ></path>
      </svg>
    </Icon>
  </div>
</template>
```