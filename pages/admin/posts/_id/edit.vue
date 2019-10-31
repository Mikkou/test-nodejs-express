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
          v-model="form.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>


      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-form-group label="Small:" label-for="file-small" label-cols-sm="2" label-size="sm">
        <b-form-file id="file-small" size="sm"></b-form-file>
      </b-form-group>

      Comments

      <b-list-group>
        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Nickname</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Comment text
          </p>

          <small>ip address</small>
        </b-list-group-item>

        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Nickname</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Comment text
          </p>

          <small>ip address</small>
        </b-list-group-item>

        <b-list-group-item href="#" class="flex-column align-items-start">
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
    data() {
      return {
        form: {
          title: ''
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
