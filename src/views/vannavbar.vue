<style scoped>
:deep(.van-nav-bar__title) {
    color: white; 
    font-size: 18px;
}
:deep(.van-icon-arrow-left:before){
    color: white;
}

</style>

<template>
    <van-nav-bar style="background-color: rgb(255, 102, 0);" :title="title.value" left-arrow @click-left="onClickLeft"
        class=" vannavbar " />
</template>

<script setup>
import {ref} from 'vue'

const onClickLeft = () => history.back();
const title = defineProps(['value'])

</script>