<template>
  <v-app>
    <!-- Side Navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav"></v-navigation-drawer>
    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title class="hidden-xs-only">VueShare</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon left class="hidden-sm-only">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <router-view/>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: true
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        {
          icon: "chat",
          title: "Posts",
          link: "/posts"
        },
        {
          icon: "lock_open",
          title: "Sign In",
          link: "/signin"
        },
        {
          icon: "create",
          title: "Sign Up",
          link: "/signup"
        }
      ];
    }
  }
};
</script>
