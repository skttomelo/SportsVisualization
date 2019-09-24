<template>
  <div>
    <h1>Soccer</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Soccer",
  data() {
    return {
      loading: false,
      error: null,
      data: null
    };
  },
  async created() {
    this.loading = true;

    try {
      const data = await axios("/api/soccer/score");
      this.data = data.data.result;
      this.loading = false;
      console.log(data);
    } catch (err) {
      this.loading = false;
    }
  }
};
</script>

<style>
</style>