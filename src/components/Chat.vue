<template>
  <div class="chat">
    <h2 class="center teal-text">Vue-Chat</h2>
    <div class="card" id="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li class="single-message" v-for="message in messages" :key="message.id" >
            <span class="teal-text">
             {{message.name}}
            </span>
            <span class="grey-text text-darken-3">
              {{message.content}}
            </span>
            <span class="grey-text time">
              {{message.timestamp}}
            </span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name='name'></NewMessage>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  components: {
    NewMessage
  },
  data () {
    return {
        messages: []
    }
  },
  props: [
      'name'
  ],
  methods: {

  },
  created() {
      let ref = db.collection('messages').orderBy('timestamp')

      ref.onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
              if(change.type === 'added') {
                  let doc = change.doc;
                  this.messages.push({
                      id: doc.id,
                      name: doc.data().name,
                      content: doc.data().content,
                      timestamp: moment(doc.data().timestamp).format('lll')
                  })
              }
          });
      })
  }
}
</script>

<style >

.chat {
  width: 100%;
  margin: 0px;
  margin: 0px;
  height: 100vh;
}
.chat h2 {
  font-size: 20px;
  line-height: 10vh;
  margin-top: 0px;
  margin-bottom: 0px;
}

.chat span {
  font-size: 20px;
}

.chat .time {
  display: block;
  font-size: 12px;
}

#card {
  height: 90%;
}

.messages{
    overflow: auto;
    max-height: 90%;
}

.card-content {
      height: 80%;
      overflow: auto;
}
.card-action {
  height: 10vh;
}
.messages::-webkit-scrollbar {
    width: 3px;
}



.messages::-webkit-scrollbar-track {
    background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
    background: #aaa;
}


@media only screen and (max-width: 700px) {
  .chat span{
    font-size: 14x;
  }

  .messages::-webkit-scrollbar {
    display: none;
}

  .chat .time {
  display: block;
  font-size: 8px;
  }

  .single-message {
    padding: 10px;
    padding-right: 5px;
  }
}

</style>
