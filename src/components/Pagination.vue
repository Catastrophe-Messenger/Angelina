<script setup lang="ts">
import {ref, watch, onMounted} from "vue";
import type {Ref} from "vue";

export interface PaginationProps {
  pageNumber: number;
  pageCount: number;
  maxLength: number;
}

const props = defineProps<PaginationProps>()
const emit = defineEmits(['jump'])


const currentPage: Ref<number> = ref(1);
const pageButtons: Ref<Array<{ value: number, class: string }>> = ref([]);
const inputValue: Ref<string> = ref("");


async function flush() {
  let page = currentPage.value
  if (page < 1) page = 1;
  if (page > props.pageCount) page = pageCount;
  let start = page - (Math.ceil(props.maxLength / 2) - 1);
  if (start < 1) start = 1;
  let end = start + props.maxLength - 1;
  if (end > props.pageCount) {
    start -= end - props.pageCount;
    if (start < 1) start = 1;
    end = props.pageCount
  }
  pageButtons.value = [];
  for (let i = start; i <= end; i++) {
    pageButtons.value.push({
      value: i,
      class: i === page ? "page-button select" : "page-button"
    })
  }
}

async function jumpSwitchPage(page: number) {
  currentPage.value = page
  await flush()
  emit('jump', page)
}

async function jumpInputPage() {
  currentPage.value = Number(inputValue.value)
  await flush()

}

watch(
    props,
    async () => {
      await flush()
    }
)

onMounted(async () => {
  await flush()
  console.log(props);
});

</script>

<template>
  <div class="pagination-container">
    <button class="page-button" @click="jumpSwitchPage(1)">首页</button>
    <button v-for="page in pageButtons" @click="jumpSwitchPage(page.value)"
            :class="page.class">{{ page.value }}
    </button>
    <button class="page-button" @click="jumpSwitchPage(pageCount)">末页</button>
    <input class="page-button" v-model="inputValue" @keydown.enter="jumpInputPage" type="number"/>
  </div>
</template>

<style scoped>
div.pagination-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6875rem;
}

.page-button {
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

  &.select {
    background-color: #226dec;
  }
}

button.page-button:hover {
  cursor: pointer;
  background-color: #D3E4FD;
}

input.page-button {
  max-width: 5rem;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }
}
</style>