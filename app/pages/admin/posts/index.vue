<template>
  <b-container>
    <b-btn to="/admin/posts/add">Добавить пост</b-btn>
    <b-card v-for="(post, index) in posts" :key="index" class="mb-3" img-alt="Card image" img-left :img-src="post.imagePath">
      <u>{{ post.title }}</u>
      <b-card-text>{{ post.description }}</b-card-text>
      <div>{{ post.comments.length }} комментария</div>
      <b-btn :to="`/admin/posts/${post._id}/edit`">Редактировать</b-btn>
      <b-btn @click="deletePost(post._id)">Удалить</b-btn>
    </b-card>

  </b-container>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'only-admin',
    data () {
      return {
        posts: []
      }
    },
    created () {
      (async () => {
        const { data } = await this.$axios.get('/api/v1/posts')
        this.posts = data
      })()
    },
    methods: {
      async deletePost (id) {
        const { data: { success } } = await this.$axios.delete('/api/v1/posts/' + id)
        if (success) {
          alert('Пост был удален.')
          const { data } = await this.$axios.get('/api/v1/posts')
          this.posts = data
        } else {
          alert('Что-то пошло не так')
        }
      }
    }
  }
</script>

<style>
  .card img {
    max-height: 200px;
  }
</style>
