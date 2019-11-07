<template>
  <b-container v-if="show">
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Login"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.login"
          type="text"
          required
          placeholder="Enter login"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Enter password"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    layout: 'empty',
    data() {
      return {
        form: {
          login: '',
          password: ''
        },
        show: false
      }
    },
    mounted () {
      (async () => {
        const token = localStorage.getItem('token')
        if (token) {
          const { status, data } = await this.$axios.post('/api/v1/login/verify', { token })
          if (status === 200 && data.success) {
            this.redirect()
          } else {
            this.show = true
          }
        }
        this.show = true
      })()
    },
    methods: {
      async onSubmit() {
        const { status, data: { token } } = await this.$axios.post('/api/v1/login', this.form)
        if (status === 200 && token) {
          localStorage.setItem('token', token)
          this.$axios.defaults.headers.common['Authorization'] = token
          this.redirect()
        } else {
          throw new Error('Something go wrong')
        }
      },
      redirect () {
        this.$router.replace({ path: '/admin' })
      }
    }
  }
</script>

