<script setup lang="ts">
import {ref} from 'vue';
import type {Ref} from 'vue';
import {Login} from "@/api/auth";

const username: Ref<string> = ref('');
const password: Ref<string> = ref('');

async function login() {
  await Login.request({
    username: username.value,
    password: password.value,
    time: 1796835200
  })
}
</script>

<template>
  <div class="menu-container">
    <form @submit.prevent="login">
      <input v-model="username" placeholder="用户名">
      <input v-model="password" placeholder="密码">
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<style scoped>
div.menu-container {
  width: 22rem;
  background-color: white;
  transition: width 0.2s;
  @media (max-width: 1280px) {
    width: 0;
  }
}


</style>