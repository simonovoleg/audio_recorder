<template>
  <div class="mt-5">
    <v-card>
        <v-card-title class="text-h5 grey lighten-2 pl-16" max-width="500">
          {{this.activePrompt.text}}
        </v-card-title>

        <v-card-text>
          
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'Prompt',
    data: () => ({}),
    computed: {
      ...mapState("promptStore", ["activePrompt"])
    },
    methods: {
      ...mapActions("promptStore", ["getAllPrompts", "getPromptById"]),

    },
    created() {
      this.getPromptById(2);
    }
}
</script>

<style scoped>

</style>