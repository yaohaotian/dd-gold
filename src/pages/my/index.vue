<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import navbar from '@/components/navbar.vue'
import { reqMyIdea } from '@/api/sys'

import { MyDetail } from '@/types'

import message from '@/components/message.vue'

onMounted(() => {
  getMyIdea()
})

const detail = ref<MyDetail>({})

const value = ref('1')
const list = ref([
  {
    title: '全部',
    paneKey: '1',
    sortType: [
      'APPROVING',
      'PUB_APPROVING',
      'PUB_CONFIRM',
      'PUBLISHED',
      'UN_SUBMIT',
      'REJECT'
    ],
    ideas: []
  },
  {
    title: '处理中',
    paneKey: '2',
    sortType: ['APPROVING', 'PUB_APPROVING', 'PUB_CONFIRM'],
    ideas: []
  },
  {
    title: '采纳',
    paneKey: '3',
    sortType: ['PUBLISHED'],
    ideas: []
  },
  {
    title: '暂存',
    paneKey: '4',
    sortType: ['UN_SUBMIT'],
    ideas: []
  },
  {
    title: '退回',
    paneKey: '5',
    sortType: ['REJECT'],
    ideas: []
  }
])
const getMyIdea = async () => {
  const res = await reqMyIdea()
  detail.value = res.data
  sortIdea(res.data.ideas)
}

const sortIdea = (ideas) => {
  for (const idea of ideas) {
    const { approveState } = idea
    for (const i of list.value) {
      if (i.sortType.includes(approveState)) {
        i.ideas.push(idea)
      }
    }
  }
}
</script>

<template>
  <div>
    <navbar title="我的" />
    <div class="top-wrapper">
      <div class="top">
        <span class="avatar-name">
          <nut-avatar size="large">
            <img :src="detail.avatar" />
          </nut-avatar>
          <span>{{ detail.nickName }}</span>
        </span>
        <div class="point">
          <div>{{ detail.points }}</div>
          <div>金点分</div>
        </div>
      </div>
    </div>
  </div>

  <nut-tabs v-model="value">
    <template #titles>
      <div
        v-for="item in list"
        :key="item.paneKey"
        class="custom-tab-item"
        @click="value = item.paneKey"
      >
        <div class="custom-title" :class="{ active: value === item.paneKey }">
          <div>{{ item.ideas.length }}</div>
          <div>{{ item.title }}</div>
        </div>
      </div>
    </template>
    <nut-tab-pane
      v-for="item in list"
      :key="item.paneKey"
      :pane-key="item.paneKey"
    >
      <message v-for="(x, index) in item.ideas" :key="index" :idea="x" />
    </nut-tab-pane>
  </nut-tabs>
</template>

<style lang="scss" scoped>
.top-wrapper {
  background-image: linear-gradient(to bottom, #ffffff, #e5bf8c);
}
.top {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  height: 300px;
  background-image: url('@/static/imgs/assets/lines.png');
  background-size: 100% 100%;
  .avatar-name {
    font-weight: 600;
    display: flex;
    align-items: center;
    .nut-avatar {
      margin-right: 20px;
      border: 5px solid #c8a758;
      box-shadow: 0 0 15px #c8a758;
    }
  }
  .point {
    text-align: center;
    font-weight: 600;
    & > div:first-of-type {
      font-size: x-large;
      color: #fbf0d1;
      margin-top: 20%;
    }
    & > div:last-of-type {
      color: #fbf0d1;
    }
    padding: 30px 0;
    height: 100%;
    width: 230px;
    background-image: url('@/static/imgs/assets/grade-bg-img.png');
    background-size: 100% 100%;
  }
}

.nut-tabs__list {
  display: flex;
  justify-content: space-around;
  .custom-tab-item {
    flex-grow: 1;
    .custom-title {
      text-align: center;
      height: 100%;
      &.active {
        border-bottom: 6px solid blue;
      }
    }
  }
}
.nut-tab-pane{
  padding: 5px;
}

.custom-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
