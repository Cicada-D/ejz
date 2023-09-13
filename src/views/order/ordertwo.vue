<style scoped> 
.van-row {
    background-color: aliceblue;
     padding: 10px;
}
.van-button {
    margin-right: 10px;
    color: chocolate;
}
.van-button::before {
    background-color: none;
}
.van-button:focus {
    color: white;
    background-color:chocolate;
}

</style>


<template >
    <van-row>
        <van-col span="24">
            <van-cell>
                <template #title>
                    <div>
                        服务类型
                    </div>
                </template>
                <template #label>
                    <van-button round> 无家具全装修</van-button>
                    <van-button round> 有家具全装修</van-button>
                    <van-button round> 别墅开荒保洁</van-button>
                </template>
            </van-cell>
        </van-col>
    </van-row>
</template>

<script setup>


</script>