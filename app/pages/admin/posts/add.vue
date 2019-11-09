<template>
  <b-container>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Title"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>


      <b-form-textarea
        id="textarea"
        v-model="form.description"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-form-group label="Small:" label-for="file-small" label-cols-sm="2" label-size="sm">
        <b-form-file v-model="form.image" id="file-small" size="sm"></b-form-file>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'only-admin',
    data() {
      return {
        form: {
          title: '',
          description: '',
          image: null
        }
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        const data = new FormData()
        data.set('title', this.form.title)
        data.set('description', this.form.description)
        data.set('image', this.form.image)
        const { data: { success } } = await this.$axios.post('/api/v1/posts', data)
        if (success) {
          alert('Пост создан')
          this.$router.replace({ path: '/admin' })
        } else {
          alert('ЧТо-то пошло не так')
        }
      }
    }
  }
</script>

<style scoped>

</style>
