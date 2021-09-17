<template>
  <v-container>
      <v-row>
        <v-col></v-col>
        <v-col>
          <v-progress-circular
            :rotate="270"
            :size="175"
            :width="10"
            :value="percentage"
            :color="progressColor"
          >
            <v-icon :color="progressColor" size="75">
                  mdi-microphone-outline
              </v-icon>
          </v-progress-circular>
          <h1 :color="progressColor" class="mt-3">{{ timeLeft }}</h1>
        </v-col>
        <v-col></v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RecTimer",
  data() {
    return {
      minutesLeft: this.minutes,
      secondsLeft: this.seconds,
      timerId: null
    }
  },
  props: ["seconds", "minutes"],
  computed: {
    ...mapState("promptStore", ["isRecording", "isPreparing", "prepMode"]),
    timeLeft() {
      if (this.minutesLeft === 0 && this.secondsLeft === 0) {
        return "Done!"
      }
      if (this.minutes !== 0) {
        return `${this.zeroPad(this.minutesLeft, 2)}:${this.zeroPad(this.secondsLeft, 2)}`;
      } else {
        return `${this.zeroPad(this.minutesLeft, 2)}:${this.zeroPad(this.secondsLeft, 2)}`;
      }
    },
    percentage() {
      return (this.minutesLeft * 60 + this.secondsLeft) / ((this.minutes / 60) * 60 + this.seconds) * 100;
    },
    progressColor() {
      return this.percentage < 50 ? (this.percentage < 25 ? "error" : "warning") : "success";
    }
  },
  methods: {
    resetTimer() {
      this.minutesLeft = this.minutes;
      this.secondsLeft = this.seconds;
    },
    zeroPad(input, length) {
      return (Array(length + 1).join('0') + input).slice(-length);
    },
    startTimer() {
        this.$nextTick(() => {
          this.timerId = setInterval(() => {
              if (this.secondsLeft > 0) {
                  this.secondsLeft--;
              } else if (this.secondsLeft == 0 && this.minutesLeft > 0) {
                  this.secondsLeft = 59;
                  this.minutesLeft--;
              } else {
                  // Timer hits 0 do what you want to do here.
                  this.stopTimer();
                  this.$emit("stopRecording");
              }
          }, 1000);
      })
    },
    stopTimer() {
      clearInterval(this.timerId);
    }
  },
  mounted() {
    this.resetTimer();
    this.startTimer();
  }
}
</script>

<style>
</style>