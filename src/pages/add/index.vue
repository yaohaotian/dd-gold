<script setup>
import { ref, onMounted, reactive } from 'vue'
import Taro from '@tarojs/taro';
import { reqDepartmentList } from '@/api/sys'

const uploadUrl = 'https://xxxxx'

const departmentList = ref([])

const show = ref(false)

const formData = ref({
  subject: '',
  catalog: '',
  detail: '',
  longitude: '',
  latitude: '',
  submitType: '',
  anonymous: false,
  pics: [],
  files: []
})

const defaultFileList = reactive([
  {
    name: '文件1.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'success',
    message: '上传成功',
    type: 'image'
  },
  {
    name: '文件2.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'error',
    message: '上传失败',
    type: 'image'
  },
  {
    name: '文件3.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'uploading',
    message: '上传中...',
    type: 'image'
  }
])

const getDepartmentList = async () => {
  const result = await reqDepartmentList()
  departmentList.value = result.data.map((i) => ({
    text: i.name,
    value: i.name
  }))
}

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue[0], selectedOptions[0])
  show.value = false
}

onMounted(() => {

  console.log(Taro.chooseImage);

  getDepartmentList()
})
</script>
<template>
  <nut-form label-position="top">
    <nut-form-item label="点子类型">
      <nut-cell
        title="请选择点子类型"
        :desc="String(val)"
        @click="show = true"
      />
      <nut-popup v-model:visible="show" position="bottom">
        <nut-picker
          v-model="formData.catalog"
          :columns="departmentList"
          title="请选择城市"
          @confirm="confirm"
          @cancel="show = false"
        />
      </nut-popup>
    </nut-form-item>
    <nut-form-item label="标题">
      <nut-input
        v-model="formData.subject"
        placeholder="请输入标题"
        type="text"
      />
    </nut-form-item>
    <nut-form-item label="描述">
      <nut-textarea
        v-model="formData.detail"
        rows="4"
        limit-show
        :max-length="140"
      />
    </nut-form-item>
    <nut-form-item label="图片">
      <nut-uploader
        :auto-upload="false"
        v-model:file-list="formData.pics"
        maximum="9"
        multiple
      />
    </nut-form-item>
    <nut-form-item label="匿名发布">
      <nut-switch v-model="formData.anonymous" />
    </nut-form-item>
    <nut-form-item label="附件">
      <nut-uploader
        v-model:file-list="formData.files"
        :auto-upload="false"
        maximum="10"
        multiple
        list-type="list"
      >
        <nut-button size="large" color="#496EF2"> + 上传文件</nut-button>
      </nut-uploader>
    </nut-form-item>
  </nut-form>
</template>

<style lang="scss" scoped>
.nut-form {
  box-shadow: none;
}
.nut-uploader {
  width: 100%;
  :deep(.nut-uploader__slot) {
    width: 100%;
  }
}
</style>
