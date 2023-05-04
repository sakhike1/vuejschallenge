import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import CountryDetails from "../views/CountryDetails";
import Mylist from "../views/Mylist";
import CountryResults from "../views/CountryResults"


Vue.use(VueRouter);

const routes = [
  //Login
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      item: null,
      module: {
        id: null,
      },
      title: "Home",
    },
  },
  {
    name: "Details",
    path: "/details/:code",
    component: CountryDetails,
    meta: {
      item: null,
      module: {
        id: null,
      },
      title: "Details",
    },
  },
  //404
  {
    name: "Mylist",
    path: "*",
    component: Mylist,
    meta: {
      item: null,
      module: {
        id: null,
      },
      title: "Mylist",
    },
  },
  {
    name: "CountryResults",
    path: "*",
    component: CountryResults,
    meta: {
      item: null,
      module: {
        id: null,
      },
      title: "CountryResults",
    },
  },
  
 

];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
