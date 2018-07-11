<template>  
  <div class="home">  
    <!--header-->  
    
    <!--header end-->  
    <!--container-->  
    <div class="ybb-yuyue">  

      <div class="yy-item-box mine-me">  
        <a class="mint-cell mint-field">  
          <div class="mint-cell-left"></div>  
          <div class="mint-cell-wrapper">  
            <div class="mint-cell-title">  
              <span class="mint-cell-text">地铁</span>  
            </div>  
            <div class="mint-cell-value">  
              <div class="mint-cell-value is-link" @click="choiceArea">  
                <input placeholder="请选择地铁" type="text"  class="mint-field-core text-right" readonly="readonly" v-model="data.subwayText">  
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>  
              </div>  
            </div>  
            <i class="mint-cell-allow-right"></i>  
            <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">  
              <div class="picker-toolbar">  
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancle(0)">取消</span>  
                <span class="mint-datetime-action mint-datetime-confirm" @click="selectItem(0)">确定</span>  
              </div>  
             <mt-picker :slots="sunwaySlots" @change="onSubwayChange"></mt-picker>
            </mt-popup>  
          </div>  
        </a>  
      </div>  
      
      <div class="yy-item-box mine-me">  
        <a class="mint-cell mint-field">  
          <div class="mint-cell-left"></div>  
          <div class="mint-cell-wrapper">  
            <div class="mint-cell-title">  
              <span class="mint-cell-text">类型</span>  
            </div>  
            <div class="mint-cell-value type" id="type" style="min-height:25px;padding-left:30px;">  
              <div data-id="1">整租</div>
              <div data-id="2" style="margin:0px 10px;">单间</div>
              <div data-id="3">床位</div>
            </div>  
        
          </div>  
        </a>  
      </div>  
     
     <div class="yy-item-box mine-me">  
        <a class="mint-cell mint-field">  
          <div class="mint-cell-left"></div>  
          <div class="mint-cell-wrapper">  
            <div class="mint-cell-title">  
              <span class="mint-cell-text">预算</span>  
            </div>  
            <div class="mint-cell-value">  
              <div class="mint-cell-value">  
                <input placeholder="请输入预算 元/月" type="text" class="mint-field-core text-right"  v-model="data.rentMoney" style="padding-right:10px;">  
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>  
              </div>  
            </div>  
          </div>  
        </a>  
      </div>  
      
      <div class="yy-item-box mine-me">  
       <a class="mint-cell mint-field">  
          <div class="mint-cell-left"></div>  
          <div class="mint-cell-wrapper">  
            <div class="mint-cell-title">  
              <span class="mint-cell-text">微信</span>  
            </div>  
            <div class="mint-cell-value">  
              <div class="mint-cell-value">  
                <input placeholder="请输入微信号" type="text" class="mint-field-core text-right" v-model="data.chatNmae" style="padding-right:10px;">  
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>  
              </div>  
            </div>  
          </div>  
        </a>  
      </div> 

      <div class="yy-item-box mine-me">  
        <div style="height:100px;width:94%;margin:0 auto;margin-top:10px;border-radius:3px;">
         <textarea name="" id="desc" style="width:100%;height:100px;background:#dfdfdf;border-radius:3px;border:none;padding:3px;font-size:16px;" placeholder="喵~，多少一些才能更快租出去哦，比如：周边、交通、装修等..."></textarea>
        </div>
      </div> 
      
      <div class="yy-item-box mine-me">  
        <div style="height:30px;line-height:30px;padding:15px;">
       晒照片找房子<span style="color:#4DB4D9">（点我上传，最多5张哦）</span>
        </div>
        <div style="height:50px;padding:0 15px;">
          <div style="width:50px;height:50px;background:#dfdfdf;"></div>
        </div>
      </div> 

    </div>  
  
    <!--container end--> 
    <div style="width:100%;height:50px;line-height:50px;text-align:center;color:#fff;background:#4DB4D9;font-size:18px;position:fixed;bottom:0px;" @click="saveRentInfo()">保存</div>
  </div>  
</template>  
<script>  
import subways  from './data2.json'
import houseTypes  from './data1.json'

export default {  
  data: () => ({  
    popupVisible: false, 
    popupVisible1:false, 
    sexVisible: false,  
    areaPicker: '',  
    data: {  
      subwayText:'',
      typeText:'',
      rentMoney:'',
      chatNmae:'',
      sexText: '', 
      remark:'' 
    },  
    sexs: [],  
    sunwaySlots: [
          {
            flex: 1,
            defaultIndex: 1,    
            values:'',  //省份数组
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          }
        
        ],
        subwayLine:'',
        subwaySite:'',
      
  }),  
 
  mounted () {  
    
    this.$nextTick(() => { //vue里面全部加载好了再执行的函数  （类似于setTimeout）
        this.sunwaySlots[0].defaultIndex = 0    
        // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      }); 
    $(".type div").on('click',function(){
      $(this).addClass('act').siblings().removeClass('act');
     });
    this.getAllsubway();
  },  
  methods: {  
     getAllsubway:function(){
        this.$ajax.get('getAllSubway').then((res)=>{
                    if(res.status=="0"){
                     this.sunwaySlots[0].values = Object.keys(res.data.type_one);
                     this.lineData = res.data.type_two.line;
                     this.stationData = res.data.type_two.station;
                    }else{
                     console.log(res.message)
                    }
                });
     },
     onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
  　   
    loadAreaList: function () {  
          this.areaList = this.t;
          address = this.areaList.areaList[0];  
          provinceCodeList = this.areaList.provinceCodeList[0];  
          cityCodeList = this.areaList.cityCodeList[0]; 
          this.citySlots[0].values = Object.keys(address);  
          this.citySlots[2].values = Object.values(address)[0];  

    },  
    choiceArea: function () {  
      this.popupVisible = true  
      // // 设置默认选中  
      if (this.subwayLine !== '' && this.subwaySite !== '') {  
        this.areaPicker.setSlotValue(0, this.subwayLine)  
        this.areaPicker.setSlotValue(1, this.subwaySite)  
        console.log(this.subwayLine + '-' + this.subwaySite)  
      }  
    },  
    cancle: function (arr) {
      if(arr==0)  {
        this.popupVisible = false;
      }else if(arr==1){
        this.popupVisible1 = false; 
      }
    },  
    selectItem: function (arr) {  
      if(arr==0){
       this.popupVisible = false; 
       this.data.subwayText =this.subwayLine +"-"+this.subwaySite;
       console.log( this.data.subwayText)
      }else if(arr==1){
        this.popupVisible1 = false ;
        this.data.houseTypeText = this.room+'-'+this.hall+'-'+this.bathroom;
        console.log( this.data.houseTypeText)
      }
      
    },  
     saveRentInfo: function () {
     //地铁转为id提交
      for(var i =0;i<this.lineData.length;i++){
        if(this.lineData[i].name===this.subwayLine){
          this.subwayLine =this.lineData[i].id;
        }
      }
      for(var i=0;i<this.stationData.length;i++){
          if(this.stationData[i].name===this.subwaySite){
          this.subwaySite = this.stationData[i].id;
        }
      }
      var reg =/[\u4e00-\u9fa5]/g; 
     
      var params ={
        type:"1",
        line_num:this.subwayLine,
        station:this.subwaySite,
        sale_type:$("#type .act").data('id'),
        price:this.data.rentMoney,
        wechat:this.data.chatNmae,
        desc:$("#desc").val(),
        imgs:''
      }
      this.$ajax.post('ZfInfo',params).then((res)=>{
                    if(res.status=="0"){
                     console.log(res.message)
                    }else{
                     console.log(res.message)
                    }
                });
      
    },  
  
    onSubwayChange(picker, values) {
        this.areaPicker = picker  
       if(subways[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,Object.keys(subways[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2,subways[values[0]][values[1]]); // 区/县数据就是一个数组
          this.subwayLine = values[0];
          this.subwaySite = values[1];
        }
      }
   
  }
  
}  
</script>  
<style scoped>  
.mint-popup-4 {  
    width: 100%;  
}  
.mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {  
    -webkit-backface-visibility: hidden;  
    backface-visibility: hidden;  
}  
.text-right{
    text-align:right;
}
.mint-cell-allow-right{
  display:none;
}
.type div{height:25px;line-height:25px;text-align:center;border:1px solid #dfdfdf;min-width:60px;padding:0px 1px;border-radius:3px;}
.type .act{border:1px solid #4DB4D9;color:#4DB4D9;}
</style>  