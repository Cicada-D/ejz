<style scoped>
.cell {
    font-size: 16px;
}

.cellg {
    padding-top: 25px;
    background-color: rgb(243, 244, 246);
}

:deep(.van-cell__value) {
    color: black;
}
:deep(textarea) {
    background-color: rgb(243, 244, 246);
    border-radius: 20px;
    padding: 5px;
}
</style>

<template>
    <vannavbar :title="titlen"></vannavbar>
    <van-form style="background-color: rgb(243, 244, 246); height: 800px;">
        <van-cell-group class="cellg">
            <van-cell class="cell">
                <template #title>
                    服务项目
                </template>
                <template #value>
                    有家具全装修
                </template>
            </van-cell>
            <van-cell is-link to="/dzgl">
                <template #title>
                    地址
                </template>
            </van-cell>
            <van-cell title="服务数量">
                <template #value>
                    <van-field v-model="value" placeholder="输入多少平米" input-align="right" style="padding: 0;" />
                </template>
            </van-cell>
            <van-cell title="服务时间" is-link @click="showPopup">
                <template #value>
                    <span style="color: rgb(255, 102, 0);">选择年月日</span>
                </template>
            </van-cell>
            <van-popup v-model:show="show" :style="{ padding: '64px' }">内容</van-popup>
            <van-cell title="优惠券">
                <template #value>
                    无可用优惠券
                </template>
            </van-cell>
            <van-field class="" v-model="message" rows="10" label-align="top" autosize label="留言" type="textarea" placeholder="请输入留言" />
        </van-cell-group>
    </van-form>
    <van-submit-bar :price="3050" button-text="立即预约" tip-icon="after-sale" label="订单总额" text-align="left" @submit="onSubmit" >
        
    </van-submit-bar>
</template>

<script setup>
import vannavbar from '../vannavbar.vue';
import { ref } from 'vue';
const titlen = '订单确定'
const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };

</script>