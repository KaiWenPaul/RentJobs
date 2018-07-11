<template>
    <mt-tabbar v-model="selected1" fixed='fixed'>
            <mt-tab-item id="tab1">
            <div @click="goHome()">
               <i class="iconfont icon-iconfontshouye"></i>
               <div style="margin-top:3px;">首页</div>
            </div>
            </mt-tab-item>
           
            <mt-tab-item id="tab2">
             <div  @click="goMy()">
                <i class="iconfont icon-iconfontwo"></i>
                <div style="margin-top:3px;">我的</div>
             </div>
            </mt-tab-item>
        </mt-tabbar>
       
</template>

<script>
export default {
    props: ['selected'],
    data() {
        return {
        selected1:this.selected
        };
    },
    methods:{
        goHome(){
          this.$router.push({path:'/home'})
        },
         goMy(){
          this.$router.push({path:'/my'})
        }
    },
   
}
</script>

<style>
.mint-tabbar{
    background-size:100% 0px;
}
</style>
