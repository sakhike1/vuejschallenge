<template>
  <v-container class="py-10">
    <v-row>

      <v-col>
        <v-text-field label="Search" v-model="search" rounded-pill solo prepend-inner-icon="mdi-magnify" clearable
          @click:clear="clearSearch">
        </v-text-field></v-col>
      <v-spacer class="d-none d-md-flex d-lg-flex"></v-spacer>
      <v-col>

      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="country in countries" :key="country.alpha3Code" md="3">
        <country-card v-bind="country"></country-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";

export default {
  name: "Home",
  components: {
    "country-card": CountryCard,
  },
  data() {
    return {
      countries: [],
      search: null,
      region: null,
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    };
  },
  mounted() {
    this.getCountries();
  },
  watch: {
    search: {
      immediate: true,
      handler(val) {
        if (val) {
          this.region = null;
          this.getCountries();
        }
      },
    },
  },
  methods: {
    regionChange() {
      this.search = null;
      this.getCountries();
    },
    clearSearch() {
      setTimeout(() => {
        this.search = null;
        this.getCountries();
      }, 100);
    },
    getCountries() {
      let url = "all";
      if (this.search) {
        url = `name/${this.search}`;
      } else if (this.region) {
        url = `region/${this.region.toLowerCase()}`;
      }
      setTimeout(() => {
        this.callAPI(url);
      });
    },
    callAPI(url) {
      this.$http
        .get(url)
        .then((response) => {
          if (response.status == 200) {
            this.countries = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
