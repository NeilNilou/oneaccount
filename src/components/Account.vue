<template>
  <div class="page-container">
    <md-app>
      <md-toolbar class="md-medium" id="navbar-top">
      <router-link to='/'><img class="logo-navbar" src="../assets/logo-nav.png"></router-link>

        <div class="navbar-btn">
          <md-menu md-direction="bottom-start">
            <md-button md-menu-trigger>
              <md-avatar class="md-avatar-icon md-medium">
                <md-icon>person</md-icon>
              </md-avatar>
            </md-button>

            <md-menu-content>
              <md-menu-item>
                <md-icon>create</md-icon>
                Preferences
              </md-menu-item>
              <md-menu-item href='/'>
                <md-icon>cancel</md-icon>
                Disconnect
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </md-toolbar>

      <div class="side-full-menu" v-if="showFullMenu">
        <div class="menu-max-title">
          <md-button class="menu-max-title-btn" v-on:click="showFullMenu = !showFullMenu, showMinMenu = !showMinMenu">
            <md-icon>menu</md-icon>
            Menu
          </md-button>
        </div>

        <div class="menu-items">
          <div class="item-1">
            <md-button class="menu-item-btn" v-on:click="idCardShow = false, serviceShow = true">Links to services</md-button>
          </div>
        </div>

        <div class="menu-items">
          <div class="item-2">
            <md-button class="menu-item-btn" v-on:click="idCardShow = true, serviceShow = false">Personal data</md-button>
          </div>
        </div>
      </div>

      <div class="side-min-menu" v-if="showMinMenu">
        <div class="menu-min-title">
          <md-button class="menu-min-title-btn" v-on:click="showFullMenu = !showFullMenu, showMinMenu = !showMinMenu">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
      </div>

      <div class="content-container">
        <idCard v-show='idCardShow' />
        <service v-show='serviceShow' class="service" />
      </div>

    </md-app>
  </div>
</template>

<script>
import IDCard from './IDCard';
import Service from './Service';

export default {
  name: 'Account',
  components: {
    idCard: IDCard,
    service: Service,
  },
  data() {
    return {
      idCardShow: false,
      serviceShow: false,
      showFullMenu: true,
      showMinMenu: false,
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
  width: 100%;
  height: 100%;
}
.logo-navbar {
  height: 60px;
  margin-bottom: 8px;
}
.logo-home {
  margin-top: 10%;
}
.navbar-btn {
    position: absolute;
    right: 0px;
}
.side-full-menu {
  position: absolute;
  left: 0px;
  width: 200px;
  height: calc(100% - 88px);
  text-align: left;
  background: #006064;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  display: block;
  color: white;
}
.side-min-menu {
  position: absolute;
  left: 0px;
  width: 100px;
  height: calc(100% - 88px);
  text-align: left;
  background: #006064;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  display: hidden;
  color: white;
}
.menu-max-title {
  color: white;
  width: 100%;
  height: 80px;
  left: 1px;
  text-align: left;
}
.menu-min-title {
  left: 1px;
  text-align: left;
}
.menu-max-title-btn {
  margin-left: 0px;
  height: 80px;
  width: 100%;
  text-align:left;
}
.menu-min-title-btn {
  margin-left: 0px;
  height: 80px;
  width: 100%;
  text-align:center;
}
#navbar-top {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.item-1, .item-2 {
  text-align: left;
}
.menu-item-btn {
  color: white;
  width: auto;
  margin-left: 0px;
  width: 100%;
  text-align:left;
}
.service {
  float: right;
  position: relative;
}
.content-container {
  margin-left: 200px;
  margin-right: 10px;
  margin-top: 20px;
}
</style>