<script setup lang="ts">
import {ref, defineEmits} from 'vue';
import type {Ref} from 'vue';
import {Login} from "@/api/auth";

const emit = defineEmits(['success', 'failed'])

const enable: Ref<boolean> = ref(true);
const username: Ref<string> = ref('');
const password: Ref<string> = ref('');

async function close() {
  enable.value = false;
}

async function login() {
  await Login.request({
    username: username.value,
    password: password.value,
    time: Date.now()
  })
  await close();
  emit('success')
}
</script>

<template>
  <Teleport to="body" v-if="enable">
    <div class="login-container">
      <div class="background" @click="close">
        <form class="form" @submit.prevent="login" @click.stop>
          <input v-model="username" placeholder="用户名">
          <input v-model="password" placeholder="密码">
          <button type="submit">登录</button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
div.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-items: center;
}

div.background {
  background-color: #000000aa;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

form.form {
  width: 24rem;
  height: 15rem;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;

}

</style>