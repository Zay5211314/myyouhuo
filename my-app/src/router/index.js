import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home"
import Classify from "../pages/classify"
import ShopCart from "../pages/shopCart"
import Main from "../pages/main"
import Guang from "../pages/guang"

import Bestnew from '../pages/guang/bestnew'
import Style from '../pages/guang/style'
import Head from '../pages/guang/head'
import Getnew from '../pages/guang/getnew'
import Video from '../pages/guang/video'





Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/home",
      name:"Home",
      component:Home
    },
    {
      path:"/classify",
      name:"Classify",
      component:Classify
    },
    {
      path:"/guang",
      name:"Guang",
      component:Guang,
      children:[
        {
          path:"/bestnew",
          name:"Bestnew",
          component:Bestnew
        },
        {
          path:"/style",
          name:"Style",
          component:Style
        },
        {
          path:"/head",
          name:"Head",
          component:Head
        },
        {
          path:"/getnew",
          name:"Getnew",
          component:Getnew
        },
        {
          path:"/video",
          name:"Video",
          component:Video
        }
        // {
        //   path:"/*",
        //   redirect:"/bestnew"
        // }
      ]
    },
    {
      path:"/shopCart",
      name:"ShopCart",
      component:ShopCart
    },
    {
      path:"/main",
      name:"Main",
      component:Main
    },
    {
      path:"/*",
      redirect:"/home"
    }
    
  ]
})
