<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import Card from "./Card.vue";
import type {CardProps} from "./Card.vue";

const cards: Ref<Array<CardProps>> = ref([])

for (let i = 0; i < 50; i++) {
  cards.value.push({
    image: '/public/card.png',
    title: '10.05 20:12:49 通知 托管7号机 1阿克小姐 12分钟 LS-6x3',
    date: '2021-09-08 12:00',
    list_name: '114514'
  })
}

</script>

<template>
  <div class="notifications-container">
    <div class="fuzzy"/>
    <div class="scrollbar">
      <input class="search"/>
      <div class="cards">
        <Card v-for="card in cards" :image="card.image" :title="card.title"
              :date="card.date" :list_name="card.list_name"/>
      </div>
    </div>
    <div class="page-menu">
      <p>24小时内有5条消息 30条报错 100条错误密码</p>
      <div v-for="index in [1,2,3,4,5,6]" class="page-button">{{ index }}</div>
      <div class="page-button">...100</div>
      <input class="page-button"/>
    </div>
  </div>
</template>

<style scoped>

div.notifications-container {
  padding: 3rem 3.6rem 0 3.6rem;
  background-color: #F7FAFD;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: -2;
}

div.fuzzy {
  width: 500px;
  height: 500px;
  background-color: red;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
}

div.scrollbar {
  padding: 0 2.6rem 0 0;
  overflow: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

div.scrollbar::-webkit-scrollbar {
  width: 0.35rem;
  height: 0;
}

div.scrollbar::-webkit-scrollbar-track {
  background-color: rgba(160, 152, 174, 0.3);
  border-radius: 0.15rem;
}


div.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 0.15rem;
  background-color: rgba(160, 152, 174, 0.7);
}

div.scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(160, 152, 174, 0.9);
}

input.search {
  margin-bottom: 1.25rem;
  padding: 0 1.5rem;
  width: 100%;
  height: 3.75rem;
  min-height: 3.75rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1.25rem;
  background-color: #FCFCFC;
}

input.search:focus {
  outline: none;
}


div.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 0.5rem 2.875rem;
}


div.page-menu {
  margin-top: 1.875rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6875rem;
}

input.page-button, div.page-button {
  height: 2.5rem;
  min-width: 2.5rem;
  max-width: 7rem;
  border: none;
  border-radius: 0.9375rem;
  background-color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.9rem;
  box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.25);
}

input.page-button {
  max-width: 5rem;
}

div.page-button:hover {
  cursor: pointer;
  background-color: #D3E4FD;
}

input.page-button:focus {
  outline: none;
}
</style>

