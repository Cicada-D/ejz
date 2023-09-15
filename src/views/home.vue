<style scoped>
/* .head {
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
    width: 100%;
    min-width: 509px;
} */

/* .find {
    display: flex;
    border: 1px solid black;
    background-color: white;
    border-radius: 20px;
    margin: 20px 20px;
    padding: 3px 10px;
    height: 30px;
}

.xiaoxi {
    margin: 20px 20px;
    text-align: center;
}

.xiaoxi .icon {
    margin: 0;
}

.find input {
    border: none;
    height: 28px;
}

.dizhi {

    border: none;
    border-right: 1px solid black;
    width: 80px;
    line-height: 30px;
    margin-right: 10px;
}

.icon {
    width: 20px;
    height: 20px;
    margin: 4px 4px 0 0;
} */


.van-search {
    --van-search-padding: 10px 0;
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}

.van-swipe__indicators {
    bottom: 0%;

}

:deep(.van-swipe__indicator) {
    width: 15px;
    background-color: chocolate;
    border-radius: 20%;

}

.van-swipe {
    padding: 20px 0;
}
</style>


<template>
    <van-sticky style="min-width: 390px;">
        <!-- <div class="head">

            <div class="find">
                <div class="dizhi">
                    江西省
                </div>
                <div>
                    <svg class="icon">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                </div>
                <div class="">
                    <span icon="#icon-sousuo"></span>
                    <input type="text" placeholder="请输入商品名称">
                </div>
            </div>

            <div class="xiaoxi">
                <svg class="icon">
                    <use xlink:href="#icon-xiaoxi"></use>
                </svg>
                <div >
                    消息
                </div>
            </div>
        </div> -->

        <van-row justify="space-around" align="center" style="background-color:  rgb(255, 102, 0);">

            <van-col span="20" style="border-radius: 20px;">
                <van-row align="center" wrap="false" gutter="">
                    <van-col span="8" style="margin-right: -28px;">
                        <van-button size="large" to="index" style="border: none; height: 34px;  border-radius: 20px;">
                            <span style="font-size: 16px;">江西...</span>
                            <van-icon name="arrow-down" size="10"
                                style="border-right: 1px solid black; width: 28px; line-height: 20px;" />
                        </van-button>
                    </van-col>

                    <van-col span="12">
                        <van-search v-model="value" shape="round" background=" rgb(255, 102, 0)" placeholder="请输入搜索关键词" />
                    </van-col>

                </van-row>

            </van-col>
            <van-col span="2" style="text-align: center; color: aliceblue;">
                <van-icon name="chat-o" size="25" title="1" />
                <div>消息</div>
            </van-col>
        </van-row>



    </van-sticky>

    <van-row justify="center" style=" min-width: 390px; border-radius: 10%; background-color: white;">
        <van-col span="22">
            <lunbo></lunbo>
        </van-col>
        <van-col span="22">
            <van-swipe class="my-swipe">
                <van-swipe-item v-for="item in items">
                    <van-row style="" gutter="10">
                        <van-col span="6" v-for="key in item" style="text-align: center; margin-bottom: 10px;"
                            @click="changeroute()">
                            <!-- <van-icon size="30" class="iconfont" class-prefix='icon' :name='key.src' /> -->
                            <van-image width="40px" height="40px" fit="contain" :src="key.src" />
                            <div style="font-size: 14px; margin-top: 8px;">{{ key.title }}</div>
                        </van-col>
                    </van-row>
                </van-swipe-item>
            </van-swipe>
        </van-col>
        <van-col span="22" style="background-color: white;">
            <van-row justify="space-around">
                <van-col span="10">
                    1
                </van-col>
                <van-col span="10">
                    1
                </van-col>
            </van-row>
        </van-col>
    </van-row>

    <van-row justify="space-around"
        style="margin-top: 10px; min-width: 390px; background-color: rgb(243, 244, 246); padding-top: 10px;">
        <van-col span="22">
            <van-cell title-style="font-size: large;" title="热门项目" is-link value="更多内容"
                style="background-color: rgb(243, 244, 246) ;" />
        </van-col>
        <van-col span="10" v-for="li in list">
            <van-card :price="li.price" :title="li.title"
                style=" border-radius: 10px; background-color: white; margin-bottom: 10px;" :thumb="li.thumb"
                @click="changeroute()">
            </van-card>
        </van-col>
    </van-row>
    <vantabber></vantabber>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import vantabber from './vantabber.vue';

import lunbo from '../views/lunbo/lunboone.vue'
const value = ref('');
// const onSearch = (val) => showToast(val);
// const onClickButton = () => showToast(value.value);

const items = ref([
    [
        {
            src: '/src/assets/项目分类/首页/图标/开荒保洁.png',
            title: '开荒保洁'
        },
        {
            src: '/src/assets/项目分类/首页/图标/大扫除.png',
            title: '大扫除新'
        }, {
            src: '/src/assets/项目分类/首页/图标/擦玻璃.png',
            title: '擦玻璃'
        }, {
            src: '/src/assets/项目分类/首页/图标/深度保洁.png',
            title: '深度保洁'
        }, {
            src: '/src/assets/项目分类/首页/图标/厨房保洁.png',
            title: '厨房保洁'
        }, {
            src: '/src/assets/项目分类/首页/图标/空调.png',
            title: '空调清洗'
        }, {
            src: '/src/assets/项目分类/首页/图标/油烟机清洗.png',
            title: '油烟机清洗'
        }, {
            src: '/src/assets/项目分类/首页/图标/家电清洗.png',
            title: '家电套餐'
        }
    ],

    [
        {
            src: '/src/assets/项目分类/首页/图标/洗衣机.png',
            title: '洗衣机清洗'
        }, {
            src: '/src/assets/项目分类/首页/图标/热水器清洗.png',
            title: '热水器清洗'
        }, {
            src: '/src/assets/项目分类/首页/图标/卫生间清洗.png',
            title: '卫生间清洗'
        }, {
            src: '/src/assets/项目分类/首页/图标/地板打蜡.png',
            title: '地板打蜡'
        }, {
            src: '/src/assets/项目分类/首页/图标/地暖清洗.png',
            title: '地暖清洗'
        }, {
            src: '/src/assets/项目分类/首页/图标/地毯清洗.png',
            title: '地毯清洗'
        }
    ],

])


const list = ref([
    {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    }, {
        desc: '描述信息',
        title: '商品标题',
        price: 0,
        thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    },

])

// const that = this
const router = useRouter()

const changeroute = () => {
    router.push('two_three')
}


</script>
