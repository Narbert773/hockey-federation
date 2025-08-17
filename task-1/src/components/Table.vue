<template>
  <v-container v-if="teams.length" class="table-container">
    <v-table>
      <thead>
        <tr>
          <th class="text-left"><strong>Название</strong></th>
          <th class="text-left"><strong>Город</strong></th>
          <th class="text-left"><strong>Очки</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in teams" :key="team.name" :class="{ 'highlight-team': team.points === maxPoints }">
          <td>{{ team.name }}</td>
          <td>{{ team.city }}</td>
          <td>{{ team.points }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
  <h2 v-else class="alert-message">Команда не найдена</h2>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Team } from '../interfaces/team.interface';

const props = defineProps<{
  teams: Team[];
}>();

const maxPoints = computed<number>(() => {
  return Math.max(...props.teams.map((team: Team) => team.points));
});
</script>

<style lang="scss" scoped>
.table-container {
  border: 2px solid lightblue;
}

.alert-message {
  text-align: center;
}

.highlight-team {
  background-color: lightblue;
}
</style>
