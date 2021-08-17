<template>
  <div class="mt-5">
    <v-banner
      elevation="5"
      single-line
    >
      <v-icon
        x-large
        :color="iconColor"
        size="40"
        class="mr-5"
      >
        mdi-chat-question-outline
      </v-icon>
      {{ promptIsEmpty ? "Prompt doesn't exist" : this.activePrompt.title }}
    </v-banner>

    <v-banner
      elevation="3"
      v-show="!promptIsEmpty"
    >
      {{ this.activePrompt.text }}
    </v-banner>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'Prompt',
    data: () => ({}),
    computed: {
      ...mapState("promptStore", ["activePrompt", "isLoading"]),
      promptIsEmpty() {
        return this.activePrompt.text ? false : true;
      },
      iconColor() {
        return this.promptIsEmpty ? "error" : "secondary";
      }
    },
    methods: {
      ...mapActions("promptStore", ["getAllPrompts", "getPromptById"]),
    },
    created() {
      this.getPromptById(844);
    }
}
</script>

<style scoped>

</style>