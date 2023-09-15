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
    <van-col span="24">
      <van-swipe>
        <van-swipe-item v-for="item in items.list">
          <van-image :src="item.src" />
        </van-swipe-item>
      </van-swipe>
    </van-col>
  </van-row>
</template>

<script setup>
import { ref } from 'vue'

const items = defineProps({
  list: Object
})
console.log(items.list[0])
</script>
