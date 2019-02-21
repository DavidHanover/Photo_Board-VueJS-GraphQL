import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home.vue";

import AddPost from "./components/Posts/AddPost";
import Posts from "./components/Posts/Posts";

import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Auth/Profile";

Vue.use(Router);

export default new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "addpost",
      component: AddPost
    }
  ]
});
