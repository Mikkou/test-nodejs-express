<template>
  <div id="main">
    <section id="about" class="three">
      <div class="container">

        <header>
          <h2>Title of article</h2>
        </header>

        <a href="#" class="image featured"><img src="../../assets/images/pic08.jpg" alt="" /></a>

        <p>Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
          ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
          laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
          parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
          dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
          ornare iaculis.</p>

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
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style scoped>

</style>
