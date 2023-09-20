<style scoped></style>

<template>
  <vannavbar :title="titlen"></vannavbar>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
  <van-toast v-model:show="show" style="padding: 0">
    <template #message>
      <van-image :src="image" width="200" height="140" style="display: block" />
    </template>
  </van-toast>
</template>

<script setup>
import vannavbar from './vannavbar.vue'
import { Login } from '../api/login.js'
import { ref } from 'vue'
import { showToast } from 'vant'
import { useRoute, useRouter } from 'vue-router'


const username = ref('')
const password = ref('')
const titlen = ref('登录')
const router = useRouter()
const show = ref(false)
const Login_item = async (parmas) => {
  const res = (await Login(parmas)).data
  if (!res) {
    console.log('err')
    showToast({
      message: '账号密码错误',
      // position: 'top',
    })
  } else {
    console.log(res)
    localStorage.setItem('username', res.username)
    localStorage.setItem('token', res.token)
    router.push('/orders')
  }
}

const onSubmit = (values) => {
  console.log('submit', values)
  Login_item(values)
}
</script>
