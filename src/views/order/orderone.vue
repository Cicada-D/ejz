<style scoped>
.danwei,
.jiage {
    color: chocolate;
    font-family: large;
    vertical-align: bottom;
}

.jiage {
    font-size: 20px;
}

.van-row {
    background-color: aliceblue;
    padding: 10px;
}
:deep(.van-icon-arrow:before) {
    content: '';
}
</style>

<template>
    <van-row justify="center"  >
        <van-col span="24" class="van-hairline--bottom">
            <van-cell title="单元格" value="内容" />
        </van-col>
        <van-col span="24" class="van-hairline--bottom">
            <van-cell is-link to="/order">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <div class="van-multi-ellipsis--l2">
                        <span class="custom-title" style="color:rgb(206, 207, 207)">订单编号:</span>
                        <span style="margin-left: 10px;">{{ zorder.list.oid }}</span>
                    </div>
                    <div class="van-multi-ellipsis--l2">
                        <span class="custom-title" style="color:rgb(206, 207, 207)">服务时间:</span>
                        <span style="margin-left: 10px;" >{{ zorder.list.fwtime }}</span>
                    </div>
                    <div class="van-multi-ellipsis--l2">
                        <span class="custom-title" style="color:rgb(206, 207, 207)">服务地址:</span>
                        <span style="margin-left: 10px;">{{ zorder.list.dizhi }}</span>
                    </div>
                    <div class="van-multi-ellipsis--l2">
                        <span class="custom-title" style="color:rgb(206, 207, 207)">下单时间:</span>
                        <span style="margin-left: 10px;">{{ zorder.list.xdtime }}</span>
                    </div>
                </template>
            </van-cell>
        </van-col>
        <van-col span="24">
            <van-cell style="align-items: center;">
                <template #title>
                    <div>
                        <span class="danwei">
                            ￥
                        </span>
                        <span class="jiage">
                            800
                        </span>
                    </div>
                </template>
                <template #value>
                    <van-button round size="small" color="chocolate">
                        去付款
                    </van-button>
                </template>
            </van-cell>
        </van-col>
    </van-row>
</template>


<script setup>
import {ref} from 'vue'
// import { defineProps } from 'vue';

const zorder = defineProps({
    list: Object
})

console.log(zorder.list)

</script>