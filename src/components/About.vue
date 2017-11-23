<template>
  <div class="page-container">
    <md-app>
      <md-toolbar class="md-medium">
        <router-link to='/'><img class="logo-navbar" src="../assets/logo-nav.png"></router-link>

        <div class="navbar-btn">
          <router-link to='/account'><md-button class="router-link-btn">access data</md-button></router-link>
          <router-link to='/setup'><md-button class="router-link-btn">new setup</md-button></router-link>
          <router-link to='/about'><md-button class="router-link-btn">about</md-button></router-link>
        </div>
      </md-toolbar>
      <md-card md-with-hover class="card-about">
        <md-card-media class="card-logo">
          <img src="../assets/logo-fond-blanc.png" alt="OneAccount">
        </md-card-media>

        <md-card-header>
          <div class="md-title">About</div>
        </md-card-header>

        <md-card-content class="card-content">
        One Account is a service that enables users to regain possession of their personal data which embodies the concept of a numerical identity.</br>
        The user holds one unique account which he can decide to link to other services or social networks that he uses in order to log in.
        </md-card-content>
      </md-card>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'About',
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
.card-about {
  margin: 0 auto;
  height: auto;
  width:40%;
  margin-top: 10%;
}
.card-logo {
  height: 50%;
  width: 50%;
  margin: 0 auto;
}
.card-content {
  text-align: justify;
}
</style>