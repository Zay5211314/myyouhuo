<template>
    <div>
        <Content v-for="(v,i) in arr" :key="i" :imgurl="v.imgurl" :title="v.title" :text="v.text" :text2="v.text2" :number="v.number" :text3="v.text3" :number2="v.number2"></Content>
         <BottomBar></BottomBar>
    </div>
</template>
<script>
import BottomBar from '../../components/bottomBar/bottomBar'
import Content from '../../components/guang/content'
export default {
    data(){
        return{
            arr:[]
        }
    },
    components:{
        
        Content,
        BottomBar
    },
     created(){
      this.axios({
          url:"/Hicool/one",
          method:"get"
      }).then((data)=>{
          this.arr=data.data
      })
  }
}
</script>
<style scoped>
    
</style>