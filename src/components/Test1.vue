<template>  
  <div class="home"> 
    <mt-picker :slots="houseTypesSlots" @change="onHouseTypeChange"></mt-picker>
  
   </div>
</template>  
<script>  
 
import houseTypes  from './data1.json'
  
  export default {

   
    data () {
      return {
      houseTypesSlots: [
          {
            flex: 1,
            defaultIndex: 1,    
            values: Object.keys(houseTypes),  //省份数组
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
          },
          {
            divider: true,
            content: '-',
            className: 'slot4'
          },
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ],
        room:'',
        hall:'',
        bathroom:'',
      }
    },
    created() {
 
 
    },
    methods: {
     onHouseTypeChange(picker, values) {
       if(houseTypes[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,Object.keys(houseTypes[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2,houseTypes[values[0]][values[1]]); // 区/县数据就是一个数组
          this.room = values[0];
          this.hall = values[1];
          this.bathroom = values[2];
        
        }
      },
    },
    mounted(){
      this.$nextTick(() => { //vue里面全部加载好了再执行的函数  （类似于setTimeout）
        this.houseTypesSlots[0].defaultIndex = 0    
        // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
        //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
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