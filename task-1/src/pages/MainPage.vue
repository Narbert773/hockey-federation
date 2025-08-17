<template>
  <v-app>
    <div class="main">
      <Header />
      <div class="main__wrapper">
        <Search v-model:searchQuery="searchQuery" />
        <v-btn color="primary" @click="toggleSort" class="sort-button">Сортировка</v-btn>
        <Table :teams="filteredTeams" />
      </div>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Search from '../components/Search.vue';
import Table from '../components/Table.vue';
import { fetchTeams } from '../services/teamService';
import type { Team } from '../interfaces/team.interface';

const teams = ref<Team[]>([]);
const searchQuery = ref<string>('');
const sortOrder = ref<'asc' | 'desc' | 'none'>('none');

const sortedTeams = computed<Team[]>(() => {
  if (sortOrder.value === 'none') {
    return [...teams.value];
  }
  return [...teams.value].sort((a: Team, b: Team) => {
    return sortOrder.value === 'asc' ? a.points - b.points : b.points - a.points;
  });
});

const filteredTeams = computed<Team[]>(() => {
  if (!searchQuery.value) return sortedTeams.value;
  return sortedTeams.value.filter((team: Team) => team.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const toggleSort = (): void => {
  sortOrder.value = sortOrder.value === 'none' ? 'desc' : sortOrder.value === 'desc' ? 'asc' : 'desc';
};

onMounted(async (): Promise<void> => {
  const data = await fetchTeams();
  teams.value = data.teams;
});
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  &__wrapper {
    width: 80%;

    .sort-button {
      margin-bottom: 20px;
    }
  }
}
</style>
