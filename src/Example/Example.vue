<template>
  <div id="Example">
    <div>
      <ul>
        <li>href: "icon-logo"</li>
        <li>color: "#74ebd5"</li>
        <li class="red">size: "150px"</li>
        <li>stroke.color: "#cc0fa0"</li>
        <li>stroke.width: "10px"</li>
        <li class="red">stroke.transition.duration: "1s"</li>
      </ul>
      <Icon
        href="icon-logo"
        color="#74ebd5"
        size="150px"
        :stroke="{ color: '#cc0fa0', width: '10px' }"
      />
    </div>
    <div style="margin-left: 20px">
      <ul>
        <li>Custom SVG:</li>
        <li>color: "pink"</li>
        <li class="red">size: "80px"</li>
        <li>stroke.color: "red"</li>
        <li>stroke.width: "20px"</li>
        <li class="red">stroke.transition.duration: "3s"</li>
      </ul>
      <Icon
        color="pink"
        size="80px"
        :stroke="{
          color: 'red',
          width: '20px',
          transition: { duration: '3s' }
        }"
      >
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3085"
          width="128"
          height="128"
          fill="blue"
        >
          <path
            d="M250.6 686l598.1-460.5-500.7 513v166.1l111.8-122.4 263.8 122.4 236.7-784.1-896.1 469L250.6 686z"
            p-id="3086"
          ></path>
        </svg>
      </Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue"
</script>

<style lang="scss">
#Example {
  color: #74ebd5;
  display: flex;
  ul {
    color: black;
  }
  .red {
    color: red;
  }
}
</style>
