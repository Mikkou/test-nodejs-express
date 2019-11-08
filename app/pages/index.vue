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
          <div class="col-4 col-12-mobile">
            <article class="item">
              <nuxt-link to="/posts/123" class="image fit"><img src="../assets/images/pic02.jpg" alt=""/></nuxt-link>
              <header>
                <h3>Ipsum Feugiat</h3>
              </header>
            </article>
            <article class="item">
              <nuxt-link to="/posts/123" class="image fit"><img src="../assets/images/pic03.jpg" alt=""/></nuxt-link>
              <header>
                <h3>Rhoncus Semper</h3>
              </header>
            </article>
          </div>
          <div class="col-4 col-12-mobile">
            <article class="item">
              <nuxt-link to="/posts/123" class="image fit"><img src="../assets/images/pic04.jpg" alt=""/></nuxt-link>
              <header>
                <h3>Magna Nullam</h3>
              </header>
            </article>
            <article class="item">
              <nuxt-link to="/posts/123" class="image fit"><img src="../assets/images/pic05.jpg" alt=""/></nuxt-link>
              <header>
                <h3>Natoque Vitae</h3>
              </header>
            </article>
          </div>
          <div class="col-4 col-12-mobile">
            <article class="item">
              <nuxt-link to="/posts/123" class="image fit"><img src="../assets/images/pic06.jpg" alt=""/></nuxt-link>
              <header>
                <h3>Dolor Penatibus</h3>
              </header>
            </article>
            <article class="item">
              <nuxt-link to="/posts/123" class="image fit"><img src="../assets/images/pic07.jpg" alt=""/></nuxt-link>
              <header>
                <h3>Orci Convallis</h3>
              </header>
            </article>
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
              <input type="text" v-model="name" name="name" placeholder="Name"/>
            </div>
            <div class="col-6 col-12-mobile">
              <input type="text" v-model="email" name="email" placeholder="Email"/>
            </div>
            <div class="col-12">
              <textarea name="message" v-model="message" placeholder="Message"></textarea>
            </div>
            <div class="col-12">
              <b-button @click="sendMessage">Send Message</b-button>
            </div>
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

        main: '',
        about: '',
        translations: '',
        contact: ''
      }
    },

    methods: {
      async sendMessage() {
        const { status, data } = await axios.post('/api/v1/feedback', {
          name: this.name,
          email: this.email,
          message: this.message
        })
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

    created () {
      (async () => {
        const { data: { text: mainText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'main' } })
        if (mainText) this.main = mainText
        const { data: { text: aboutText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'about' } })
        if (aboutText) this.about = aboutText
        const { data: { text: translationsText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'translations' } })
        if (translationsText) this.translations = translationsText
        const { data: { text: contactText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'contact' } })
        if (contactText) this.contact = contactText
      })()
    }
  }
</script>

<style>

</style>
