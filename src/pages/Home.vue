<template>
  <q-page padding>
    <h1 class="text-h4 q-mt-none">
      {{ title }}
    </h1>
    <p>
      I created this page for myself. But I'm glad that you are here!<br>
      Now you can use
      <router-link to="/counter" class="link">Character counter</router-link>
      and
      <router-link to="/generators/md5" class="link">MD5 generator</router-link>.
    </p>
  </q-page>
</template>

<script>
  import { productName as title } from '../../package'

  export default {
    name: 'HomePage',

    data () {
      return {
        title,
      }
    },
  }
</script>
