<template>
    <div class="login-wrap">
        <div class="ms-title">music 后台管理系统</div>
        <div class="ms-login">
            <el-form :model="roleForm" :rules="rules" ref="ruleForm">
             <el-form-item prop="username" >
                <el-input v-model="ruleForm.username" placeholder="用户名"  label-width="1"> </el-input>
             </el-form-item>
             <el-form-item prop="password">
                <el-input type ="password" v-model="ruleForm.password" placeholder="密码"> </el-input>
             </el-form-item>
             <div class="login-btn">
                 <el-button type="primary" @click="submitForm">登录</el-button>
                </div>
            </el-form>
       </div>
    </div> 
</template>

<script>
import { getLoginStaus } from '@/api/idex';

export default{
        data:function(){
            return {
                ruleForm:{
                    username:"admin",
                    password:"123"
                },
                rules:{
                    username:[
                        {required:true,message:"请输入用户名",triiger:"blur"}
                    ],
                    password:[
                        {required:true,message:"请输入密码",triiger:"blur"}
                    ],
                }
            };
        },
        methods:{
            submitForm(){
                let params = new URLSearchParams();
                params.append("name",this.ruleForm.username);
                params.append("password",this.ruleForm.password);
                getLoginStaus(params)
                .then((res)=>{
                    if(res.code==1){
                        this.notify("登录成功"<"success");
                    }else{
                        this.notify("登录失败","error");
                    }
                });
            }
        }
    }
</script>
<style>
 .login-wrap{
    position: relative;
  background: url("../../assets/swiper/3.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 1000px;
} 
    .ms-title{
        position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #ffffff;
    }
.ms-login{
    position: absolute;
  left: 50%;
  top: 47%;
  width: 400px;
  margin: -150px 0 0 -200px;
  padding: 30px;
  border-radius: 5px;
  background: #ffffff;
} 
.login-btn {
    text-align:center;
}
.login-btn button{
    width:100%;
    /* height:30px; */
}

</style>