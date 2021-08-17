<template>
  <div class="mt-5">
    <v-banner
      elevation="5"
      single-line
    >
      <v-icon
        slot="icon"
        color="secondary"
        size="36"
      >
        mdi-chat-question-outline
      </v-icon>
      {{this.activePrompt.text}}
    </v-banner>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'Prompt',
    data: () => ({}),
    computed: {
      ...mapState("promptStore", ["activePrompt", "isLoading"])
    },
    methods: {
      ...mapActions("promptStore", ["getAllPrompts", "getPromptById"]),

    },
    created() {
      this.getPromptById(4);
    }
}
</script>

<style scoped>

</style>