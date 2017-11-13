<template>
  <main>
    <md-toolbar class="md-medium">
    <router-link to='/'><img class="logo-navbar" src="../assets/logo-nav.png"></router-link>

      <div class="navbar-btn">
        <router-link to='/'><md-button class="router-link-btn">access data</md-button></router-link>
        <router-link to='/setup'><md-button class="router-link-btn">new setup</md-button></router-link>
        <router-link to='/about'><md-button class="router-link-btn">about us</md-button></router-link>
      </div>
    </md-toolbar>
    <h1>New setup</h1>
  </main>
</template>

<script>
export default {
  name: 'Setup',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-navbar {
  height: 60px;
  margin-bottom: 8px;
}
.logo-homepage {
  margin-top: 10%;
}
.navbar-btn {
    position: absolute;
    right: 0px;
}
.router-link-btn {
  color: white;
  text-decoration: none;
}
</style>