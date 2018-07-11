<template>  
  <div class="home"> 
    <mt-picker :slots="sunwaySlots" @change="onMyAddressChange"></mt-picker>
   <p>地址3级联动：{{subwayLine}} {{subwaySite}}</p>
   </div>
</template>  
<script>  
 
// import subways  from './data.json'
  
  export default {

   
    data () {
      return {
        sunwaySlots: [
          {
            flex: 1,
            defaultIndex: 1,    
            values: Object.keys(subways),  //省份数组
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
        myAddresscounty:'',
      }
    },
   
    methods: {
     onMyAddressChange(picker, values) {
       if(subways[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,Object.keys(subways[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2,subways[values[0]][values[1]]); // 区/县数据就是一个数组
          this.subwayLine = values[0];
          this.subwaySite = values[1];
        }
      },
    },
    mounted(){
      this.$nextTick(() => { //vue里面全部加载好了再执行的函数  （类似于setTimeout）
        this.sunwaySlots[0].defaultIndex = 0    
        // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      });
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
</style>  