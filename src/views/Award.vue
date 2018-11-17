<template>
  <div class="award">
    <h1>{{ award }}</h1>
    <p>{{ awardee.firstName }} {{ awardee.lastName }} ({{ awardee.staffID }})</p>
  </div>
</template>

<script>
export default {
  computed: {
    award() {
      return this.$store.state.award.currentAward.name;
    },
    awardee() {
      return this.$store.state.award.awardee;
    }
  }
};
</script>

<style lang="scss">
.award {
  color: white;
}
</style>
