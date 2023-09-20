<template>
  <div id="box">
    <van-nav-bar title="设置" left-text="" left-arrow @click-left="onClickLeft" />

    <van-cell center title="用户协议" icon="/src/assets/项目分类/我的/图片/设置图片/用户协议-copy.png" is-link size="large" id="img" />
    <van-cell id="img" center title="隐私政策" icon="/src/assets/项目分类/我的/图片/设置图片/隐私政策-copy.png" is-link size="large" />
    <van-cell id="img" center title="关于我们" icon="/src/assets/项目分类/我的/图片/设置图片/关于我们-copy.png" is-link size="large" />
    <van-cell id="img" center title="版本更新" icon="/src/assets/项目分类/我的/图片/设置图片/版本更新-copy.png" is-link size="large"
      value="4.0.5" />
    <van-cell id="img" center title="清除缓存" icon="/src/assets/项目分类/我的/图片/设置图片/清除缓存-copy.png" is-link size="large"
      value="1.75MB" />
    <van-cell id="img" center title="注销账号" icon="/src/assets/项目分类/我的/图片/设置图片/账号设置_注销账号-copy.png" is-link size="large" />

    <van-button round type="white" size="large" id="btn" @click="tuichu">退出登录</van-button>
  </div>
</template>

<style>
#btn {
  position: relative;
  top: 210px;
  /* margin-top: 210px; */
  border: 1px solid rgba(248, 152, 86);
  color: rgba(248, 152, 86);
}

#box {
  background-color: rgba(232, 233, 236);
  height: 900px;
}

#img .van-icon__image {
  height: 2em;
  width: 3em;
  margin-right: 5px;
  position: relative;
  bottom: 4px;
}

.van-nav-bar {
  margin-bottom: 20px;
}

.van-cell--large {
  line-height: 50px;
}

.van-icon-arrow-left:before {
  color: black;
}
</style>

<script>
import { useRouter } from 'vue-router'

export default {

  setup() {

    const router = useRouter()
    localStorage.setItem('token', 123)
    const onClickLeft = () => history.back();
    const tuichu = () => {
      localStorage.clear('token')
      console.log(1)
      router.replace('/login')
    }
    return {
      onClickLeft,
      tuichu
    };
  },

};
</script>