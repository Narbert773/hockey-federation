<template>
  <v-app-bar :elevation="2" class="header">
    <template v-slot:prepend>
      <img class="header__logo" src="../assets/images/logo.jpg" alt="logo" />
    </template>

    <v-app-bar-title>Федерация Хоккея России</v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  background-color: lightblue;

  &__logo {
    width: 60px;
    height: 80%;
    border-radius: 70px;
  }
}
</style>
