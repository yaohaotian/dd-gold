<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Fabulous, Follow } from '@nutui/icons-vue'
import Taro from '@tarojs/taro'
import { Icon } from '@iconify/vue'

import { IdeaDetail } from '@/types'

import { reqIdeaDetail, reqPraiseIdea, reqCollectIdea } from '@/api/sys'
import { fmtTime } from '@/utils'

import navbar from '@/components/navbar.vue'
import catalog from '@/components/catalog.vue'
import nameTime from '@/components/nameTime.vue'

const params = Taro.getCurrentInstance().router.params

const detail = ref<IdeaDetail>()
const getIdeaDetail = async () => {
  const result = await reqIdeaDetail(params.id)
  detail.value = result.data
}

const getCommentIdea = async () => {}

const like = async () => {
  const result = await reqPraiseIdea(params.id)
  if (result.data) {
    detail.value!.liked = true
    detail.value!.likeCount++
  } else {
    detail.value!.liked = false
    detail.value!.likeCount--
  }
}

const collect = async () => {
  const result = await reqCollectIdea(params.id)
  if (result.data) {
    detail.value!.collected = true
    detail.value!.collectCount++
  } else {
    detail.value!.collected = false
    detail.value!.collectCount--
  }
}

onMounted(() => {
  getIdeaDetail()
  getCommentIdea()
})
</script>

<template>
  <navbar title="详情" />
  <div class="detail">
    <h5>
      <catalog />
      <span>{{ detail?.subject }}</span>
    </h5>
    <nameTime
      class="name-time"
      :creatorAvatar="detail?.creatorAvatar"
      :creatorName="detail?.creatorName"
      :createTime="detail?.createTime"
    />
    <p class="detail-content">
      {{ detail?.detail }}
    </p>
  </div>

  <div class="file-box">
    <div v-for="(file, index) in detail?.files" :key="index" class="file">
      <Icon icon="line-md:file-filled" width="24" height="24" />
      <span>{{ JSON.parse(file.path).fileName }}</span>
    </div>
  </div>
  <div class="img-box">
    <div v-for="(pic, index) in detail?.pics" :key="index">
      <img :src="pic.path" />
    </div>
  </div>
  <div v-if="detail?.approveState === 'PUBLISHED'" class="detail-footer">
    <div class="like-favorite">
      <Fabulous @click="like" :color="detail?.liked ? '#ff0000' : ''" />
      <span>{{ detail?.likeCount }}</span>
      <Follow @click="collect" :color="detail?.collected ? '#ff0000' : ''" />
      <span>{{ detail?.collectCount }}</span>
    </div>
  </div>
  <div v-if="detail?.acceptCreatorAvatar" class="recover">
    <nut-avatar>
      <img :src="detail?.acceptCreatorAvatar" />
    </nut-avatar>
    <div>
      <div class="name">{{ detail?.acceptCreatorName }}</div>
      <p class="content">{{ detail?.acceptMessage }}</p>
      <div class="time">{{ fmtTime(detail?.acceptCreateTime) }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail {
  padding: 30px;
  .name-time {
    margin: 15px 0;
  }
}
.nut-divider {
  margin: 0;
}
.detail-footer {
  padding: 10px 0;
  .like-favorite {
    display: flex;
    justify-content: right;
    span {
      margin: 0 10px;
    }
    & > span:first-of-type {
      margin-right: 20px;
    }
  }
}

.file-box {
  .file {
    display: flex;
    align-items: center;
    margin: 15px 20px;
    color: #4d75f2;
    background-color: #e9f2fe;
    padding: 10px;
    border-radius: 5px;
  }
}

.img-box {
  text-align: center;
  img {
    max-height: 300px;
  }
}

.recover {
  display: flex;
  padding: 20px;
  .nut-avatar {
    flex-shrink: 0;
    margin-right: 20px;
  }
  .name {
    font-weight: 600;
  }
  .time {
    color: #ccc;
  }
}
</style>
