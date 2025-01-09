// 全局共享的用户状态
import { defineStore } from 'pinia'
import { ref,reactive } from 'vue'
// hooks 编程
export const useUserStore = defineStore('user',()=>{
     const isLogin = ref(false)
     const toLogin=()=>{
         isLogin.value=true
     }
     const toLogout=()=>{
         isLogin.value=false
     }
     const userInfo = reactive({
         name:'',
         avatar:'',
         message:'',
         uid:null
         
        })
        const setUserInfo=()=>{
            userInfo.name='Aphasia'
            userInfo.avatar='https://p6-passport.byteacctimg.com/img/user-avatar/66c1c01fdd5ece2968569f81f20380cb~140x140.awebp'
            userInfo.message='10'
            userInfo.uid=4422713894766395
        }
     return {
         isLogin,toLogin,toLogout,userInfo,setUserInfo
     }
 })