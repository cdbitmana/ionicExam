<template>
<ion-page>
  <ion-content fullscreen="true">
  <div class="flex flex-col">
  <HeaderBar :globalShare="globalShare"></HeaderBar>
  <TitleBar>홈 메인</TitleBar>
  </div>
  </ion-content>
</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent ,IonPage} from '@ionic/vue'

export default defineComponent({
  name: 'HomeMainPage',
  props: {
    globalShare: {
      type: Object,
      required: true
    }
  },
  components: {
    IonContent,
    IonPage
  }
})
</script>

<style scoped>
</style>