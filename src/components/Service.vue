<template>
  <div class="master-container">
    <h1 id="section-title">Services you are linked to</h1>

    <md-card class="card-service" md-with-hover>
      <md-card-media>
        <md-ripple>
          <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/thumb/amazon_logo_th.jpg" alt="People">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>create</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>cancel</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="card-service" md-with-hover>
      <md-card-media>
        <md-ripple>
          <img src="https://en.facebookbrand.com/wp-content/uploads/2016/05/wordmark.png" alt="People">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>create</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>cancel</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="card-service" md-with-hover>
      <md-card-media>
        <md-ripple>
          <img src="https://news.microsoft.com/wp-content/uploads/2012/07/Outlook.comLogo_Web-1024x169.jpg" alt="People">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>create</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>cancel</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

  </div>
</template>

<script>
export default {
  name: 'Service',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#section-title {
  margin-top: 50px;
  margin-left: 200px;
}

.card-service {
  float: left;
  margin-top: 5%;
  margin-left: 50%;
  margin-right: 5%;
  width: 200px;
  height: 150px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>