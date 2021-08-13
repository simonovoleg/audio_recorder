<template>
<div>
  <v-btn
    x-large
    primary
    outlined
    class="my-16"
    min-width="300"
    @click="openDialog"
  >
    Test Mic
  </v-btn>
  <br />
  <br />

  <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          x-large
          :color="getColor"
          min-width="300"
          :to="micOk ? '/Prompt' : '/'"
          v-bind="attrs"
          v-on="on"
        >
          Continue
        </v-btn>
      </template>
      <span>{{ micOk ? validMessage : invalidMessage }}</span>
    </v-tooltip>
  
  <MicTest 
    :isVisible="dialogVisible"
    @closeDialog="closeDialog"
    @confirm="confirm"  
  />
</div>
  
</template>

<script>
  import MicTest from "./MicTest.vue";

  export default {
    name: "Home",
    components: { 
      MicTest 
    },
    data: () => ({
      micOk: false,
      dialogVisible: false,
      validMessage: "Proceed to the prompt",
      invalidMessage: "Test your microphone first"

    }),
    computed: {
      getColor() {
        return this.micOk ? "success" : "error"
      }
    },
    methods: {
      openDialog() {
        this.dialogVisible = true;
      },
      closeDialog() {
        this.dialogVisible = false;
      },
      confirm() {
        this.dialogVisible = false;
        this.micOk = true;
      },
    }
  }
</script>
