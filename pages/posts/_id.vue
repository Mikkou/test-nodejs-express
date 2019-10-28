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

    <b-modal id="modal-center" centered title="BootstrapVue">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
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
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

</style>
