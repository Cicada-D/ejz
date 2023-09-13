<style scoped>
.van-row {
    /* margin-top: 40px; */
    background-color: white;
    border-radius: 10px;
    width: auto;
    padding: 15px 0;
}

.coral>.van-col {
    margin-top: 40px;
}

.van-col .van-row .van-col {
    margin-top: 5px;
}

.coral {
    background: linear-gradient(to bottom, rgb(255, 102, 0) 20%, rgb(243, 244, 246) 40%);
    border-radius: 0%;
}

.van-nav-bar:after {
    border: none;
}

:deep(.van-nav-bar__title) {
    color: white;
    font-size: large;
    margin-top: 20px;
}

.icon-qianbao:before {
    color: aqua;
}
</style>

<template >
    <div>
        <van-nav-bar title="个人中心" style="background-color: rgb(255,102,0); margin-bottom: -1px; " />
        <van-row class="coral c" justify="center" style="z-index: 1;">
            <van-col span="22">
                <van-skeleton :animate="false">
                    <template #template>
                        <div :style="{ display: 'flex', width: '100%' }">
                            <van-image width="70" height="70" fit="cover" radius="100"
                                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            <div :style="{ flex: 1, marginLeft: '16px' }">
                                <div style="color: white; font-size: larger; margin-top: 5px;">
                                    15270089123
                                </div>
                                <div style="margin-top: 15px;">
                                    <img src="../assets//huiyuan.jpg" style="width: 100px;" alt="">
                                </div>
                            </div>
                        </div>
                    </template>
                </van-skeleton>
            </van-col>

            <van-col span="22">
                <van-row justify="center" style="" gutter="10">
                    <van-col span="5" v-for="key in items" style="text-align: center;" @click="changeroute()">
                        <!-- <van-icon size="30" class="iconfont" class-prefix='icon' :name='key.src' /> -->
                        <van-image width="40px" height="40px" fit="contain" :src="key.src" />
                        <div>{{ key.title }}</div>
                    </van-col>
                </van-row>
            </van-col>

            <van-col span="22">
                <van-row justify="center" gutter="10">
                    <van-col span="20">
                        我的售后
                    </van-col>
                    <van-col span="5" v-for="key in items1" style="text-align: center;" @click="changeroute()">
                        <van-image width="40px" height="40px" fit="contain" :src="key.src" />
                        <div>{{ key.title }}</div>
                    </van-col>
                </van-row>
            </van-col>


            <van-col span="22">
                <van-row>
                    <van-col span="24" class="cellc">
                        <van-cell title="我的拼单" is-link />
                    </van-col>
                    <van-col span="24" class="cellc">
                        <van-cell title="我的合同" is-link />
                    </van-col>
                    <van-col span="24" class="cellc">
                        <van-cell title="设置" is-link />
                    </van-col>
                </van-row>
            </van-col>
        </van-row>
    </div>
    <vantabber></vantabber>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import vantabber from './vantabber.vue';
const items = ref([
    {
        src: '/src/assets/项目分类/我的/图片/我的-我的钱包.png',
        title: '我的钱包'
    },
    {
        src: '/src/assets/项目分类/我的/图片/专属会员.png',
        title: '专属会员'
    }, {
        src: '/src/assets/项目分类/我的/图片/充值兑换.png',
        title: '充值兑换'
    }, {
        src: '/src/assets/项目分类/我的/图片/我的卷包.png',
        title: '我的券包'
    }, {
        src: '/src/assets/项目分类/我的/图片/积分商城.png',
        title: '积分商城'
    }, {
        src: '/src/assets/项目分类/我的/图片/次卡购买.png',
        title: '次卡购买'
    }, {
        src: '/src/assets/项目分类/我的/图片/地址管理.jpg',
        title: '地址管理'
    }, {
        src: '/src/assets/项目分类/我的/图片/我的消息.png',
        title: '我的消息'
    }
])

const items1 = ref([
    {
        src: '/src/assets/项目分类/我的/图片/申请发票.png',
        title: '申请发票'
    },
    {
        src: '/src/assets/项目分类/我的/图片/意见反馈.png',
        title: '意见反馈'
    }, {
        src: '/src/assets/项目分类/我的/图片/常见问题.png',
        title: '常见问题'
    }, {
        src: '/src/assets/项目分类/我的/图片/联系客服.png',
        title: '联系客服'
    },
])

</script>
