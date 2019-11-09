<template>
  <b-row>
    <b-col cols="2">
      <b-list-group>
        <b-list-group-item>
          <nuxt-link to="/">Сайт</nuxt-link>
        </b-list-group-item>
        <b-list-group-item>
          <nuxt-link to="/admin">Главная</nuxt-link>
        </b-list-group-item>
        <b-list-group-item>
          <nuxt-link to="/admin/posts">Посты</nuxt-link>
        </b-list-group-item>
      </b-list-group>
    </b-col>
    <b-col cols="10">
      <nuxt />
    </b-col>
  </b-row>
</template>

<script>
  export default {
    created () {
      const token = localStorage.getItem('token')
      if (token) {
        this.$axios.defaults.headers.common['Authorization'] = token
      }
    }
  }
</script>

<style>

</style>
