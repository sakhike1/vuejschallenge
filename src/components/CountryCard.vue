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
      <button @click="$emit"
        class="relative inline-flex items-center justify-center m-5  px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
        <span
          class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span
          class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span class="relative">add to list</span>
      </button>
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