<template>
  <main>
    <md-toolbar class="md-medium">
    <router-link to='/'><img class="logo-navbar" src="../assets/logo-nav.png"></router-link>

      <div class="navbar-btn">
        <router-link to='/'><md-button class="router-link-btn">access data</md-button></router-link>
        <router-link to='/setup'><md-button class="router-link-btn">new setup</md-button></router-link>
        <router-link to='/about'><md-button class="router-link-btn">about</md-button></router-link>
      </div>
    </md-toolbar>

    <md-card class="card-setup">
      <md-card-header>
        <div class="md-title">Create a new personal data card</div>
      </md-card-header>

      <md-card-content class="card-content">
        <form novalidate @submit.stop.prevent="submit">

          <md-input-container :class="{'md-input-invalid': errors.has('firstname')}" md-clearable>
            <md-icon>account_box</md-icon>
            <label>First name</label>
              <md-input :class="{ 'has-error': errors.has('firstname'), 'form-group': true }" placeholder="Enter your first name" type="text" v-validate data-vv-rules="required|alpha" v-model="firstname" class="form-control" name="firstname" ref="firstname_input" required autofocus></md-input>
          </md-input-container>
          <span v-if="errors.has('firstname')" class="help-block" id="error-msg">
            <md-icon class="md-warn">warning</md-icon>
            {{ errors.first('firstname') }}
          </span>

          <md-input-container :class="{'md-input-invalid': errors.has('lastname')}" md-clearable>
            <md-icon>account_box</md-icon>
            <label>Last name</label>
              <md-input :class="{ 'has-error': errors.has('lastname'), 'form-group': true }" placeholder="Enter your last name" type="text" v-validate data-vv-rules="required|alpha" v-model="lastname" class="form-control" name="lastname" required autofocus></md-input>
          </md-input-container>
          <span v-if="errors.has('lastname')" class="help-block" id="error-msg">
            <md-icon class="md-warn">warning</md-icon>
            {{ errors.first('lastname') }}
          </span>

          <md-input-container :class="{'md-input-invalid': errors.has('image')}">
            <md-icon>face</md-icon>
            <label>Avatar</label>
            <md-file :class="{ 'has-error': errors.has('avatar'), 'form-group': true }" placeholder="Upload a picture to create an avatar" v-validate data-vv-rules="image" v-model="avatar" class="form-control" name="avatar" type="file" autofocus accept="image/*"></md-file>
          </md-input-container>
          <span v-if="errors.has('avatar')" class="help-block" id="error-msg">
            <md-icon class="md-warn">warning</md-icon>
            {{ errors.first('avatar') }}
          </span>

          <md-input-container :class="{'md-input-invalid': errors.has('phone')}" md-clearable>
            <md-icon>phone</md-icon>
            <label>Phone</label>
              <md-input :class="{ 'has-error': errors.has('phone'), 'form-group': true }" placeholder="Enter your phone number" type="numeric" v-validate="{ required: true, regex: /^\d+(\.\d+)*$/ }" v-model="phone" class="form-control" name="phone" required autofocus></md-input>
          </md-input-container>
          <span v-if="errors.has('phone')" class="help-block" id="error-msg">
            <md-icon class="md-warn">warning</md-icon>
            {{ errors.first('phone') }}
          </span>

          <md-input-container :class="{'md-input-invalid': errors.has('email')}" md-clearable>
            <md-icon>email</md-icon>
            <label>Email</label>
              <md-input :class="{ 'has-error': errors.has('email'), 'form-group': true }" placeholder="Enter your email address" type="email" v-validate data-vv-rules="required|email" v-model="email" class="form-control" name="email" required autofocus></md-input>
          </md-input-container>
          <span v-if="errors.has('email')" class="help-block" id="error-msg">
            <md-icon class="md-warn">warning</md-icon>
            {{ errors.first('email') }}
          </span>
        </form>
        <div class="new-id-btn">
          <md-button type="submit" v-on:click="retrieveFormData" class="md-button md-raised md-primary">
            Next
            <md-icon>send</md-icon>
          </md-button>
        </div>
      </md-card-content>
    </md-card>
  </main>
</template>

<script>
  export default {
    name: 'Setup',
    data() {
      return {
        firstname: '',
        lastname: '',
        avatar: null,
        phone: '',
        email: '',
      };
    },
    methods: {
      retrieveFormData() {
        console.log('First name: ', this.firstname); // eslint-disable-line no-console
        console.log('Last name: ', this.lastname); // eslint-disable-line no-console
        console.log('Avatar file path: ', this.avatar); // eslint-disable-line no-console
        console.log('Phone: ', this.phone); // eslint-disable-line no-console
        console.log('Email: ', this.email); // eslint-disable-line no-console
      },
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
.new-id-btn {
  margin-top: 15%;
}
#error-msg {
  color: red;
  margin: 0 auto;
  float: left;
}
</style>