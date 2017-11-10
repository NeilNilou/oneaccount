<template>
  <main>
    <md-toolbar class="md-medium">
      <md-button href="#">
        <img class="logo-navbar" src="../assets/logo-nav.png">
      </md-button>

      <div class="navbar-btn">
        <md-button href="#">access data</md-button>
        <md-button href="#">new setup</md-button>
        <md-button href="#">about us</md-button>
      </div>
    </md-toolbar>
      <img class="logo-homepage" src="../assets/logo-fond-blanc.png">
      <h1>Control and supervise your personal data on the web</h1>
      <md-button href="#" class="md-raised md-primary" id="access-btn">Connect to your data</md-button>
      <div class="register">
        <p class="not-register">New here ? Get started now</p>
        <md-button class="md-icon-button md-raised md-primary" id="register-btn">
          <md-icon>account_circle</md-icon>
        </md-button>
      </div>
  </main>
</template>

<script>
export default {
  name: 'Homepage',
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
#access-btn {
  margin-top: 40px;
  margin-bottom: 15px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  font-weight: bold;
}
.register {
  margin-top: 10px;
}
.register-btn {
  float: right;
}
.not-register {
  display: inline-block;
}
</style>