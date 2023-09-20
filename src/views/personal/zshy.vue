<template>
  <div class="box1">
    <van-nav-bar
      title="VIP会员购买"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      class="nav"
    />

    <div class="b2">
      <img
        src="src/assets/项目分类/我的/图片/专属会员/hy.png"
        class="img"
        alt=""
      />
      <span></span>
    </div>
  </div>

  <div class="b3">
    <p class="psize">e家政VIP会员</p>
    <span style="font-size: 12px; color: #333333a0"
      >温馨提示： 购买vip会员需先阅读会员购买须知</span
    >
    <div class="b4">
      <span class="sp1" style="margin-top: 10px">VIP会员年卡</span>
      <span class="sp1" style="color: rgba(244, 67, 54); margin-top: 13px"
        ><i style="position: relative; left: 4px">￥</i
        ><i class="isty"> 100</i></span
      >
      <span class="sp1" style="font-size: 12px; color: rgba(157, 157, 157)"
        >仅0.27元/天</span
      >
    </div>
  </div>
  <div class="b5">
    <a
      href="#"
      style="display: inline-block; width: 100%; height: 30px; margin-top: 10px; padding: 15px; background-color: #fff;"
    >
      <van-radio name="1" checked-color="#FF8C00" checked>我已阅读vip会员购买须知</van-radio>
      <img
        src="src/assets/项目分类/我的/图片/专属会员/右箭头.png"
        class="img3"
        alt=""
      />
    </a>
  </div>

  <div class="b6">会员权益</div>

  <div class="b7">
    <div class="b8">
        <img src="src/assets/项目分类/我的/图片/专属会员/01.png" class="img2" alt="">
        <div class="dq">
            <span>日常保洁、保洁做饭、擦玻璃、家电清洗、甲醛治理等价格优惠(限VIP地址每个客户最多可设置2个VIP地址)</span>
        </div>
    </div>
    <div class="b8">
        <img src="src/assets/项目分类/我的/图片/专属会员/02.png" class="img2"  alt="">
        <div class="dq">
            <span>可选择服务人员</span>
        </div>
    </div>
    <div class="b8">
        <img src="src/assets/项目分类/我的/图片/专属会员/03.png" class="img2"  alt="">
        <div class="dq">
            <span>可下周期订单</span>
        </div>
    </div>
    <div class="b8">
        <img src="src/assets/项目分类/我的/图片/专属会员/04.png" class="img2"  alt="">
        <div class="dq">
            优先派单，享受优质服务人员
        </div>
    </div>
    <div class="b8">
        <img src="src/assets/项目分类/我的/图片/专属会员/05.png" class="img2"  alt="">
        <div class="dq">
            <span>不定期赠送优惠券</span>
        </div>
    </div>
  </div>
  <van-submit-bar :price="10000" button-text="立即购买"  />
</template>

<style scoped>

.van-submit-bar__text {
    text-align: left;
}
html {
  background-color: rgba(232, 233, 236);
}

:root {
  --van-nav-bar-height: 62px;
  --van-nav-bar-icon-color: var(--van-black: #000);
}
.b2 {
  height: 140px;
}
.b2 .img {
  width: 100%;
  height: 100%;
}

.b3 {
  height: 240px;
  padding: 20px;
  background-color: #fff;
}

.b3 .psize {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 5px;
}

.b3 .b4 {
  width: 90px;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 102, 1);
  border-radius: 10px;
  height: 150px;
  padding: 10px;
  text-align: center;
}

.b3 .b4 .sp1 {
  width: 90px;
  margin-bottom: 15px;
  display: inline-block;
}

.b3 .b4 .sp1 i {
  font-style: normal;
}
.b3 .b4 .sp1 .isty {
  font-size: 35px;
  position: relative;
  right: 8px;
}
.b5 .img3 {
  width: 40px;
  height: 30px;
  float: right;
  position: relative;
  bottom: 25px;
  right: 30px;
}
.b6 {
  line-height: 60px;
  font-size: 20px;
  border-bottom: 0.3px solid #333;
  padding: 0 20px 0 20px ;
  background-color: #fff;
}
.b7 {
    padding: 20px;
    /* height: 400px; */
    background-color: #fff;
}
.b7 .b8 {
    /* line-height: 100px; */
    margin-bottom: 25px;
}
.b7 .b8 .img2 {
    /* float: left; */
    width: 60px;
    height: 60px;
    position: relative;
    top: 10px;
}

.b7 .b8 .dq {
    width: 270px;
    float: right;
    height: 80px;
    display: flex;
    align-items: center;
}
.van-icon-arrow-left:before {
    color: black;
}
</style>


<script>
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>