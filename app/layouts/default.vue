<template>
  <div class="is-preload">

    <div id="header">

      <div class="top">

        <div id="logo">
          <span class="image avatar48"><img alt="" src="../assets/images/avatar.jpg"/></span>
          <h1 id="title">Jane Doe</h1>
          <p>Hyperspace Engineer</p>
        </div>

        <nav id="nav">
          <ul>
            <li>
              <nuxt-link :to="$route.path === '/' ? '#top' : '/'" id="top-link">
                <span class="icon solid fa-home">Intro</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="$route.path === '/' ? '#portfolio' : '/'" id="portfolio-link">
                <span class="icon solid fa-th">Current translations</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="$route.path === '/' ? '#about' : '/'" id="about-link">
                <span class="icon solid fa-user">About Me</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="$route.path === '/' ? '#contact' : '/'" id="contact-link">
                <span class="icon solid fa-envelope">Contact</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>

      </div>

      <div class="bottom">

        <ul class="icons">
          <li><a class="icon brands fa-facebook-f" href="https://www.facebook.com/volha.kaptur"><span class="label">Facebook</span></a>
          </li>
          <li><a class="icon solid fa-envelope" href="mailto: volha.kaptur@gmail.com"><span
            class="label"
          >Email</span></a></li>
          <li><a class="" href="https://vk.com/volhakaptur"><span class="label vk-icon">Vk</span></a></li>
        </ul>

      </div>

    </div>

    <nuxt/>

  </div>
</template>

<script>
  export default {
    head: {
      script: [
        { src: '/js/jquery.min.js', body: true },
        { src: '/js/jquery.scrolly.min.js', body: true },
        { src: '/js/jquery.scrollex.min.js', body: true },
        { src: '/js/browser.min.js', body: true },
        { src: '/js/breakpoints.min.js', body: true },
        { src: '/js/util.js', body: true },
        { src: '/js/main.js', body: true }
      ]
    }
  }
</script>

<style scoped>
  .vk-icon {
    font-weight: 600;
  }
</style>
