<style scoped></style>

<template>
    <vannavbar :title="titlen"></vannavbar>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="username" name="用户名" label="用户名：" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="dianhua" name="电话" label="电话：" placeholder="电话"
                :rules="[{ required: true, message: '请填写电话' }]" />
            <van-field v-model="dizhi" name="地址" label="地址：" placeholder="地址"
                :rules="[{ required: true, message: '请填写' }]" />
            <van-field v-model="xxdizhi" name="详细地址" label="详细地址：" placeholder="详细地址"
                :rules="[{ required: true, message: 'xx小区-xx栋-xx单元-xx房间号' }]" />
            <van-field v-model="jzmianji" name="建筑面积" label="建筑面积：(平方米)" placeholder="建筑面积"
                :rules="[{ required: true, message: '请填写房屋面积' }]" />
            <van-field v-model="blmianjii" name="玻璃面积" label="玻璃面积：(平方米)" placeholder="玻璃面积"
                :rules="[{ required: true, message: '请填写玻璃面积 ' }]" />

            <van-cell title="宠物信息" is-link @click="showPopup1" />
            <van-popup v-model:show="show1" position="bottom">

                <van-picker title="宠物信息" :columns="columns1" @confirm="onConfirm1" @cancel="onCancel1"
                    @change="onChange1" />
            </van-popup>

            <van-cell title="是否阳光房" is-link @click="showPopup2" />
            <van-popup v-model:show="show2" position="bottom">
                <van-picker title="宠物信息" :columns="columns2" @confirm="onConfirm2" @cancel="onCancel2"
                    @change="onChange2" />
            </van-popup>

            <van-cell title="是否复式" is-link @click="showPopup3" />
            <van-popup v-model:show="show3" position="bottom">
                <van-picker title="宠物信息" :columns="columns3" @confirm="onConfirm3" @cancel="onCancel3"
                    @change="onChange3" />
            </van-popup>

            <van-cell title="是否出租房" is-link @click="showPopup4" />
            <van-popup v-model:show="show4" position="bottom">
                <van-picker title="宠物信息" :columns="columns4" @confirm="onConfirm4" @cancel="onCancel4"
                    @change="onChange4" />
            </van-popup>
            <van-field name="checkbox" label="设为默认地址">
                <template #input>
                    <van-checkbox v-model="checked"  />
                </template>
            </van-field>
        </van-cell-group>

        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<script setup>
import vannavbar from '../vannavbar.vue';
import { ref } from 'vue';
const titlen = ref('编辑地址')

const username = ref('');
const dianhua = ref('');
const dizhi = ref('');
const xxdizhi = ref('');
const jzmianji = ref('');
const blmianjii = ref('');
const onSubmit = (values) => {
    console.log('submit', values);
};

const checked = ref(false);

const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);

const showPopup1 = () => {
    show1.value = true;
};
const showPopup2 = () => {
    show2.value = true;
};
const showPopup3 = () => {
    show3.value = true;
};
const showPopup4 = () => {
    show4.value = true;
};


const columns1 = [
    { text: '小猫', value: 'xiaomao' },
    { text: '小狗', value: 'xiaogo' },
    { text: '兔子', value: 'tuzi' },
    { text: '仓鼠', value: 'cangshu' },
    { text: '无', value: 'wu' },
    { text: '其他', value: 'qita' },

];
const onConfirm1 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onChange1 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onCancel1 = () => console.log('取消');

const columns2 = [
    { text: '是', value: 'yes' },
    { text: '否', value: 'no' },
];
const onConfirm2 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onChange2 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onCancel2 = () => console.log('取消');

const columns3 = [
    { text: '是', value: 'yes' },
    { text: '否', value: 'no' },

];
const onConfirm3 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onChange3 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onCancel3 = () => console.log('取消');

const columns4 = [
    { text: '是', value: 'yes' },
    { text: '否', value: 'no' },

];
const onConfirm4 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onChange4 = ({ selectedValues }) => {
    console.log(`当前值: ${selectedValues.join(',')}`);
};
const onCancel4 = () => console.log('取消');


</script>