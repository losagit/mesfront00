<template>
  <v-app style="background-color: #1E1E2E;">
    <bar/>
    <nav-bar/>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue';
import Bar from './components/Bar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Bar
  },
  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background-color: #25263D;
}
</style>
