<script setup lang="ts">
import {ref} from 'vue';
import type {Ref} from 'vue';
import {Login} from "@/api/auth";

const emit = defineEmits<{
  (e: 'success'): void
  (e: 'close'): void
}>()

const enable: Ref<boolean> = ref(true);
const username: Ref<string> = ref('');
const password: Ref<string> = ref('');

async function close() {
  enable.value = false;
  emit('close')
}

async function login() {
  await Login.request({
    username: username.value,
    password: password.value,
    time: Date.now()
  })
  emit('success')
  await close();
}
</script>

<template>
  <Teleport to="body" v-if="enable">
    <div class="background" @click="close">
      <form class="form" @submit.prevent="login" @click.stop>
        <input v-model="username" placeholder="用户名">
        <input v-model="password" type="password" placeholder="密码">
        <button type="submit">登录</button>
      </form>
    </div>
  </Teleport>
</template>

<style scoped>

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