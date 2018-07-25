<template>
  <div class="welcome">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">
          Welcome
        </h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>

          <input autocomplete="off" type="text" name="name" v-model="name">

          <p class="red-text" v-if="feedback">{{feedback}}</p>

          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        this.$router.push({
          name: 'Chat',
          params: {
            name: this.name
          }
        });
      }
      else {
        this.feedback = 'Enter a name'
      }
    }
  }
}
</script>

<style >

.card {
  margin-top: 0px;
  margin-bottom: 0px;
}
.welcome {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.welcome h2 {
  font-size: 20px;
}

.welcome buttoin {
  margin: 30px auto;
}


@media only screen and (max-width: 700px) {

}
</style>
