<template>
  <div class="master-container">
    <h1 id="section-title">Your personal data</h1>

    <md-card class="card-id-card">
        <md-card-header>
          <div class="md-title">Check and edit your informations</div>
        </md-card-header>

        <md-card-content class="card-content">

          <div class="row">
            <div id="icon">
              <md-icon >account_box</md-icon>
            </div>
            <div id="label">
              <label class="label">First name: </label>
            </div>
            <div id="value-firstname">
              {{ firstname }}
            </div>
            <div id="input-firstname">
              <md-input id="input-firstname-value"></md-input>
            </div>
            <div id="edit">
              <md-button class="md-fab md-mini md-plain" id="btn-firstname-edit" v-on:click="toggleEdit('edit', 'value-firstname', 'btn-firstname-edit', 'input-firstname', 'btn-firstname-cancel')"><md-icon>create</md-icon></md-button>
              <md-button class="md-fab md-mini md-plain" id="btn-firstname-cancel" v-on:click="toggleEdit('cancel', 'value-firstname', 'btn-firstname-edit', 'input-firstname', 'btn-firstname-cancel')"><md-icon>cancel</md-icon></md-button>
            </div>
            <div id="clearfix"></div>
          </div>

          <div class="row">
            <div id="icon">
              <md-icon >account_box</md-icon>
            </div>
            <div id="label">
              <label class="label">Last name: </label>
            </div>
            <div id="value-lastname">
              {{ lastname }}
            </div>
            <div id="input-lastname">
              <md-input id="input-lastname-value"></md-input>
            </div>
            <div id="edit">
              <md-button class="md-fab md-mini md-plain" id="btn-lastname-edit" v-on:click="toggleEdit('edit', 'value-lastname', 'btn-lastname-edit', 'input-lastname', 'btn-lastname-cancel')"><md-icon>create</md-icon></md-button>
              <md-button class="md-fab md-mini md-plain" id="btn-lastname-cancel" v-on:click="toggleEdit('cancel', 'value-lastname', 'btn-lastname-edit', 'input-lastname', 'btn-lastname-cancel')"><md-icon>cancel</md-icon></md-button>
            </div>
            <div id="clearfix"></div>
          </div>

          <div class="row">
            <div id="icon">
              <md-icon >email</md-icon>
            </div>
            <div id="label">
              <label class="label">Email: </label>
            </div>
            <div id="value-email">
              {{ email }}
            </div>
            <div id="input-email">
              <md-input id="input-email-value"></md-input>
            </div>
            <div id="edit">
              <md-button class="md-fab md-mini md-plain" id="btn-email-edit" v-on:click="toggleEdit('edit', 'value-email', 'btn-email-edit', 'input-email', 'btn-email-cancel')"><md-icon>create</md-icon></md-button>
              <md-button class="md-fab md-mini md-plain" id="btn-email-cancel" v-on:click="toggleEdit('cancel', 'value-email', 'btn-email-edit', 'input-email', 'btn-email-cancel')"><md-icon>cancel</md-icon></md-button>
            </div>
            <div id="clearfix"></div>
          </div>

          <div class="row">
            <div id="icon">
              <md-icon >phone</md-icon>
            </div>
            <div id="label">
              <label class="label">Phone: </label>
            </div>
            <div id="value-phone">
              {{ phone }}
            </div>
            <div id="input-phone">
              <md-input id="input-phone-value"></md-input>
            </div>
            <div id="edit">
              <md-button class="md-fab md-mini md-plain" id="btn-phone-edit" v-on:click="toggleEdit('edit', 'value-phone', 'btn-phone-edit', 'input-phone', 'btn-phone-cancel')"><md-icon>create</md-icon></md-button>
              <md-button class="md-fab md-mini md-plain" id="btn-phone-cancel" v-on:click="toggleEdit('cancel', 'value-phone', 'btn-phone-edit', 'input-phone', 'btn-phone-cancel')"><md-icon>cancel</md-icon></md-button>
            </div>
            <div id="clearfix"></div>
          </div>

          <div class="row">
            <div id="icon">
              <md-icon >location_city</md-icon>
            </div>
            <div id="label">
              <label class="label">Address: </label>
            </div>
            <div id="value-address">
              {{ address }}
            </div>
            <div id="input-address">
              <md-input id="input-address-value"></md-input>
            </div>
            <div id="edit">
              <md-button class="md-fab md-mini md-plain" id="btn-address-edit" v-on:click="toggleEdit('edit', 'value-address', 'btn-address-edit', 'input-address', 'btn-address-cancel')"><md-icon>create</md-icon></md-button>
              <md-button class="md-fab md-mini md-plain" id="btn-address-cancel" v-on:click="toggleEdit('cancel', 'value-address', 'btn-address-edit', 'input-address', 'btn-address-cancel')"><md-icon>cancel</md-icon></md-button>
            </div>
            <div id="clearfix"></div>
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
  name: 'IDCard',
  data() {
    return {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@mail.com',
      phone: '0102030405',
      address: '10 Downing St, Westminster, London SW1A 2AA, UK',
    };
  },
  methods: {
    toggleEdit(action, value, btnEdit, input, btnCancel) {
      if (action === 'edit') {
        document.getElementById(value).style.display = 'none';
        document.getElementById(btnEdit).style.display = 'none';
        document.getElementById(input).style.display = 'inline';
        document.getElementById(btnCancel).style.display = 'inline';
        document.getElementById('btn-save').style.display = 'inline';
      } else {
        document.getElementById(input).style.display = 'none';
        document.getElementById(btnCancel).style.display = 'none';
        document.getElementById(value).style.display = 'inline';
        document.getElementById(btnEdit).style.display = 'inline';
      }
    },
    saveChanges() {
      const inputIds = ['input-firstname-value', 'input-lastname-value', 'input-email-value', 'input-phone-value', 'input-address-value'];

      this.toggleEdit('cancel', 'value-firstname', 'btn-firstname-edit', 'input-firstname', 'btn-firstname-cancel');
      this.toggleEdit('cancel', 'value-lastname', 'btn-lastname-edit', 'input-lastname', 'btn-lastname-cancel');
      this.toggleEdit('cancel', 'value-email', 'btn-email-edit', 'input-email', 'btn-email-cancel');
      this.toggleEdit('cancel', 'value-phone', 'btn-phone-edit', 'input-phone', 'btn-phone-cancel');
      this.toggleEdit('cancel', 'value-address', 'btn-address-edit', 'input-address', 'btn-address-cancel');
      for (let i = 0; i <= inputIds.length; i += 1) {
        if (document.getElementById(inputIds[i]).value) {
          switch (i) {
            case 0:
              this.firstname = document.getElementById(inputIds[i]).value;
              document.getElementById(inputIds[i]).value = '';
              break;
            case 1:
              this.lastname = document.getElementById(inputIds[i]).value;
              document.getElementById(inputIds[i]).value = '';
              break;
            case 2:
              this.email = document.getElementById(inputIds[i]).value;
              document.getElementById(inputIds[i]).value = '';
              break;
            case 3:
              this.phone = document.getElementById(inputIds[i]).value;
              document.getElementById(inputIds[i]).value = '';
              break;
            case 4:
              this.address = document.getElementById(inputIds[i]).value;
              document.getElementById(inputIds[i]).value = '';
              break;
            default:
              break;
          }
        }
      }
    },
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
  margin-bottom: 10px;
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
  display: none
}
.row {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}
#icon, #label, #value-firstname, #input-firstname, #value-lastname, #input-lastname, #value-email, #input-email, #value-phone, #input-phone, #value-address, #input-address {
  position: relative;
  top: 50%;
  height:25px;
  margin-top:-12.5px;
  float: left;
  margin-right: 5px;
}
#input-firstname, #input-lastname, #input-email, #input-phone, #input-address {
  display: none;
}
#input-firstname-value, #input-lastname-value, #input-email-value, #input-phone-value, #input-address-value  {
  width: 350px;
  height: 32px;
}
#btn-firstname-cancel, #btn-lastname-cancel, #btn-email-cancel, #btn-phone-cancel, #btn-address-cancel {
  display: none;
}
#label {
  text-align: left;
  width: 100px;
}
#edit {
  position: relative;
  top: 50%;
  float: right;
  margin-top:-26px;
}
#clearfix {
  clear: both;
}
</style>