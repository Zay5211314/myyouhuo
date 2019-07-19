<template>
    <div>
        <Videoitem v-for="(v,i) in arr1" :key="i" :url="v.url" :img="v.img" :title="v.title" :text="v.text" :text2="v.text2" :number="v.number" :text3="v.text3" :number2="v.number2"></Videoitem>
    </div>
</template>
<script>
import Videoitem from '../../components/guang/videoitem'
export default {
    data(){
        return{
            arr1:[]
        }
    },
    components:{
        
        Videoitem
    },
     created(){
      this.axios({
            url:"/Hicool/five",
            method:"get"
        }).then((data)=>{
          this.arr1=data.data

            // console.log(data.data)
        })
  }
}
</script>
<style scoped>
    
</style>