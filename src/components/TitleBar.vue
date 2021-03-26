<template>
  <ion-toolbar>
    <ion-title>타이틀바</ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
import { IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleBar',
  components: {
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>

</style>