<template>
  <b-container>

    <b-btn>delete post</b-btn>

    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Title"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          required
          type="text"
          v-model="form.title"
        ></b-form-input>
      </b-form-group>


      <b-form-textarea
        id="textarea"
        max-rows="6"
        placeholder="Enter something..."
        rows="3"
        v-model="form.description"
      ></b-form-textarea>

      <b-form-group label="Small:" label-cols-sm="2" label-for="file-small" label-size="sm">
        <b-form-file id="file-small" size="sm" v-model="form.file"></b-form-file>
      </b-form-group>

      Comments

      <b-list-group>
        <b-list-group-item class="flex-column align-items-start" href="#">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Nickname</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Comment text
          </p>

          <small>ip address</small>
        </b-list-group-item>

        <b-list-group-item class="flex-column align-items-start" href="#">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Nickname</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Comment text
          </p>

          <small>ip address</small>
        </b-list-group-item>

        <b-list-group-item class="flex-column align-items-start" href="#">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Nickname</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Comment text
          </p>

          <small>ip address</small>
        </b-list-group-item>

      </b-list-group>


      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'only-admin',
    data () {
      return {
        form: {
          _id: '',
          title: '',
          description: '',
          file: null
        },
        imagePath: null
      }
    },
    methods: {
      async onSubmit (evt) {
        evt.preventDefault()
        const data = new FormData()
        data.set('_id', this.form._id)
        data.set('title', this.form.title)
        data.set('description', this.form.description)
        data.set('image', this.form.file)
        const { data: { success } } = await this.$axios.put('/api/v1/posts', data)
        if (success) {
          alert('Пост обновлен')
          this.$router.replace({ path: '/admin/posts' })
        } else {
          alert('ЧТо-то пошло не так')
        }
      },
      getBase64Image (img) {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        const dataURL = canvas.toDataURL('image/png')
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, '')
      }
    },
    mounted () {
      (async () => {
        const { data } = await this.$axios.get('api/v1/posts/' + this.$route.params.id)
        this.form._id = data._id
        this.form.title = data.title
        this.form.description = data.description
        this.imagePath = data.imagePath
        const base64 = this.getBase64Image(document.getElementById('image'))

        const byteString = atob(base64)
        const ab = new ArrayBuffer(byteString.length)
        const ia = new Uint8Array(ab)
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i)
        }
        const blob = new Blob([ia], {
          type: 'image/jpeg'
        })
        const parts = data.imagePath.replace('/uploads/', '').split('-')
        this.form.file = new File([blob], parts.splice(0, parts.length - 1).join('-') + '.jpg')
      })()
    }
  }
</script>

<style scoped>

</style>
