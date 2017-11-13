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

    <md-card class="card-setup">
      <md-card-header>
        <div class="md-title">Create a new identity</div>
      </md-card-header>

      <md-card-content class="card-content">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container class="md-input-invalid" md-clearable>
            <md-icon>account_box</md-icon>
            <label>First name</label>
              <md-input placeholder="Enter your first name" required></md-input>
              <span class="md-error">The name you entered is not valid</span>
          </md-input-container>

          <md-input-container class="md-input-invalid" md-clearable>
            <md-icon>account_box</md-icon>
            <label>Last name</label>
              <md-input placeholder="Enter your last name" required></md-input>
              <span class="md-error">The name you entered is not valid</span>
          </md-input-container>

          <md-input-container class="md-input-invalid">
          <md-icon>face</md-icon>
          <label>Avatar</label>
          <md-file v-model="onlyImages" accept="image/*" placeholder="Upload a picture to create an avatar"></md-file>
          <span class="md-error">The image you uploaded is not valid</span>
          </md-input-container>

          <md-input-container class="md-input-invalid" md-clearable>
            <md-icon>phone</md-icon>
            <label>Phone</label>
              <md-input placeholder="Enter your phone number" required></md-input>
              <span class="md-error">The phone number you entered is not valid</span>
          </md-input-container>

          <md-input-container class="md-input-invalid" md-clearable>
            <md-icon>email</md-icon>
            <label>Email</label>
              <md-input placeholder="Enter your email address" required></md-input>
              <span class="md-error">The email address you entered is not valid</span>
          </md-input-container>
        </form>
        <md-button href="#" class="md-button md-raised md-primary" id="new-id-btn">
          Next
          <md-icon>send</md-icon>
        </md-button>
      </md-card-content>
    </md-card>

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
.card-setup {
  margin: 0 auto;
  height: auto;
  width:30%;
  margin-top: 5%;
}
#new-id-btn {
  margin-top: 5%;
}
</style>