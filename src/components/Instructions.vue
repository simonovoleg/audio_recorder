<template>
  <v-dialog
    persistent
    v-model="isVisible"
    max-width="600"
    min-height="500"
  >
    <v-card>
      <div class="text-h5 secondary text-center py-3 title">Instructions</div>

      <div class="my-3 subtitle">
        Read carefully before proceeding
      </div>
      <v-card-text class="instructions">
            On the next page you will be given <strong>{{this.activePrompt.prepare_time}} seconds</strong> to read the prompt and prepare your response.  
            <br><br>
            Once the timer runs out of time, the recording will begin, and you will have <strong>{{this.activePrompt.response_time}} seconds</strong> to respond.
      </v-card-text>
      <v-divider class="my-3"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          :to="'/Prompt'"
          class="mb-3 btn"
          min-width="175"
          min-height="50"
        >
          Start
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Prep",
    props: ["isVisible"],
    computed: {
      ...mapState("promptStore", ["activePrompt"])
    }
}
</script>

<style scoped>

  .instructions {
    font-size: 1.1rem;
    color: black;
  }

  .subtitle {
    font-size: 1.25rem;
    color: red;
  }

  .title {
    color: white;
  }

  .btn {
    font-size: 1.35rem;
    font-weight: 700;
  }
</style>