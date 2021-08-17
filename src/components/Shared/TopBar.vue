<template>
  <div>
    <v-app-bar>
        <!-- <v-img src="@/assets/logo.png" max-height="50" max-width="300" class="mr-5"></v-img> -->
        <v-toolbar-title class="title">
          Audio Recorder
        </v-toolbar-title>
    </v-app-bar>
    <v-progress-linear
      v-show="isLoading"
      color="secondary"
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
    font-size: 2rem; 
  }
</style>