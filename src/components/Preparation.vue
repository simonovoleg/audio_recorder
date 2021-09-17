<template>
  <PrepTimer 
    :seconds="prepTime.seconds" 
    :minutes="prepTime.minutes"
  />
</template>

<script>
import PrepTimer from "./PrepTimer.vue";
import {mapActions, mapState} from "vuex";
export default {
    name: "Preparation",
    components: { PrepTimer },
    data: () => ({}),
    computed: {
      ...mapState("promptStore", ["prepTime"])
    },
    methods: {
      ...mapActions("promptStore", ["setIsPreparing"])
    },
    mounted() {
      this.setIsPreparing(true)
    }
}
</script>

<style>

</style>