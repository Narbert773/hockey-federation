<template>
  <v-app>
    <div class="main">
      <Header />
      <div class="main__wrapper">
        <Search v-model:searchQuery="searchQuery" />
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

onMounted(async () => {
  const data = await fetchTeams();
  teams.value = data.teams;
});

const filteredTeams = computed(() => {
  if (!searchQuery.value) return teams.value;
  return teams.value.filter((team) => team.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
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
  }
}
</style>
