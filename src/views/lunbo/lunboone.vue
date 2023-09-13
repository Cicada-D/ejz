<style scoped>
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
    <van-row>
        <van-col span="24" style="border: 1px solid black;">
            <van-swipe>
                <van-swipe-item>13213123</van-swipe-item>
                <van-swipe-item>2123213</van-swipe-item>
                <van-swipe-item>313123</van-swipe-item>
                <van-swipe-item>4123123</van-swipe-item>
            </van-swipe>
        </van-col>
    </van-row>
</template>

<script setup>

</script>