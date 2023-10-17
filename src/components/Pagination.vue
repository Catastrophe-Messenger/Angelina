<script setup lang="ts">
import {ref, watch, onMounted} from "vue";
import type {Ref} from "vue";

export interface PaginationProps {
  total: number
  page: number
  page_size: number
  length: number
}

// const props = defineProps<PaginationProps>()

const props: Ref<PaginationProps> = ref({
  total: 99,
  page: 1,
  page_size: 10
})

const currentPage: Ref<number> = ref(props.value.page);
const pageButtons: Ref<Array<{ value: number, class: string }>> = ref([]);

async function pageSwitch(page: number) {
  let pageCount = Math.ceil(props.value.total / props.value.page_size)
  currentPage.value = page
  pageButtons.value = []
  for (const offset of [-2, -1, 0, 1, 2]) {
    let offsetPage = page + offset;
    if (offsetPage > 0 && offsetPage <= pageCount) {
      pageButtons.value.push({
        value: offsetPage,
        class: offsetPage === page ? "page-button select" : "page-button"
      })
    }
  }
}


onMounted(async () => {
  console.log("mounted")
  await pageSwitch(props.value.page)
});

</script>

<template>
  <div class="pagination-container">
    <button v-for="page in pageButtons" @click="pageSwitch(page.value)" :class="page.class">{{ page.value }}</button>
    <input class="page-button"/>
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
    background-color: #D3E4FD;
  }
}

button.page-button:hover {
  cursor: pointer;
  background-color: #D3E4FD;
}

input.page-button {
  max-width: 5rem;

  &:focus {
    outline: none;
  }
}
</style>