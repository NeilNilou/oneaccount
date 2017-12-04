<template>
  <div class="master-container">

    <h1>Services you are linked to</h1>

    <md-card class="card-service" md-with-hover>
      <md-card-media class="card-media">
          <img class="card-img" src="http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/thumb/amazon_logo_th.jpg" alt="Amazon">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Amazon</div>
      </md-card-header>

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
      <md-card-media class="card-media">
          <img class="card-img" src="https://en.facebookbrand.com/wp-content/uploads/2016/05/wordmark.png" alt="Facebook">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Facebook</div>
      </md-card-header>

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
      <md-card-media class="card-media">
          <img class="card-img" src="https://news.microsoft.com/wp-content/uploads/2012/07/Outlook.comLogo_Web-1024x169.jpg" alt="Outlook">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Outlook</div>
      </md-card-header>

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
      <md-card-media class="card-media">
          <img class="card-img" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" alt="GitHub">
      </md-card-media>

      <md-card-header>
        <div class="md-title">GitHub</div>
      </md-card-header>

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
      <md-card-media class="card-media">
          <img class="card-img" src="https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_light.svg" alt="YouTube">
      </md-card-media>

      <md-card-header>
        <div class="md-title">YouTube</div>
      </md-card-header>

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
      <md-card-media class="card-media">
          <img class="card-img" src="https://cdn.worldvectorlogo.com/logos/slack.svg" alt="Slack">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Slack</div>
      </md-card-header>

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
      <md-card-media class="card-media">
          <img class="card-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png" alt="Twitter">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Twitter</div>
      </md-card-header>

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
  data: () => ({
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.master-container {
  width: 100%;
  height: 100%;
}
.card-service {
  float: left;
  margin-top: 2%;
  margin-left: 2%;
  min-width: 200px;
  height: auto;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
}
.card-media {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  position: relative;
}
.card-img {
  height: auto;
  width: auto;
}
</style>