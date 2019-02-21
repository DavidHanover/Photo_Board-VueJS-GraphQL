import Vue from "vue";
import Vuex from "vuex";

import { defaultClient as apolloClient } from "./main";

import { GET_POSTS } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      // use apolloclient to fire getposts query

      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          //get data from actions to state via mutation
          //commit passwes data from actions along to mutation functions
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    }
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  }
});
