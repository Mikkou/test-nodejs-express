<template>
  <div id="main">

    <section id="top" class="one dark cover">
      <div class="container">

        <header>
          <h2 class="alt">Hi! I'm <strong>Prologue</strong>, a <a href="http://html5up.net/license">free</a>
            responsive<br/>
            site template designed by <a href="http://html5up.net">HTML5 UP</a>.</h2>
          <p>{{ main }}</p>
        </header>

      </div>
    </section>

    <section id="portfolio" class="two">
      <div class="container">

        <header>
          <h2>Current translations</h2>
        </header>

        <p>{{ translations }}</p>

        <div class="row">
          <div v-for="(post, index) in posts" :key="index" class="col-4 col-12-mobile">
            <article class="item">
              <nuxt-link :to="`/posts/${post._id}`" class="image fit">
                <img :src="post.imagePath" alt=""/>
              </nuxt-link>
              <header>
                <h3>{{ post.title }}</h3>
              </header>
            </article>
<!--            <article class="item">-->
<!--              <nuxt-link to="/posts/123" class="image fit"><img src="../assets/images/pic03.jpg" alt=""/></nuxt-link>-->
<!--              <header>-->
<!--                <h3>Rhoncus Semper</h3>-->
<!--              </header>-->
<!--            </article>-->
          </div>
        </div>


      </div>
    </section>

    <!-- About Me -->
    <section id="about" class="three">
      <div class="container">

        <header>
          <h2>About Me</h2>
        </header>

        <a href="#" class="image featured"><img src="../assets/images/pic08.jpg" alt=""/></a>

        <p>{{ about }}</p>

      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="four">
      <div class="container">

        <header>
          <h2>Contact</h2>
        </header>

        <p>{{ contact }}</p>

        <form method="post" action="#">
          <div class="row">
            <div class="col-6 col-12-mobile">
              <b-form-input
                type="text"
                size="lg"
                v-model="name"
                name="name"
                placeholder="Name"
                :state="nameErrors === null ? null : nameErrors.length === 0"
              />
              <b-form-invalid-feedback
                v-if="nameErrors && nameErrors.length > 0"
                v-for="(error, index) in nameErrors"
                :key="index"
              >
                {{ error }}
              </b-form-invalid-feedback>
            </div>
            <div class="col-6 col-12-mobile">
              <b-form-input
                type="text"
                size="lg"
                v-model="email"
                name="email"
                placeholder="Email"
                :state="emailErrors === null ? null : emailErrors.length === 0"
              />
              <b-form-invalid-feedback
                v-if="emailErrors && emailErrors.length > 0"
                v-for="(error, index) in emailErrors"
                :key="index"
              >
                {{ error }}
              </b-form-invalid-feedback>
            </div>
            <div class="col-12">
              <b-form-textarea
                name="message"
                size="lg"
                v-model="message"
                placeholder="Message"
                :state="messageErrors === null ? null : messageErrors.length === 0"
              />
              <b-form-invalid-feedback
                v-if="messageErrors && messageErrors.length > 0"
                v-for="(error, index) in messageErrors"
                :key="index"
              >
                {{ error }}
              </b-form-invalid-feedback>
            </div>
            <div class="col-12">
              <b-button @click="sendMessage">Send Message</b-button>
            </div>
            <b-modal
              id="bv-modal"
              hide-footer
            >
              <div class="d-block text-center">
                <h3>Ваше сообщение отправлено</h3>
              </div>
              <b-button
                class="mt-3"
                block
                @click="$bvModal.hide('bv-modal')"
              >ОК</b-button>
            </b-modal>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {

    data() {
      return {
        name: '',
        email: '',
        message: '',
        nameErrors: null,
        emailErrors: null,
        messageErrors: null,
        successFeedback: false,

        main: '',
        about: '',
        translations: '',
        contact: '',

        posts: []
      }
    },

    methods: {
      async sendMessage() {
        const {status, data} = await axios.post('/api/v1/feedback', {
          name: this.name,
          email: this.email,
          message: this.message
        })

        if (status === 200) {
          if (data.success) {
            this.successFeedback = true
            this.nameErrors = null
            this.emailErrors = null
            this.messageErrors = null
            this.$bvModal.show('bv-modal')
          } else if (data.errors && data.errors.length > 0) {
            this.nameErrors = null
            this.emailErrors = null
            this.messageErrors = null
            data.errors.forEach(error => {
              const key = Object.keys(error)[0]
              switch (key) {
                case 'name':
                  this.nameErrors = error[key]
                  break
                case 'email':
                  this.emailErrors = error[key]
                  break
                case 'message':
                  this.messageErrors = error[key]
                  break
              }
            })
          }
        }
      }
    },

    mounted() {
      this.$nextTick(() => {
        if (this.$route.hash.indexOf('#') > -1) {
          const idName = this.$route.hash.split('#')[1]
          document.getElementById(idName).scrollIntoView()
        }
      })
    },
    created() {
      (async () => {
        const {data: {text: mainText}} = await this.$axios.get('/api/v1/static', {params: {alias: 'main'}})
        if (mainText) this.main = mainText
        const {data: {text: aboutText}} = await this.$axios.get('/api/v1/static', {params: {alias: 'about'}})
        if (aboutText) this.about = aboutText
        const {data: {text: translationsText}} = await this.$axios.get('/api/v1/static', {params: {alias: 'translations'}})
        if (translationsText) this.translations = translationsText
        const {data: {text: contactText}} = await this.$axios.get('/api/v1/static', {params: {alias: 'contact'}})
        if (contactText) this.contact = contactText
        const {data} = await this.$axios.get('/api/v1/posts')
        this.posts = data
      })()
    }
  }
</script>

<style>

</style>
