<script setup lang="ts">

export interface CardProps {
  image: string
  title: string
  date: string
  list_name: string
}

const props = defineProps<CardProps>()


</script>

<template>
  <div class="card-container">
    <img :src="props.image" alt="card"/>
    <p class="title">{{ props.title }}</p>
    <p class="subtitle">{{ props.date }}</p>
    <p v-if="props.list_name" class="subtitle">所在列表：{{ props.list_name }}</p>
    <div class="dotBox"><span class="dot"/><span class="dot"/><span class="dot"/></div>
  </div>
</template>

<style scoped>
.card-container {
  padding: 0.875rem;
  aspect-ratio: 20/16.7;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 0.6rem 0.9rem;
  box-sizing: border-box;
  background-color: white;
}

.card-container div:last-child {
  margin-left: auto;
}

img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0.25rem;
}

.title {
  width: 100%;
  padding: 0 0.2rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
  color: rgb(49, 55, 61);
}

.subtitle {
  padding: 0 0.2rem;
  font-size: 0.625rem;
  font-weight: normal;
  color: rgb(187, 189, 191);
}

.dotBox {
  padding: 0 0.2rem;
  display: flex;
  gap: 0.15rem;
  align-self: center;
}

.dot {
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 50%;
  background-color: rgb(160, 152, 174);
  display: inline-block;
}

</style>