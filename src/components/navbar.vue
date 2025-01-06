<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { My } from '@nutui/icons-vue'


defineProps({
  title: {
    type: String,
    default: ''
  }
})

const clickBack = () => {
  Taro.navigateBack()
}

const goMy = () => {
  Taro.navigateTo({
    url: '/pages/my/index'
  })
}
</script>

<template>
  <nut-navbar :title="title" left-show @click-back="clickBack">
    <template #right>
      <My color="black" @click="goMy" />
    </template>
  </nut-navbar>
</template>

<style scoped></style>
