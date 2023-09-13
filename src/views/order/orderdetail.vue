<style scoped>
.row {
    background-color: aliceblue;
    padding: 10px;

}

.title,
.head {
    text-align: center;
    padding-top: 4px;
    font-size: 14px;
    color: rgb(96, 96, 97);
}

.van-row .van-col {
    background-color: white;
    padding: 6px 5px;
}

.head {
    background-color: rgb(209, 208, 206)
}

.price {
    color: red;
}
</style>

<template>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-row class="row" v-for="order in orders">
        <van-col span="24" style="background-color:rgb(209, 208, 206)">
            <van-row align="center">
                <van-col span="6" class="head" style="background-color:rgb(209, 208, 206)">
                    服务信息
                </van-col>
            </van-row>
        </van-col>
        <van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    订单编号
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2">
                    {{ order.oid }}
                </van-col>
            </van-row>
        </van-col>
        <van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    服务类型:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2">
                    {{ order.ty }}
                </van-col>
            </van-row>
        </van-col><van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    下单时间:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2">
                    {{ order.xdtime }}
                </van-col>
            </van-row>
        </van-col><van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    服务时间:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2">
                    {{ order.fwtime }}
                </van-col>
            </van-row>
        </van-col><van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    服务地址:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2">
                    {{ order.dizhi }}
                </van-col>
            </van-row>
        </van-col><van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    联系电话:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2">
                    {{ order.telephone }}
                </van-col>
            </van-row>
        </van-col>
    </van-row>

    <van-row class="row" v-for="order in orders">
        <van-col span="24" style="background-color:rgb(209, 208, 206)">
            <van-row align="center">
                <van-col span="6" class="head" style="background-color:rgb(209, 208, 206)">
                    支付信息
                </van-col>
            </van-row>
        </van-col>
        <van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    订单总价:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2 price">
                    {{ order.zj }} 元
                </van-col>
            </van-row>
        </van-col>
        <van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    优惠金额:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2 price">
                    {{ order.yh }} 元
                </van-col>
            </van-row>
        </van-col>
        <van-col span="24" class="van-hairline--bottom">
            <van-row align="center">
                <van-col span="6" class="title">
                    应付金额:
                </van-col>
                <van-col span="18" class="van-multi-ellipsis--l2 price">
                    {{ order.yfje }} 元
                </van-col>
            </van-row>
        </van-col>
    </van-row>
</template>

<script setup>
import { ref } from 'vue'

// const list = ref([
//     {
//         title: '订单编号',
//         to: 'oid'
//     }, {
//         title: '服务类型',
//         to: 'ty',
//     }, {
//         title: '下单时间',
//         to: 'xdtime'
//     }, {
//         title: '服务时间',
//         to: 'fwtime'
//     }, {
//         title: '服务地址',
//         to: 'dizhi'
//     }, {
//         title: '联系电话',
//         to: 'telephone'
//     }
// ])


const orders = ref([
    {
        oid: 'J234123JNKSd23',
        ty: '化纤地毯',
        xdtime: '2020-1-3',
        fwtime: '2020-1-7 09:09~2020-1-7 13:00',
        dizhi: '江西省南昌市东华理工大学研一',
        telephone: '1381381008',
        zj: '800',
        yh: '0',
        yfje: '800'
    }
])
const onClickLeft = () => history.back();
// console.log(this.$router.name)

</script>