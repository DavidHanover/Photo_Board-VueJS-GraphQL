import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

import FormAlert from "./components/Shared/FormAlert";

//register global component
Vue.component("form-alert", FormAlert);

Vue.use(VueApollo);

//set up apollo client
export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  //include auth token with request made to backend
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    //if no token in localstorage, add one
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }
    // operation adds token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err);
      }
    }
  }
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App),
  created() {
    //execute getCurrentUser query
    this.$store.dispatch("getCurrentUser");
  }
}).$mount("#app");
