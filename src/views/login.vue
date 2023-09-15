<style scoped></style>

<template>
    <vannavbar :title="titlen"></vannavbar>

    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
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
import vannavbar from './vannavbar.vue';

import { ref } from 'vue';
import { showToast } from 'vant';

const username = ref('');
const password = ref('');
const titlen = ref('登录')

const show = ref(false);
const onSubmit = (values) => {
    console.log('submit', values);
    showToast({
        message: '顶部展示',
        // position: 'top',
    });
};
</script>