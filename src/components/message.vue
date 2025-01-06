<script lang="ts" setup>
import catalog from '@/components/catalog.vue'
// 引入tarojs跳转
import Taro from '@tarojs/taro'
import { Fabulous, Follow } from '@nutui/icons-vue'

import { Idea } from '@/types'

import nameTime from '@/components/nameTime.vue'

const props = defineProps<{
  idea: Idea
}>()

const goDetail = () => {
  Taro.navigateTo({
    url: `/pages/detail/index?id=${props.idea.id}`
  })
}
</script>

<template>
  <div class="message-box" @click="goDetail">
    <div class="first-line">
      <catalog :category="idea.catalog" />
      <div class="subject">
        {{ idea.subject }}
      </div>
    </div>
    <p class="detail">
      {{ idea.detail }}
    </p>
    <div class="img-box">
      <img v-for="item in idea.pics" :src="item.path" />
    </div>
    <nut-divider />
    <div>
      <div class="btm-line">
        <nameTime
          :creatorAvatar="idea.creatorAvatar"
          :creatorName="idea.creatorName"
          :createTime="idea.createTime"
        />
        <div class="like-favorite">
          <Fabulous />
          <span>{{ idea.likeCount }}</span>
          <Follow />
          <span>{{ idea.collectCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nut-divider {
  margin: 15px 0;
}
.message-box {
  padding: 15px;
  box-shadow: 0 0 10px #ccc;
  margin-bottom: 15px;
  .first-line {
    display: flex;
    align-items: center;
    .subject {
      font-weight: 600;
      margin-left: 10px;
    }
  }
  .detail {
    font-size: 20px;
    color: #ccc;
    margin: 15px 0 30px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btm-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      margin-left: 10px;
    }
    .like-favorite {
      display: flex;
      align-items: center;
      span {
        margin: 0 10px;
      }
      & > span:first-of-type {
        margin-right: 20px;
      }
    }
  }
  .img-box {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    img {
      width: calc(33.3% - 20px);
      border-radius: 15px;
      aspect-ratio: 1 / 1; /* 宽高比为 1:1 */
      object-fit: cover; /* 保证图片不会变形，按比例裁剪 */
    }
  }
}
</style>
