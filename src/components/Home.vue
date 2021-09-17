<template>
  <div>
    <div v-if="!isLoading">
      <v-btn
        x-large
        primary
        outlined
        class="my-16"
        min-width="300"
        @click="openMicDialog"
      >
        Test Mic
      </v-btn>
      <br />
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            x-large
            :color="getColor"
            min-width="300"
            @click="openPrepDialog"
            v-bind="attrs"
            v-on="on"
          >
            Continue
          </v-btn>
        </template>
        <span>{{ micOk ? validMessage : invalidMessage }}</span>
      </v-tooltip>
      
      <MicTest 
        :isVisible="micDialogVisible"
        @closeMicDialog="closeMicDialog"
      />

      <Instructions 
        :isVisible="prepDialogVisible" 
        @closePrepDialog="closePrepDialog"
      />

      <v-snackbar 
        v-model="snackbarVisible"
        :timeout="3000"
        color="error"
        bottom
        center-text
      >
        {{invalidMessage}}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="secondary"
            text
            @click="snackbarVisible = false"
            v-bind="attrs"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <div v-else class="mt-16">
      <v-progress-circular 
        class="mt-16" 
        indeterminate 
        :size="300" 
        color="success"
      >
        Loading...
      </v-progress-circular>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  import MicTest from "./MicTest.vue";
  import Instructions from "./Instructions.vue";

  export default {
    name: "Home",
    components: { 
      MicTest, Instructions
    },
    props: ["promptId"],
    data: () => ({
      micDialogVisible: false,
      prepDialogVisible: false,
      snackbarVisible: false,
      validMessage: "Proceed to the prompt",
      invalidMessage: "Test your microphone first"

    }),
    computed: {
      ...mapState("promptStore", ["micOk", "isLoading"]),
      getColor() {
        return this.micOk ? "success" : "error"
      }
    },
    methods: {
      ...mapActions("promptStore", ["micCheck", "getPromptById"]),
      openMicDialog() {
        this.micDialogVisible = true;
      },
      closeMicDialog() {
        this.micDialogVisible = false;
      },
      closePrepDialog() {
        this.prepDialogVisible = false;
      },
      openPrepDialog() {
        if (this.micOk) {
          this.prepDialogVisible = true;
        } else {
          this.snackbarVisible = true;
        }
      }
    },
    mounted() {
      this.getPromptById(this.promptId || this.$route.promptId || 2); // try 844 if you need a nonexistant prompt
    }
  }
</script>
