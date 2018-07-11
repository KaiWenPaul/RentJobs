<template>
    <div class="home">
      <div style="height:150px;width:100%;text-align:center;background:#dfdfdf;">
       <mt-swipe :auto="2000" :speed="1300">
        <mt-swipe-item><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/avator.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/minyao.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/love.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
       </div>
       <div class="detail_box">
        <ul class="detail">
          <li style="border-bottom:1px solid #dfdfdf;height:60px;">
            <div class="head_img">
                <img style="width:100%;height:100%;" :src="detailBeans.head_img" alt="我的头像">
            </div>
            <div style="float:left;width:75%;height:50px;">
                <div style="display:block;height:25px;line-height:25px;">
                    <span style="float:left;color:#4DB4D9;"> {{detailBeans.nickname}} </span>
                </div>
                <span style="display:block;" v-if="detailBeans.sex===1">男神</span>
                <span style="display:block;" v-else>女神</span>
            </div>
          </li>
          <li class="detail_info">
           <p style="height:30px;line-height:30px;">{{detailBeans.line_name+detailBeans.subway_name}}</p>
           <p>{{room_type[0]}}室{{room_type[1]}}厅{{room_type[2]}}卫</p>
           <p>￥{{infos.price}}</p>
           <p>微信：{{infos.wechat}}</p>
           <div class="detail_info_type">
             <span v-if="infos.sale_type==='1'">整租</span><span v-else-if="infos.sale_type==='2'">单间</span><span v-else>床位</span>
             <span v-if="infos.limit==='1'">男女不限</span><span v-else-if="infos.limit==='2'">限男</span><span v-else>限女</span>
           </div>
          </li>
          <li>
            <p style="text-indent:1em;padding:10px 3px;">{{infos.desc}} </p>
          </li>
        </ul>
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
            value:'',
            tab:'',
            detail_id:this.$route.params.id,
            detailBeans:'',
            infos:'',
            room_type:[]
            };
         },
         mounted(){
           this.detail(this.detail_id);
         },
         methods:{
           handleChange(index) {
                
            },
            // 详情
          detail(arr){
             var params={
                     id:this.detail_id
                 }
            this.$ajax.get('item',params).then((res)=>{
                    if(res.status=="0"){
                     this.detailBeans = res.data;
                     this.infos = res.data.info;
                     this.room_type = res.data.info.room_type.split('-')
                    }else{
                     console.log(res.message)
                    }
                });
          }
         }
    }
</script>
<style>
.detail_box{
    margin:30px 0;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    display: block;
    color:#000;
}
.detail .head_img{
    width: 3.1rem;
    height: 3.1rem;
    float: left;
    background-color: #9e9e9e;
    border-radius: 50%;
    margin-right: 1rem;
    overflow: hidden;
    margin-left:10px;
}
.detail .detail_info{
    border-bottom:1px solid #dfdfdf;
    padding-bottom:15px;
}
.detail .detail_info p{
    height:25px;
    line-height:25px;
    padding-left:10px;
}
.detail .detail_info .detail_info_type{
    height:30px;
    line-height:30px;
    margin-top:3px;
}
.detail .detail_info .detail_info_type span{
    height:100%;
    min-width:60px;
    border:1px solid #4DB4D9;
    display:inline-block;
    text-align:center;
    color:#4DB4D9;
    border-radius:5px;
    margin:0px 5px;
    padding:0 2px;
}
</style>