<template>
  <v-text-field :value="searchQuery" @update:modelValue="emit('update:searchQuery', $event)" label="Поиск по названию команды" variant="outlined" class="search-field"></v-text-field>
</template>

<script setup lang="ts">
const props = defineProps<{
  searchQuery: string;
}>();

const emit = defineEmits<{
  (e: 'update:searchQuery', value: string): void;
}>();
</script>

<style scoped lang="scss">
.search-field {
  margin-bottom: 20px;
}
</style>
