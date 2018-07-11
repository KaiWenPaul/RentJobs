<template>
    <div class="home">
       <div style="height:150px;width:97%;margin:0 auto;border:1px solid #dfdfdf;margin-top:10px;margin-bottom:10px;background:#dfdfdf;border-radius:3px;">
          <div style="width:100px;height:30px;line-height:30px;background:#4DB4D9;border-radius:5px;color:#fff;text-align:center;margin:0 auto;margin-top:12%;" @click="goRent()">我要出租</div>
          <div style="width:100%;height:40px;line-height:40px;text-align:center;">出租，转租和找室友</div>
       </div>
       <div style="height:150px;width:97%;margin:0 auto;border:1px solid #dfdfdf;margin-bottom:20px;background:#dfdfdf;border-radius:3px;">
          <div style="width:100px;height:30px;line-height:30px;background:#4DB4D9;border-radius:5px;color:#fff;text-align:center;margin:0 auto;margin-top:12%;" @click="goSeekingRent()">我要求租</div>
          <div style="width:100%;height:40px;line-height:40px;text-align:center;">住喜欢的房子，过想要的生活</div>
       </div>
       <FooterBar :selected="tab"></FooterBar>
    </div>
</template>
<script>
    import axios from  'axios'
    import FooterBar from './Footer'
    export default{
          components: {
            FooterBar
        },
         data() {
         return {
            selected:'1',
            value:'',
            tab:'tab2'
            };
         },
         methods:{
             goRent(){
                 this.$router.push({path:"/rent"})
             },
             goSeekingRent(){
                 this.$router.push({path:"/seekingrent"})
             }
         }
    }
</script>
<style>
.mint-navbar{
    padding-top:0px;
}

</style>
   