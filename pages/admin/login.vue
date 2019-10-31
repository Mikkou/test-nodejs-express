<template>
  <b-container>
    <b-form @submit="onSubmit">
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
        id="input-group-1"
        label="Enter password"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
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
    layout: 'admin',
    data() {
      return {
        form: {
          login: '',
          password: ''
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
