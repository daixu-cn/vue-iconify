import type { CSSProperties, SVGAttributes } from "vue"
import type Icon from "./Icon.vue"

export interface TransitionConfig {
  // The duration of the transition
  duration?: CSSProperties["transitionDuration"]
  // The timing function of the transition
  timingFunction?: CSSProperties["transitionTimingFunction"]
  // The delay before the transition starts
  delay?: CSSProperties["transitionDelay"]
}
export interface StorkConfig {
  // Stroke color
  color: SVGAttributes["stroke"]
  // Stroke width
  width?: SVGAttributes["stroke-width"]
  // Defines the shape used at the corners of the path when stroking
  lineJoin?: SVGAttributes["stroke-linejoin"]
  // Defines the shape to be used at the end of an open subpath when it is stroked
  lineCap?: SVGAttributes["stroke-linecap"]
  // Transition effect
  transition?: TransitionConfig
}

export interface IconProps {
  // Icon name
  href?: SVGAttributes["href"]
  // Icon color
  color?: SVGAttributes["fill"]
  // Icon size
  size?: CSSProperties["width"]
  // Stroke animation configuration
  stroke?: StorkConfig
}

export type IconInstance = InstanceType<typeof Icon>
