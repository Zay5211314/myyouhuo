<template>
    <div>
        <Lun :arr1="arr1"></Lun>
        <Content v-for="(v,i) in arr" :key="i" :imgurl="v.imgurl" :title="v.title" :text="v.text" :text2="v.text2" :number="v.number" :text3="v.text3" :number2="v.number2"></Content>
        <BottomBar></BottomBar>
    </div>
</template>
<script>
import Lun from '../../components/guang/lun'
import Content from '../../components/guang/content'
import BottomBar from '../../components/bottomBar/bottomBar'
export default {
    data(){
        return{
            arr:[],
            arr1:[]
        }
    },
    components:{
        Lun,
        Content,
        BottomBar
    },
     created(){
      this.axios({
          url:"/Hicool/one",
          method:"get"
      }).then((data)=>{
          this.arr=data.data
      }),
       this.axios({
          url:"/Hicool/lun",
          method:"get"
      }).then((data)=>{
        //   console.log(data.data)
        this.arr1=data.data
      })
     }
}
</script>
<style scoped>
    
</style>