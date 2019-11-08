<template>
  <b-container>
    <div>
      main
      <b-form-textarea
        id="textarea"
        v-model="main"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-btn @click="saveText('main', main)">save</b-btn>
    </div>

    <div>
      about
      <b-form-textarea
        id="textarea"
        v-model="about"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-btn @click="saveText('about', about)">save</b-btn>
    </div>

    <div>
      current translations
      <b-form-textarea
        id="textarea"
        v-model="translations"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-btn @click="saveText('translations', translations)">save</b-btn>
    </div>

    <div>
      contact
      <b-form-textarea
        id="textarea"
        v-model="contact"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-btn @click="saveText('contact', contact)">save</b-btn>
    </div>
  </b-container>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'only-admin',
    data () {
      return {
        main: '',
        about: '',
        translations: '',
        contact: ''
      }
    },
    methods: {
      async saveText (alias, text) {
        await this.$axios.put('/api/v1/static', { alias, text })
        alert('Сохранено')
      }
    },
    created () {
      (async () => {
        const { data: { text: mainText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'main' } })
        console.log(mainText)
        if (mainText) this.main = mainText
        const { data: { text: aboutText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'about' } })
        if (aboutText) this.about = aboutText
        const { data: { text: translationsText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'translations' } })
        if (translationsText) this.translations = translationsText
        const { data: { text: contactText } } = await this.$axios.get('/api/v1/static', { params: { alias: 'contact' } })
        if (contactText) this.contact = contactText
      })()
    }
  }
</script>

<style scoped>

</style>
