<template>
<ion-app>
  <main>
    <ion-router-outlet />
  </main>
</ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonContent, IonApp, IonRouterOutlet, IonHeader } from '@ionic/vue'
//import * as Util from './utils/'

export default defineComponent({
  name: 'App',
  props: {
    globalShare: {
      type: Object,
      required: true
    }
  },
  components: {
    IonApp,
    IonPage,
    IonContent,
    IonRouterOutlet,
    IonHeader
  }
})
</script>

<style lang="postcss">
.btn-type-1 {
  @apply py-2 px-4 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer;
}

.btn-primary {
  @apply py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 btn-type-1;
}

.btn-secondary {
  @apply py-2 px-4 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 btn-type-1;
}

.btn-success {
  @apply py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 btn-type-1;
}

.btn-danger {
  @apply py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 btn-type-1;
}

.btn-warning {
  @apply py-2 px-4 bg-yellow-600 hover:bg-yellow-700 btn-type-1;
}

.btn-info {
  @apply py-2 px-4 bg-purple-600 hover:bg-purple-700 btn-type-1;
}

.btn-link {
  @apply underline text-blue-500 hover:text-red-500 cursor-pointer;
}

.btns > [class*="btn-"] + [class*="btn-"] {
  margin-left: theme('spacing.2');
}
</style>