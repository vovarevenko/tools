<template>
  <div class="fixed-center text-center">
    <p>
      <q-icon
        name="far fa-frown-open"
        class="text-h1"
      />
    </p>
    <p class="text-faded">
      Sorry, nothing here… <strong>(404)</strong>
    </p>
    <q-btn
      color="dark"
      style="width:200px;"
      to="/"
      label="Go back"
    />
  </div>
</template>

<script>
  export default {
    name: 'Error404',
  }
</script>
