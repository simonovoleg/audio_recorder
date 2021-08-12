<template>
  <v-dialog
    persistent
    v-model="isVisible"
  >
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Test Your Microphone
        </v-card-title>

        <v-card-text>
            Recorder will be here
        </v-card-text>
        <v-card-text>
            Could you hear the recording?
        </v-card-text>
        <v-divider></v-divider>

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
            color="primary"
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
export default {
    name: "MicTest",
    props: ["isVisible"],
    data: () => ({}),
    methods: {
        closeDialog() {
            this.$emit("closeDialog");
        },
        confirm() {
            this.$emit("confirm");
        },
    }
}
</script>

<style>

</style>