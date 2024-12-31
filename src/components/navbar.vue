<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <nut-navbar :title="title" left-show></nut-navbar>
</template>

<style scoped></style>
