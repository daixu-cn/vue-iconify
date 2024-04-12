# vue-iconify

[English](https://github.com/daixu-cn/vue-iconify/blob/main/README.md) | 中文

这是一个用于在 Vue.js 项目中引入 SVG 图标的组件，它允许您轻松地将 SVG 图标集成到您的应用程序中，并向其添加自定义样式和动画。

当您使用 Icon 组件时，首先需要加载对应的字体图标。您可以通过在 HTML 文件的头部引入 Iconfont 字体文件来实现，如下所示:

```html
<script src="https://at.alicdn.com/t/c/font_4066504_fxun8e8b6dt.js"></script>
```

上述代码插入了 [阿里巴巴矢量图标库](https://www.iconfont.cn/)，并且通过 `Symbol` 的方式加载图标，之后我们的组件会根据提供的 `Symbol` 标签的 `id` 属性来填充图标内容。这种设计使得您可以轻松地在您的项目中使用图标，并根据需要进行自定义样式和大小调整。Icon 组件支持各种场景，让您的应用界面更加丰富多彩。

当然，除了 `阿里巴巴矢量图标库` 您也可以使用其他 `图标库` 或者通过 [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) 插件去将 SVG 图标集成到您的项目中。

## 🗺 预览

![Example](https://daixu.oss-ap-northeast-1.aliyuncs.com/images/vue-iconify.gif)

## 📦 安装

```shell
npm install vue-iconify -S
```

## 💡 使用
###  全局引入

```ts
// main.ts

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// ---开始---
import Icon from "vue-iconify"
app.use(Icon)
// ---结束---

app.mount('#app')
```

```ts
// tsconfig.json

{
  // ...其他配置
  "compilerOptions": {
    // ...其他配置
    "types": ["vue-iconify/global"],
  }
}
```

###  按需引入
```ts
import { Icon } from "vue-iconify"
```

### DEMO
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
| href | `自定义 SVG 可不填` 图标名 (id) | string | - |
| color | 图标颜色 | string | 'currentColor' |
| size | 图标大小 | string | '1em' |
| stroke | 描边动画配置 | [`[StorkConfig]`](#propsstorkconfig) | - |

### Props.StorkConfig
| prop | description | type | default |
| - | - | - | - |
| color | `(必填)` 描边颜色 | string | - |
| width | 描边宽度 | string | '10px' |
| lineJoin | 描边线条连接方式 | "inherit" \| "miter" \| "round" \| "bevel" | 'round' |
| lineCap | 描边线条末端方式 | "inherit" \| "round" \| "butt" \| "square" | 'round' |
| transition | 过渡效果 | [`[TransitionConfig]`](#propstransitionconfig) | - |

### Props.TransitionConfig
| prop | description | type | default |
| - | - | - | - |
| duration | 指定过渡的持续时间 | string | '1s' |
| timingFunction | 指定转换的计时函数 | string | 'ease' |
| delay | 指定转换开始之前的延迟 | string | '0s' |

## 🎍 Slots

自定义 SVG - 示例：

```vue
<template>
  <div id="Example">
    <Icon
      color='pink'
      size="100px"
      :stroke="{ color:'red', width: '30', duration: '3s' }"
    >
      <svg
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