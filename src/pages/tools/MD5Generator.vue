<template>
  <q-page padding>
    <h1 class="text-h4 q-mt-none">
      {{ title }}
    </h1>

    <q-input
      v-model="text"
      type="textarea"
      autofocus
      outlined
    />

    <div class="flex justify-end q-mt-sm">
      <q-btn-group>
        <q-btn
          label="Random"
          glossy
          outline
          @click="random()"
        />
        <q-btn
          label="Clear"
          glossy
          outline
          @click="text = ''"
        />
      </q-btn-group>
    </div>

    <div class="text-h6 q-mt-md">
      Result:
    </div>

    <q-input
      v-model="hash"
      class="text-mono"
      bottom-slots
      outlined
      readonly
      clearable
    >
      <template v-slot:append>
        <q-icon
          name="far fa-copy"
          class="cursor-pointer"
          @click="copy()"
        />
      </template>
    </q-input>
  </q-page>
</template>

<script>
  import copy from 'copy-to-clipboard'
  import md5 from 'md5'
  import { Random } from 'random-js'

  const random = new Random()

  export default {
    name: 'MD5GeneratorPage',

    data () {
      return {
        title: 'MD5 generator',
        text: '',
      }
    },

    meta () {
      return {
        title: this.title,
      }
    },

    computed: {
      hash () {
        return md5(this.text)
      },
    },

    methods: {
      copy () {
        copy(this.hash)
        this.$q.notify({
          message: 'Copied!',
          color: 'positive',
        })
      },
      random () {
        this.text = random.string(10000)
      },
    },
  }
</script>
