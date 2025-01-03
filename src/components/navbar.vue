<script lang="ts" setup>
import Taro from '@tarojs/taro'

defineProps({
  title: {
    type: String,
    default: ''
  }
})

const clickBack = () => {
  Taro.navigateBack()
}
</script>

<template>
  <nut-navbar :title="title" left-show @click-back="clickBack"></nut-navbar>
</template>

<style scoped></style>
