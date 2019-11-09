<template>
  <div v-if="data" id="main">
    <section id="about" class="three">
      <div class="container">

        <header>
          <h2>{{ data.title }}</h2>
        </header>

        <a href="#" class="image featured">
          <img :src="data.imagePath" alt="" /></a>

        <p>{{ data.description }}</p>

      </div>
    </section>
    <b-button v-b-modal.modal-center>Оставить комментарий</b-button>

    <b-modal id="modal-center" centered title="Оставить комментарий">
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Имя"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Почта" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Текст" label-for="input-2">
          <b-form-textarea
            id="textarea"
            v-model="form.text"
            rows="3"
            max-rows="3"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
    </b-modal>

    <b-list-group>
      <b-list-group-item href="#" disabled class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Артем Красавчик</h5>
          <small class="text-muted">3 days ago</small>
        </div>

        <p class="mb-1">Все супер!!</p>
      </b-list-group-item>

      <b-list-group-item href="#" disabled class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Рома Красавчик</h5>
          <small class="text-muted">3 days ago</small>
        </div>

        <p class="mb-1">Все супер!!</p>
      </b-list-group-item>

      <b-list-group-item href="#" disabled class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Пупкин Красавчик</h5>
          <small class="text-muted">3 days ago</small>
        </div>

        <p class="mb-1">Все супер!!</p>
      </b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: ''
        },
        data: null
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
