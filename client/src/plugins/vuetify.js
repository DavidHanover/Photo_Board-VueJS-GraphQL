import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#6d6a75",
    secondary: "#deb841",
    accent: "#457c94",
    error: "#9c27b0",
    warning: "#673ab7",
    info: "#de9e36",
    success: "#9dcbba"
  }
});
