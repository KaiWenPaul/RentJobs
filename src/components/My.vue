<template>
    <div class="home">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">我的房本</mt-tab-item>
            <mt-tab-item id="2">我的收藏</mt-tab-item>
        </mt-navbar>
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
           
              <div style="height:150px;width:97%;margin:0 auto;border:1px solid #dfdfdf;margin-top:10px;margin-bottom:20px;">
                <div style="width:100%;height:70%;">
                  <div style="width:70px;height:70px;margin-left:10px;margin-right:10px;border-radius:35px;margin-top:3%; overflow:hidden;float:left;"><img style="max-width:100%;max-height:100%;" src="../assets/images/headPic.jpg" alt="我的头像"></div>
                  <div style="float:left;height:70px;margin-top:3%;">
                    <p style="height:35px;line-height:35px;">地铁站</p>
                    <p style="height:35px;line-height:35px;"><span>出租</span><span style="margin-left:20px;">03/10</span></p>
                  </div>
                </div>
                <div style="width:100%;padding-left:13px;">
                  <div style="float:left;width:80px;height:30px;line-height:30px;background:#4DB4D9;border-radius:5px;color:#fff;text-align:center;">关闭</div>
                  <div style="float:left;margin:0 15px;width:80px;height:30px;line-height:30px;background:#4DB4D9;border-radius:5px;color:#fff;text-align:center;">修改</div>
                  <div style="float:left;width:80px;height:30px;line-height:30px;background:#4DB4D9;border-radius:5px;color:#fff;text-align:center;">分享</div>
                </div>
              </div>
              <div style="height:120px;width:97%;margin:0 auto;border:1px solid #dfdfdf;margin-top:10px;">
                <div style="width:80px;height:30px;line-height:30px;background:#4DB4D9;border-radius:5px;color:#fff;text-align:center;margin:0 auto;margin-top:10%;" @click="goRent()">点这里</div>
                <div style="width:100%;height:40px;line-height:40px;text-align:center;">创建小房本，发布租房信息</div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
             <div class="lists" @click="goDetail()">
              
                    <ul class="user">
                        <li class="user_info">
                            <div class="head_img">
                                <img style="width:100%;height:100%;" src="../assets/images/headPic.jpg" alt="我的头像">
                            </div>
                            <div style="float:left;width:75%;height:50px;">
                                <div style="display:block;height:25px;line-height:25px;">
                                    <span style="float:left;color:#4DB4D9;"> Paul </span>
                                    <span style="float:right"> ￥1000 </span>
                                </div>
                                <span style="display:block;">2018-03-05 17:25</span>
                            </div>
                        </li>
                        <li style="font-size:16px;height:25px;line-height:25px;padding-left:10px;padding-right:20px;white-space:nowrap;text-overflow:ellipsis;overflow: hidden;">这里地理位置十分优越，适合上班。离地铁很近很近的5454545454545455454</li>
                        <li style="font-size:16px;height:70px;width:100%;margin-top:10px;">
                            <div style="width:30%;height:70px;float:left;text-align:center;"><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/avator.jpg" alt=""></div>
                            <div style="width:30%;height:70px;float:left;text-align:center;margin:0px 3.33%"><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/minyao.jpg" alt=""></div>
                            <div style="width:30%;height:70px;float:left;text-align:center;"><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/love.jpg" alt=""></div>
                        </li> 
                    </ul>
            
                 </div>
            </mt-tab-container-item>
        </mt-tab-container>
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
           handleChange(index) {
                
            },
           goDetail(){
                this.$router.push({path:"/detail"})
             },
           goRent(){
                this.$router.push({path:"/gorent"})
            }
         }
    }
</script>
<style>
.mint-navbar{
    padding-top:0px;
}

</style>
   