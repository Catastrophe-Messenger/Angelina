<script setup lang="ts">

export interface CardProps {
  id: number;
  image: string;
  title: string;
  date: Date;
  tag?: string;
}

const props = defineProps<CardProps>()
const emit = defineEmits<{
  (e: 'click', id: number): void
}>()
</script>

<template>
  <div class="card-container" @click="emit('click',props.id)">
    <img :src="props.image" alt="card"/>
    <p class="title" :title="props.title">{{ props.title }}</p>
    <p class="subtitle">{{ props.date.toLocaleString('zh-CN', {hour12: false}).replace(/\//g, '-') }}</p>
    <p v-if="props.tag" class="subtitle">{{ props.tag }}</p>
    <div class="dotBox"><span class="dot"/><span class="dot"/><span class="dot"/></div>
  </div>
</template>

<style scoped>
.card-container {
  padding: 0.875rem;
  aspect-ratio: 20/17;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 0 0.3rem;
  background-color: var(--color-notification-card-background);
  transition: all 0.15s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  &:active {
    cursor: cell;
    filter: brightness(0.8);
  }
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
  min-height: 3.375rem;
  color: var(--color-notification-card-title);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.subtitle {
  padding: 0 0.2rem;
  font-size: 0.8rem;
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