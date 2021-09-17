<template>
  <div>
    <v-app-bar color="secondary">
        <!-- <v-img src="@/assets/logo.png" max-height="50" max-width="300" class="mr-5"></v-img> -->
        <router-link to="/" class="homeLink">
          <v-toolbar-title class="title">
            Audio Recorder
          </v-toolbar-title>
        </router-link>
    </v-app-bar>
    <v-progress-linear
      v-show="isLoading"
      color="success"
      indeterminate
      absolute 
      stream
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'TopBar',
  data: () => ({}),
  computed: {
      ...mapState("promptStore", ["isLoading"])
  },
}
</script>

<style>
  .title {
    font-size: 200%; 
    color: white;
  }

  .homeLink {
    text-decoration: none;
  }
</style>