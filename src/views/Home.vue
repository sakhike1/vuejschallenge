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
      <v-col v-for="country in displayedCountries" :key="country.alpha3Code" md="3">
        <country-card v-bind="country"></country-card>
      </v-col>

    </v-row>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page{{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link v-if="previousPage" :to="{ name: 'CountryResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-blue-500">Previous</router-link>
          <router-link v-if="nextPage" :to="{ name: 'CountryResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-blue-500">Next</router-link>
        </div>
      </div>
    </div>
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
      longitude: null,
      latitude: null,
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
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = this.countries.length / 10;
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedCountries() {

      const pageNumber = this.currentPage;
      const firstCountryIndex = (pageNumber - 1) * 10;
      const lastCountryIndex = pageNumber * 10;
      return this.countries.slice(firstCountryIndex, lastCountryIndex)
    }

  }
};
</script>
