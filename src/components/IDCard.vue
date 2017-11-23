<template>
  <div class="master-container">
    <h1 id="section-title">Your personal data</h1>

    <md-card class="card-id-card">
        <md-card-header>
          <div class="md-title">Check and edit your informations</div>
        </md-card-header>

        <md-card-content class="card-content">

          <div class="firstname-container">
            <md-icon >account_box</md-icon>
            <label class="label">First name: </label>
            <span class="value">{{ firstname }}</span>
            <md-button class="md-fab md-mini md-plain" id="edit-btn"><md-icon>create</md-icon></md-button>
          </div>

          <div class="lastname-container">
            <md-icon >account_box</md-icon>
            <label class="label">Last name: </label>
            <span class="value">{{ lastname }}</span>
            <md-button class="md-fab md-mini md-plain" id="edit-btn"><md-icon>create</md-icon></md-button>
          </div>

          <div class="email-container">
            <md-icon >email</md-icon>
            <label class="label">Email: </label>
            <span class="value">{{ email }}</span>
            <md-button class="md-fab md-mini md-plain" id="edit-btn"><md-icon>create</md-icon></md-button>
          </div>

          <div class="phone-container">
            <md-icon >phone</md-icon>
            <label class="label">Phone number: </label>
            <span class="value">{{ phone }}</span>
            <md-button class="md-fab md-mini md-plain" id="edit-btn"><md-icon>create</md-icon></md-button>
          </div>

          <div class="address-container">
            <md-icon >location_city</md-icon>
            <label class="label">Address: </label>
            <span class="value">{{ address }}</span>
            <md-button class="md-fab md-mini md-plain" id="edit-btn"><md-icon>create</md-icon></md-button>
          </div>


          <div class="save-changes">
            <md-button type="submit" v-on:click="saveChanges" class="md-button md-raised md-primary" id="btn-save">
              Save changes
              <md-icon>save</md-icon>
            </md-button>
          </div>

        </md-card-content>
      </md-card>

  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@mail.com',
      phone: '0102030405',
      address: '10 Downing St, Westminster, London SW1A 2AA, UK',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.master-container {
  margin-left: 200px;
  margin-top: 50px;
}
.card-id-card {
  margin: 0 auto;
  height: auto;
  width:40%;
  margin-top: 5%;
  background: #0d47a1;
  color: white;
}
.firstname-container, .lastname-container, .email-container, .phone-container, .address-container {
  margin-top: 20px;
  text-align: left;
  width: 100%;
}
.label {
  font-weight: bold;
}
.value {
  font-style: italic;
}
.save-changes {
  margin-top: 5%;
}
#btn-save {
  background: #2e7d32;
}
</style>