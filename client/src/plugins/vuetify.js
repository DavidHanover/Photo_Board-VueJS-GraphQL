import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#554527",
    secondary: "#495867",
    accent: "#577399",
    error: "#9c27b0",
    warning: "#673ab7",
    info: "#7c7771",
    success: "#939ea0"
  }
});
