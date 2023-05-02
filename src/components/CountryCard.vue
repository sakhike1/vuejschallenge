<template>
  <v-card class="hover:scale-95 divide-y" @click="gotoDetails">

    <v-img height="200" :src="flag"></v-img>
    <v-card-text>
      <div class="card_title text-m">{{ name }}</div>
      <div><b class="text-xs">Population: </b>{{ population | numberFormatter }}</div>
      <div><b class="text-xs">Region: </b>{{ region }}</div>
      <div><b class="text-xs">Capital: </b>{{ capital }}</div>
      <div><b class="text-xs">latlng: </b>{{ latlng }}</div>
      <div><b class="text-xs">Capital: </b>{{ capital }}</div>
    </v-card-text>


  </v-card>
</template>

<script>

export default {
  props: {
    flag: { type: String, default: null },
    name: { type: String, default: "NA" },
    population: { type: Number, default: 0 },
    region: { type: String, default: "NA" },
    capital: { type: String, default: "NA" },
    latlng: { type: Number, default: "NA" },
    alpha3Code: { type: String, default: "NA" },
  },
  methods: {
    gotoDetails() {
      this.$router.push({
        name: "Details",
        params: { code: btoa(this.alpha3Code) },
      });
    },

  },
};
</script>

<style>
.card_title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.card img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  object-fit: cover;
  object-position: 50% 100%;
}
</style>