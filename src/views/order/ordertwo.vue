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
                    <van-button style="margin: 5px ;" round v-for="(item, index) in items.list.split(',')" @click="select(item,index)"> {{item}}</van-button>
                </template>
            </van-cell>
        </van-col>
    </van-row>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter,useRoute} from 'vue-router'

const items = defineProps({
    list: String
})

console.log(items.list.split(','))


const emit = defineEmits(['func'])

const select = (item, index) => {  
    console.log(item)
    console.log(index)
    emit('func', item, index)
}

</script>