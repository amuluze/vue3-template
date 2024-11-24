<script lang="ts" setup>
import type { LoginForm } from '@/interface/auth.ts'
import useStore from '@/store'
import { login } from '@/api/auth'
import { getTimeState } from '@/utils'

const loginForm = reactive<LoginForm>({
  username: 'admin',
  password: 'admin123',
})

const loginFormRules = {
  username: [{ required: true, trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur', validator: passwordValidator }],
}
/**
 * 密码校验器
 */
function passwordValidator(_: any, value: string, callback: any) {
  if (value === '') {
    callback(new Error('password is required'))
  }
  else if (value.length < 6) {
    callback(new Error('The password can not be less than 6 digits'))
  }
  else {
    callback()
  }
}

/**
 * 登录
 */
const store = useStore()
const router = useRouter()
async function handleLogin() {
  try {
    const { data } = await login({ ...loginForm })
    store.user.setToken(data.access_token, data.refresh_token)
    // 跳转首页
    await router.replace('/')
    ElNotification({
      title: '欢迎来到 Amprobe',
      message: getTimeState(),
      type: 'success',
    })
  }
  catch (error) {
    console.log(error)
    if (error instanceof Error)
      ElMessage.error(error.message)
  }
}
</script>

<template>
    <div class="am-login">
        <div class="am-login-left">
            <img src="@/assets/images/login_left.png" alt="" />
        </div>

        <div class="am-login-right">
            <div class="am-login-right__form">
                <el-form :model="loginForm" :rules="loginFormRules">
                    <div class="title">
                        <span class="login">登录</span>
                    </div>

                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" size="large" class="username-input" placeholder="请输入用户名" name="username" autocomplete="on" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" size="large" type="password" class="password-input" placeholder="请输入密码" name="password" :show-password="true" />
                    </el-form-item>
                    <el-button class="btn" size="large" type="primary" @click.prevent="handleLogin">
                        <svg-icon icon-class="user" /> <span style="margin-left: 8px">登录</span>
                    </el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@include b(login) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100%;
  background-color: #eee;
  background-image: url('@/assets/images/login_bg.svg');
  background-size: auto;
}

@include b(login-left) {
  width: 1000px;
  margin-right: 10px;
  color: #fff;

  img {
    height: 100%;
    width: 100%;
  }
}

@include b(login-right) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;

  @include e(form) {
    width: 400px;
    padding: 50px 40px 45px;
    background-color: var(--el-bg-color);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 10%) 0 2px 10px 2px;

    .title {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      padding-bottom: 1rem;
      margin: 0 auto;
      text-align: center;

      .login {
        font-size: 24px;
        font-weight: bold;
        color: #34495e;
        white-space: nowrap;
      }
      .version {
        font-size: 14px;
        font-weight: bold;
        color: #2f7bff;
      }
    }

    .btn {
      width: 100%;
    }
  }
}
</style>
