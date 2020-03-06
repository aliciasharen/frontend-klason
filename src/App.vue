<template>
  <div id="app">
    <!-- <div id="nav" v-if="authenticated" to="/login"> -->
    <!-- <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace></router-link> -->
    <SideBar></SideBar>
    <router-view />
    <!-- </div>
        <router-view @authenticated="setAuthenticated" /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "rully@gmail.com",
        password: "guruguru2"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
body {
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
}
</style>
