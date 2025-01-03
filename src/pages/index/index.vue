<script setup>
import { ref, onMounted } from 'vue'
import { reqIdeaList } from '@/api/sys'

import topbar from '@/components/topbar.vue'
import navbar from '@/components/navbar.vue'
import message from '@/components/message.vue'

onMounted(() => {})

const getIdeaList = async () => {}
</script>

<template>
  <navbar title="首页" />
  <topbar />
</template>
