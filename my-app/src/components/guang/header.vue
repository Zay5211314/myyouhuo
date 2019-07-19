<template>
    <div class="header">
        <div class="item">
            <router-link v-for="(v,i) in arr" :key="i" :to="v.url" @click.native="fun(i)" :class="navNumber==i?'changed':''">
                <span>{{v.title}}</span>
            </router-link>

            <!-- <router-link to="/bestnew" class="rl">
                <span>最新</span>
            </router-link> -->
            <!-- <router-link to="/style">
                <span>搭配</span>
            </router-link>
            <router-link to="/head">
                <span>头条</span>
            </router-link>
            <router-link to="/getnew">
                <span>上新</span>
            </router-link>
            <router-link to="/video">
                <span>视频</span>
            </router-link> -->
        </div>
        <!-- 切记，出口要设在div外面 -->
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    data(){
        return{
            arr:[],
            navNumber:0
        }
    },
    methods:{
        fun(i){
            this.navNumber=i
            // console.log(i)
           
        }
    },
    created(){
        this.axios({
            url:"/Hicool/four",
            method:"get"
        }).then((data)=>{
            // console.log(data.data)
            this.arr=data.data
        })
    }
}
</script>
<style scoped>
    .item{
        display: -webkit-flex;
        justify-content: space-evenly;
    }
    .rl{
        display: block;
    }
    .item span{
        padding: .1rem;
        font-size: .14rem;
        display: block;
        color:#d6d6d6;
    }
    .changed span{
        border-bottom:.015rem solid #444;
        color:#444;
    }
    
</style>
