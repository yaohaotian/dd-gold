<script setup>
import { ref } from 'vue'
import { reqIdeaList } from '@/api/sys'
import { Icon } from '@iconify/vue'
import Taro from '@tarojs/taro'


import topbar from '@/components/home/topbar.vue'
import navbar from '@/components/navbar.vue'

const goAdd = () => {
  Taro.navigateTo({
    url: '/pages/add/index'
  })
}
</script>

<template>
  <navbar title="首页" />
  <topbar />
  <Icon
    class="add-btn"
    icon="zondicons:add-solid"
    width="50"
    height="50"
    color="#4A72F1"
    @click="goAdd"
  />
</template>

<style lang="scss" scoped>
.add-btn {
  position: fixed;
  right: 40px;
  bottom: 60px;
  z-index: 999;
}
</style>
