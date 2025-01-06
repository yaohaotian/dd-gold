<script lang="ts" setup>
import { fmtTime } from '@/utils'
defineProps({
  creatorAvatar: {
    type: String
  },
  creatorName: {},
  createTime: {}
})
</script>

<template>
  <div class="name-time">
    <nut-avatar size="24">
      <img :src="creatorAvatar" />
    </nut-avatar>
    <span class="name">{{ creatorName }}</span>
    <span class="line">|</span>
    <span>{{ fmtTime(createTime) }}</span>
  </div>
</template>

<style lang="scss" scoped>
.name-time {
  font-size: 12px;
  color: #ccc;
  display: flex;
  align-items: center;
  .nut-avatar{
    margin-right: 10px;
  }
  .line {
    margin: 0 10px;
  }
}
</style>
