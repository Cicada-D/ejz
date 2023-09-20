<template>
  <div>
    <van-nav-bar
      title="意见反馈"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell title="请告诉我们您的宝贵意见" />
    <van-cell-group inset>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label=""
        type="textarea"
        maxlength="500"
        placeholder="请输入意见内容"
        show-word-limit
        style=" background-color: rgb(232, 236, 236);
  height: 200px;"
      />
    </van-cell-group>

    <van-uploader id="date">
      <div class="box1">
        <span>+</span>
      </div>
    </van-uploader>

    <span style="margin-left: 16px; color: rgb(230, 228, 220);" >若有紧急情况，请拨打客户热线4009667777</span>

    <van-button type="primary" size="large" style="width: 350px; margin-left: 20px;margin-top: 150px; border-radius: 24px;">提交</van-button>
  </div>
</template>

<style >
.van-nav-bar .van-icon {
  color: black;
}

.van-cell {
  font-size: 18px;
}
.van-field__word-limit {
  margin-top: 100px;
}

#date {
    display: block;
    height: 80px;
    width: 80px;
    /* background-color: pink; */
    margin-left: 16px;
    margin-top: 25px;
    border: 1px solid rgba(232, 236, 236);
    margin-bottom: 20px;
}

.van-uploader .box1 span {
    font-size: 100px;
    color: rgba(232, 236, 236);
    position: relative;
    bottom: 18px;
    left: 10px;
    
}
</style>

<script >
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>