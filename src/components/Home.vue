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

  <v-btn 
    x-large
    primary
    outlined
    min-width="300"
    :disabled="!micOk"
    to="/Prompt"
  >
    Continue
  </v-btn>
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
      dialogVisible: false
    }),
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
