<template>
  <div id="main" v-if="data">
    <section class="three" id="about">
      <div class="container">

        <header>
          <h2>{{ data.title }}</h2>
        </header>

        <a class="image featured" href="#">
          <img :src="data.imagePath" alt=""/></a>

        <p>{{ data.description }}</p>

      </div>
    </section>
    <b-button v-b-modal.modal-center>Оставить комментарий</b-button>

    <b-modal
      @ok="handleOk"
      centered id="modal-center" title="Оставить комментарий"
    >
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Имя"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            required
            type="email"
            v-model="form.name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Почта" label-for="input-2">
          <b-form-input
            id="input-2"
            required
            v-model="form.email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Текст" label-for="input-2">
          <b-form-textarea
            id="textarea"
            max-rows="3"
            rows="3"
            v-model="form.text"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
    </b-modal>

    <b-list-group>
      <b-list-group-item
        :key="index"
        class="flex-column align-items-start"
        disabled href="#" v-for="(comment, index) in data.comments"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ comment.name }}</h5>
          <small class="text-muted">{{ comment.createdAt.split('T')[0] }}</small>
        </div>

        <p class="mb-1">{{ comment.text }}</p>
      </b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          email: '',
          name: '',
          text: '',
          postId: null
        },
        data: null
      }
    },
    methods: {
      async handleOk (evt) {
        console.log(123)
        evt.preventDefault()
        this.form.postId = this.$route.params.id
        const { data: { success } } = await this.$axios.post('/api/v1/posts/comments', this.form)
        if (success) {
          const { data } = await this.$axios.get('api/v1/posts/' + this.$route.params.id)
          this.data = data
          alert('Комментарий добавлен')
        } else {
          alert('Что-то пошло не так.')
        }
      }
    },
    created () {
      (async () => {
        const { data } = await this.$axios.get('api/v1/posts/' + this.$route.params.id)
        this.data = data
      })()
    }
  }
</script>

<style scoped>

</style>
