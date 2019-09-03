<template>
  <div class="login">
    <input type="text" placeholder="请输入用户名" v-model="username" /><br />
    <input type="text" placeholder="请输入密码" v-model="pasword" />
    <div>
        <p>注册</p>
        <p @click="changelogin">登录</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      pasword: ""
    };
  },
  methods:{
      changelogin(){
          axios.post("/login",{
              userName:this.username,
              password:this.pasword
          }).then(res=>{
              if(res.data.code=="1"){
                  localStorage.setItem('token',res.data.token);
                 let redirect=this.$route.query.redirect;
                 this.$router.push(redirect);
                 console.log(res.data)
              }
          })
      }
  }
};
</script>

<style lang="scss">
</style>