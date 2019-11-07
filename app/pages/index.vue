<template>
  <div id="main">

    <section id="top" class="one dark cover">
      <div class="container">

        <header>
          <h2 class="alt">Hi! I'm <strong>Prologue</strong>, a <a href="http://html5up.net/license">free</a>
            responsive<br/>
            site template designed by <a href="http://html5up.net">HTML5 UP</a>.</h2>
          <p>Ligula scelerisque justo sem accumsan diam quis<br/>
            vitae natoque dictum sollicitudin elementum.</p>
        </header>

      </div>
    </section>

    <section id="portfolio" class="two">
      <div class="container">

        <header>
          <h2>Current translations</h2>
        </header>

        <p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
          egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
          Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
          fusce hendrerit lacus ridiculus.</p>

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

        <p>Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
          ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
          laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
          parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
          dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
          ornare iaculis.</p>

      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="four">
      <div class="container">

        <header>
          <h2>Contact</h2>
        </header>

        <p>Elementum sem parturient nulla quam placerat viverra
          mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
          donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
          orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>

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
        message: ''
      }
    },

    methods: {
      async sendMessage() {
        const { status, data } = await axios.post('http://localhost:3000/api/v1/feedback', {
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
    }
  }
</script>

<style>

</style>
