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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>
