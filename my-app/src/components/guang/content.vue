<template>
<div class="list">

    <div class="item">
        <div class="content">
            <img :src="imgurl">
            <p>{{title}}</p>
            <div class="top">
                <p>{{text}}</p>
                <div class="bottom">
                    <div class="bottomLeft">
                        <span>{{text2}}</span>
                        <div class="cue">

                        </div>
                        <div class="a">
                            <span>
                                {{number}}
                            </span>
                            {{text3}}
                        </div>
                    </div>
                    <div class="bottomRight">
                        <span>
                            {{number2}}
                        </span>
                        <i class="iconfont icon-zan"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        imgurl:String,
        title:String,
        text:String,
        text2:String,
        number:String,
        text3:String,
        number2:String
    }

}
</script>
<style scoped>
.list{
    margin-bottom: .89rem;
}
    .item{
        width: 100%;
    }
    .content{
        width: 100%;
    }
    img{
        width: 90%;
        padding: .15rem;
        margin: 0 auto;
    }
    .content>p{
        text-indent: .18rem;
        font-size: .22rem;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #000;
    }
    .top>p{
        font-size: .14rem;
        text-indent: .18rem;
        color: #000;
        margin: .12rem 0;
    }
    .bottom{
        display: flex;
        justify-content: space-between;
    }
    .bottomLeft{
        display: flex;
        justify-content: space-around;
        width: 1.5rem;
        position: relative;
    }
    .cue:after{
        content:"";
        width: 1px;
        height: .13rem;
        color: #b0b0b0;
        position: absolute;
        /* left:45%; */
        top:0;
    }
    .a{
        display: flex;
        color: #b0b0b0;
        font-size: .1rem;
    }
    .bottom span{
        font-size: .1rem;
        display: block;
        color: #b0b0b0;
    }
    .bottomRight{
        display: flex;
        width: .5rem;
    }
    i{
    color: #b0b0b0;
    }
</style>