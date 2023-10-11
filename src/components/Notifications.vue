<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import Card from "./Card.vue";
import type {CardProps} from "./Card.vue";
import Pagination from "./Pagination.vue";
import {NotificationArkLightsSearch} from "@/api/resource";

const cards: Ref<Array<CardProps>> = ref([])

async function updateCards(page: number = 1, page_size: number = 64) {
  cards.value = []
  let data = await NotificationArkLightsSearch.get({page: page, page_size: page_size})
  for (let item of data.items) {
    cards.value.push({
      image: item.image_path ? "/api/resource/image/" + item.image_path : "/public/card.png",
      title: item.content || "",
      date: new Date(item.send_time),
      list_name: item.notification_type,
    })
  }
}

updateCards()
</script>

<template>
  <div class="notifications-container">
    <!--    <div class="fuzzy oval1"/>-->

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
  overflow-x: visible;
  overflow-y: scroll;
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
  height: 3.75rem;
  min-height: 3.75rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1.25rem;
  background-color: #FCFCFC;
  box-shadow: 0 -2.5rem 2rem 4rem var(--color-notification-background);
  position: sticky;
  top: 0;
  z-index: 2;


  &:focus {
    outline: none;
  }
}

div.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 0.5rem 2.5rem;
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

