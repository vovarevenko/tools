<template>
  <q-page padding>
    <h1 class="text-h4 q-mt-none">
      {{ title }}
    </h1>

    <q-input
      v-model="text"
      type="textarea"
      autofocus
      autogrow
      outlined
    >
      <template v-slot:append>
        {{ count }}
      </template>
    </q-input>
  </q-page>
</template>

<script>
  export default {
    name: 'CharacterCounterPage',

    data () {
      return {
        title: 'Character counter',
        text: null,
      }
    },

    meta () {
      return {
        title: this.title,
      }
    },

    computed: {
      count () {
        return this.text ? this.text.length : 0
      },
    },
  }
</script>
