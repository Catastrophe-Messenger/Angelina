<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import Card from "./Card.vue";
import type {CardProps} from "./Card.vue";
import Pagination from "./Pagination.vue";

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
    <div class="fuzzy oval1"/>
    <div class="scrollbar">
      <input class="search"/>
      <div class="cards">
        <Card v-for="card in cards" :image="card.image" :title="card.title"
              :date="card.date" :list_name="card.list_name"/>
      </div>
    </div>
    <div class="bottom">
      <p>24小时内有5条消息 30条报错 100条错误密码</p>
      <Pagination/>
    </div>
  </div>
</template>

<style scoped>

div.notifications-container {
  padding: 3rem 3.6rem 0 3.6rem;
  background-color: var(--color-notification-background);
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media (max-width: 1280px) {
    padding: 3rem 1.6rem 0 1.6rem;

  }
}

div.fuzzy {
  position: absolute;
  border-radius: 50%/50%;
  background-color: aqua;


  &.oval1 {
    width: 20rem;
    height: 18rem;
    filter: blur(5rem);
    top: 10%;
    left: 20%;
  }
}


div.scrollbar {
  padding: 0 2.6rem 0 0;
  overflow: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 0.35rem;
    height: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(160, 152, 174, 0.3);
    border-radius: 0.15rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.15rem;
    background-color: rgba(160, 152, 174, 0.7);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(160, 152, 174, 0.9);
  }
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

  &:focus {
    outline: none;
  }
}

div.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 0.5rem 2.875rem;
}

div.bottom {
  margin-top: 1.875rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}
</style>

