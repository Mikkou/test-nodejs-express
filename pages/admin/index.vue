<template>
  <b-container>
    <b-input-group
      size="lg"
      class="mb-3"
      prepend="About me"
    >
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" variant="success">Сохранить</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-container>
</template>

<script>
  export default {
    layout: 'admin'
  }
</script>

<style scoped>

</style>
