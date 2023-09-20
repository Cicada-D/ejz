<template>
    <div class="common-layout">
        <el-container class="container">
        <el-header class="head">
                <svg class="icon">
                    <use xlink:href="#icon-vivo"></use>
                </svg>
                <div class="head_right">
                    <div style="position: relative;">
                        <el-avatar width="20px" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                        <ul class="list">
                            <li v-for="item in list">
                                <svg class="icon">
                                    <use :xlink:href="item.icon"></use>
                                </svg>
                                <span>{{item.title}}</span>
                            </li>
                        </ul>
                    </div>
                    <svg class="icon">
                            <use xlink:href="#icon-xiaoxi1"></use>
                        </svg>
                    <svg class="icon"  @click="router.replace('/login')">
                            <use xlink:href="#icon-tuichu"></use>
                    </svg>
                </div>
        </el-header>
        <el-container>
            <el-aside width="200px" class="aside">
                <el-scrollbar style="height: calc(100vh - 60px);">
                    <el-menu>
                        <template v-for="item in menulist" :key="item.id">
                            <template v-if="item.children">
                                <el-sub-menu :index="item.id">
                                    <template #title>
                                        <svg class="icon">
                                            <use :xlink:href="item.icon"></use>
                                        </svg>
                                        <span>{{item.title}}</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item v-for="p in item.children" :key="p.id">{{ p.title }}</el-menu-item>
                                    </el-menu-item-group>
                                </el-sub-menu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="item.id">
                                    <svg class="icon">
                                        <use :xlink:href="item.icon"></use>
                                    </svg>
                                    <span>{{item.title}}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const list = ref([
        {id:1,path:'',icon:'#icon-gerenzhongxin',title:'个人中心'},
        {id:2,path:'',icon:'#icon-gerenkongjian',title:'空间设置'}
    ])
    const menulist = ref([
        {id:1,path:'',icon:'#icon-fuwu',title:'家政服务',
        children:[
            {pid:1,id:11,title:'育儿师'},
            {pid:2,id:12,title:'保姆'}
        ]},
        {id:2,path:'',icon:'#icon-hehuoren',title:'城市合伙',
        children:[
            {pid:1,id:21,title:'企业介绍'},
            {pid:2,id:22,title:'企业动态'}
        ]},
        {id:3,path:'',icon:'#icon-shouye',title:'在线咨询'}
    ])
</script>
<style>
    .container{
        height: 100vh;
    }
    .head{
        background-color: skyblue;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .aside{
        background-color: azure;
    }
    .head .head_right{
        display: flex;
        width: 200px;
        justify-content: space-between;
        align-items: center;
    }
    .head .head_right div:hover .list{
        display: block;
    }
    .list{
        display: none;
        position: absolute;
        border-radius: 5px;
        width: 150px;
        padding: 0px 5px;
        right: 0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        background-color: #fff;
    }
    .list li{
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 10px;
    }
    .list li:hover{
        background-color: skyblue;
    }
    .list .icon{
        width: 20px;
        height: 20px;
        padding: 0 20px;
    }
    .icon{
        width: 60px;
        height: 60px;
    }
    .head_right .icon{
        width: 25px;
        
    }
    .aside .icon{
        width: 20px;
        margin-right: 5px;
    }
</style>