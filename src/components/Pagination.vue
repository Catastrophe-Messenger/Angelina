<script setup lang="ts">

</script>

<template>
  <div class="pagination-container">
    <div v-for="index in [1,2,3,4,5,6]" class="page-button">{{ index }}</div>
    <div class="page-button">...100</div>
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
}

div.page-button:hover {
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