<template>
<div class="new-message">
    <form @submit.prevent="sendMessage">
        <label for="new-message">New Message (enter to send)</label>
        <input autocomplete="off" type="text" name="new-message" v-model="newMessage">
        <p class="red-text" v-if="feedback">{{feedback}}</p>
    </form>
</div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
      sendMessage(){    
          if(this.newMessage)
          {
              db.collection('messages').add({
                content: this.newMessage,
                name: this.name,
                timestamp: Date.now()  
              }).catch(err => {
                  console.log(err)
              })
              this.newMessage = null
              this.feedback = null
          }
          else
          {
              this.feedback = "Cannot send blank message"
          }
      }
  }
};
</script>

<style>
    .new-message {
        height: 10vh;
        margin: 0px;
    }
</style>
