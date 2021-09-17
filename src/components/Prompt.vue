<template>
  <div class="mt-5">
    <v-banner
      elevation="5"
      single-line
      class="promptTitle"
    >
      <v-icon
        x-large
        :color="iconColor"
        size="40"
        class="mr-5"
        v-show="!isLoading"
      >
        mdi-chat-question-outline
      </v-icon>
      {{ promptIsEmpty && !isLoading ? "Prompt doesn't exist" : this.activePrompt.title }}
    </v-banner>

    <v-banner
      elevation="3"
      v-show="!promptIsEmpty"
      class="mt-5 promptText py-5" 
    >
      {{ this.activePrompt.text }}
    </v-banner>



    <v-container class="mt-5" v-if="!promptIsEmpty">
      <v-row>
        <v-col/>
        <v-col>
            <Preparation v-if="isPreparing"/>
            <Recorder :hasStarted="startRecording" v-else-if="isRecording || hasRecorded"/>
        </v-col>
        <v-col/>
      </v-row>
    </v-container>    
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Preparation from './Preparation.vue';
import Recorder from './Recorder.vue';

export default {
    name: 'Prompt',
    components: { Recorder, Preparation },
    data: () => ({
    }),
    computed: {
      ...mapState("promptStore", ["activePrompt", "isLoading", "isRecording", "isPreparing", "hasRecorded"]),
      promptIsEmpty() {
        return this.activePrompt.text ? false : true;
      },
      iconColor() {
        return this.promptIsEmpty ? "error" : "secondary";
      }
    },
    methods: {
      ...mapActions("promptStore", ["getAllPrompts", "getPromptById", "setIsRecording", "setIsPreparing", "resetRecorder"]),
      stopRecording() {
        this.setIsRecording(false);
      },
      startRecording() {

      }
    },
    mounted() {
      if (this.promptIsEmpty) {
        window.location.href = "/";
      } 
      this.resetRecorder();
      this.setIsPreparing(true);

    }
}
</script>

<style scoped>
  .promptTitle {
    font-size: 1.75rem
  }

  .promptText {
    font-size: 1.25rem;
  }
</style>