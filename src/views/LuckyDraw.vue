<template>
  <div class="about">
    <h1>This is an lucky draw page</h1>
    <h2>{{ giftName }}</h2>
    <img :src="imageUrl" />
    <div class="winner">
      <p v-for="winner in winners" :key="winner.id" :class="winner.status">{{ winner.username }} - {{ winner.firstName }} {{ winner.lastName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    giftName() {
      return this.$store.state.luckyDraw.currentGift.name;
    },
    imageUrl() {
      return this.$store.state.luckyDraw.currentGift.imageUrl;
    },
    winners() {
      return this.$store.state.luckyDraw.winners;
    }
  }
};
</script>

<style>
.new {
  color: lightgreen;
  text-decoration: underline;
}
.existing {
  color: grey;
}
.removed {
  color: red;
  text-decoration: line-through;
}
img {
  width: 80%;
}
</style>
