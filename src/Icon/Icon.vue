<template>
  <span :class="identifier">
    <slot>
      <svg aria-hidden="true">
        <use :xlink:href="`#${href}`" />
      </svg>
    </slot>
  </span>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, useSlots, onUnmounted } from "vue"
import type { IconProps } from "./types"
import { useMutationObserver } from "@vueuse/core"

const props = withDefaults(defineProps<IconProps>(), {
  color: "currentColor",
  size: "1em"
})

const identifier = `DX-Icon_${Math.random().toString(36).slice(2)}`
const href = ref(props.href)
const slots = useSlots()

function setSvgStyle() {
  const $svg = document.querySelector<SVGElement>(`.${identifier} svg`)
  if (!$svg) return

  $svg.style.width = props.size.toString()
  $svg.style.height = props.size.toString()
  $svg.style.fill = props.color
}
function setStrokePath($svgPaths: NodeListOf<SVGPathElement>) {
  for (const path of $svgPaths) {
    const length = Math.ceil(path.getTotalLength()).toString()

    path.setAttribute("stroke-length", length)
    path.style.strokeDasharray = length
    path.style.strokeDashoffset = length
    path.style.stroke = props.stroke?.color ?? "currentColor"
    path.style.strokeWidth = props.stroke?.width?.toString() ?? "10px"
    path.style.strokeLinejoin = props.stroke?.lineJoin ?? "round"
    path.style.strokeLinecap = props.stroke?.lineCap ?? "round"
    path.style.transitionProperty = "stroke-dashoffset"
    path.style.transitionTimingFunction =
      props.stroke?.transition?.timingFunction ?? "ease"
    path.style.transitionDelay = props.stroke?.transition?.delay ?? "0s"
  }

  requestAnimationFrame(() => {
    for (const path of $svgPaths) {
      path.style.transitionDuration = props.stroke?.transition?.duration ?? "1s"
    }
  })
}
function mutationObserver() {
  const { stop } = useMutationObserver(
    document.body,
    mutations => {
      for (const { type, addedNodes } of mutations) {
        if (type === "childList") {
          for (const node of addedNodes) {
            if (node.nodeName.toUpperCase() === "SVG") {
              for (const item of (node as SVGAElement).children) {
                if (item.getAttribute("id") === props.href) {
                  setStrokeAnimation()
                  stop()
                  return
                }
              }
            }
          }
        }
      }
    },
    {
      childList: true,
      subtree: true
    }
  )
}
function setStrokeAnimation() {
  if (!props?.stroke) return

  const $svg = document.querySelector<SVGElement>(`.${identifier} svg`)
  if (!$svg) return

  let $svgPaths: NodeListOf<SVGPathElement>

  if (slots?.default) {
    $svgPaths = $svg.querySelectorAll<SVGPathElement>(`path`)
  } else {
    document.querySelector(`#${identifier}`)?.remove()
    const $use = $svg?.querySelector<SVGUseElement>(`use`)

    const _href = $use?.getAttribute("xlink:href")
    if (!_href) return

    const $symbol = document.querySelector<SVGSymbolElement>(_href)
    if (!$symbol) {
      mutationObserver()
      return
    }

    let $Icon = $symbol.cloneNode(true) as SVGSymbolElement
    $Icon.setAttribute("id", identifier)
    $symbol.parentNode?.insertBefore($Icon, $symbol.nextSibling)
    href.value = identifier

    $svgPaths = $Icon?.querySelectorAll<SVGPathElement>("path")
  }

  setStrokePath($svgPaths)
  $svg.addEventListener("mouseenter", () => {
    for (const path of $svgPaths) {
      path.style.strokeDashoffset = "0"
    }
  })
  $svg.addEventListener("mouseleave", () => {
    for (const path of $svgPaths) {
      const length = path.getAttribute("stroke-length") ?? "0"
      path.style.strokeDasharray = length
      path.style.strokeDashoffset = length
    }
  })
}

watch(
  props,
  () => {
    href.value = props.href
    nextTick(setSvgStyle)
    nextTick(setStrokeAnimation)
  },
  { immediate: true }
)

onUnmounted(() => {
  document.querySelector(`#${identifier}`)?.remove()
})
</script>
