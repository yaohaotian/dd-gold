<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'

import { IdeaDetail } from '@/types'

import { reqIdeaDetail } from '@/api/sys'
import { fmtTime } from '@/utils'

import navbar from '@/components/navbar.vue'
import catalog from '@/components/catalog.vue'

const params = Taro.getCurrentInstance().router.params

const detail = ref<IdeaDetail>()
const getIdeaDetail = async () => {
  const result = await reqIdeaDetail(params.id)
  detail.value = result.data
}
onMounted(() => {
  getIdeaDetail()
})
</script>

<template>
  <navbar title="详情" />
  <div class="detail">
    <h5>
      <catalog />
      <span>{{ detail?.subject }}</span>
    </h5>
  </div>
  <div class="name-time">
    <nut-avatar size="small">
      <img :src="detail?.creatorAvatar" />
    </nut-avatar>
    <span class="name">{{ detail?.creatorName }}</span>
    <span class="line"> | </span>
    <span>{{ fmtTime(detail?.createTime) }}</span>
  </div>
</template>

<style lang="scss" scoped>
.detail {
  padding: 30px 20px;
}
.name-time {
  display: flex;
  align-items: center;
  .line {
    margin: 0 10px;
  }
}
</style>
