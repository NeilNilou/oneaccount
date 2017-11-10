<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Greetings',
  data() {
    return {
      msg: 'Control and supervise your personal data on the web',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: teal;
}
</style>
