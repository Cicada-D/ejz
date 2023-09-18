<style scoped>
:deep(.van-nav-bar__title) {
    color: white;
}

:deep(.van-icon-arrow-left:before) {
    color: white;
}

.bc {
    background-color: rgb(255, 102, 0);
    color: white;
    text-align: center;
}

.ky {
    font-size: 14px;
    padding: 20px 0 0;
}

.je {
    font-size: 36px;
    padding: 5px 0 40px;
    font-weight: 700;

}

.cd {
    padding: 13px;
    text-align: center;

}

.qczc {
    text-align: center;
    padding: 36px 0;
    background-color: rgb(243, 244, 246);
}

.qcz {
    background-color: rgb(255, 102, 0);
    color: white;
    width: 100px;
}
</style>

<template>
    <!-- <van-nav-bar style="background-color: rgb(255, 102, 0);" title="标题" left-arrow @click-left="onClickLeft"
        class=" vannavbar " /> -->
    <vannavbar :value="titlen"></vannavbar>
    <van-row class="bc">
        <van-col span="24" class="ky">
            <span>
                可用金额
            </span>
        </van-col>
        <van-col span="24" class="je">
            <span>0.00元</span> <van-icon size="15" name="arrow" style="margin-top: -20px;" />
        </van-col>
    </van-row>
    <van-row justify="center">
        <van-col span="12" class="cd">
            <div style="border-right: 1px solid black;">
                充值卡金额:
                <span></span>
            </div>
        </van-col>
        <van-col span="12" class="cd">
            <div>
                冻结金额:
                <span></span>
            </div>
        </van-col>
    </van-row>

    <van-row>
        <van-col span="24" class="qczc">
            <van-button round class="qcz">
                去充值
            </van-button>
        </van-col>
    </van-row>

    <van-row>
        <van-col span="24">
            <van-tabs v-model:active="active">
                <van-tab title="账户记录">
                    <van-cell value="收支总额:0.00元" @click="showPopup">
                        <!-- 使用 title 插槽来自定义标题 -->
                        <template #title>
                            <span class="custom-title">{{ currentDate[0] }} 年 {{ currentDate[1] }} 月</span>
                            <van-icon name="arrow-down" />
                        </template>
                    </van-cell>
                    <van-popup v-model:show="show" position="bottom" :style="{ height: '40%' }">
                        <van-date-picker v-model="currentDate" title="选择年月" :min-date="minDate" :max-date="maxDate"
                            :columns-type="columnsType" :formatter="formatter" :on-confirm="confirm" :on-cancel="cancel"/>
                    </van-popup>
                </van-tab>
                <van-tab title="消费记录">
                    <van-cell value="收支总额:0.00元" @click="showPopup">
                        <!-- 使用 title 插槽来自定义标题 -->
                        <template #title>
                            <span class="custom-title">{{ currentDate[0] }} 年 {{ currentDate[1] }} 月</span>
                            <van-icon name="arrow-down" />
                        </template>
                    </van-cell>
                    <van-popup v-model:show="show" position="bottom" :style="{ height: '40%' }">
                        <van-date-picker v-model="currentDate" title="选择年月" :min-date="minDate" :max-date="maxDate"
                            :columns-type="columnsType" :formatter="formatter" :on-confirm="confirm" :on-cancel="cancel"/>
                    </van-popup>

                </van-tab>
            </van-tabs>
        </van-col>
    </van-row>
</template>

<script setup>
import { ref } from 'vue'
import vannavbar from '../vannavbar.vue'
const onClickLeft = () => history.back();
const titlen = ref("我的钱包")

const date = ref('');
var show = ref(false);

const currentDate = ref(['2021', '01']);
const columnsType = ['year', 'month'];

const formatter = (type, option) => {
    if (type === 'year') {
        option.text += '年';
    }
    if (type === 'month') {
        option.text += '月';
    }
    return option;
};

const cancel = () => {
    show = false
    console.log(show)
}

const confirm = () => {
    show = false
    console.log(show)
}
const showPopup = () => {
    show.value = true;
};
</script>