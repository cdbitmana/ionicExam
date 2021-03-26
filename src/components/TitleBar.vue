<template>
<ion-toolbar>
  <section class="title-bar px-2">
    <h1 class="container mx-auto text-3xl mt-3 mb-3">
      <slot></slot>
    </h1>
  </section>
</ion-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonToolbar } from '@ionic/vue'

export default defineComponent({
  name: 'TitleBar',
  components:{
    IonToolbar
  }
})
</script>

<style scoped>
  
</style>