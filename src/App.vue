<template>
  <v-app>
    <div >
      <TopBar />
      <router-view id="app-content" class="app"/>
    </div>
  </v-app>
</template>

<script>
import TopBar from './components/Shared/TopBar';

export default {
  name: 'App',

  components: {
    TopBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
