<template>
  <div class="is-preload">

    <div id="header">

      <div class="top">

        <div id="logo">
          <span class="image avatar48"><img src="../assets/images/avatar.jpg" alt="" /></span>
          <h1 id="title">Jane Doe</h1>
          <p>Hyperspace Engineer</p>
        </div>

        <nav id="nav">
          <ul>
            <li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
            <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Current translations</span></a></li>
            <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
            <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>
          </ul>
        </nav>

      </div>

      <div class="bottom">

        <ul class="icons">
          <li><a href="https://www.facebook.com/volha.kaptur" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
          <li><a href="mailto: volha.kaptur@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
        </ul>

      </div>

    </div>

    <nuxt />

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

<style>

</style>
