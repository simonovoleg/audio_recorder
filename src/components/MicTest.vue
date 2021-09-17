<template>
  <v-dialog
    persistent
    v-model="isVisible"
    max-width="500"
  >
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Test Your Microphone
        </v-card-title>

        <v-card-text>
            Mic Test will be here
        </v-card-text>
        

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            outlined
            @click="closeDialog"
          >
            No
          </v-btn>
          <v-btn
            color="success"
            outlined
            @click="confirm"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "MicTest",
    props: ["isVisible"],
    data: () => ({}),
    methods: {
      ...mapActions("promptStore", ["micCheck"]),
      closeDialog() {
          this.$emit("closeMicDialog");
      },
      confirm() {
          this.micCheck(true);
          this.closeDialog();
      },
    }
}
</script>

<style>

</style>