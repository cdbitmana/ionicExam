<template>
<ion-header> 
  <header class="header-bar h-20 bg-black text-white">
    <div class="container mx-auto flex h-full">
      <router-link to="/" class="h-full flex items-center px-2">
        <img class="block w-10" src="../assets/logo.png" alt="">
      </router-link>

      <div class="flex-grow"></div>

      <router-link v-if="globalShare.isLogined && !!globalShare.loginedMember.profileImgUrl" to="/member/mypage" class="header-bar__profile-img flex items-center">
        <img :src="'http://localhost:8021' + globalShare.loginedMember.profileImgUrl" class="rounded-full" width="30" height="30" alt="">
      </router-link>

      <nav class="header-bar__menu-box-1  overflow-x-auto ml-2">
        <ul class="flex h-full">
          <li>
            <router-link to="/" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              홈
            </router-link>
          </li>
          <li v-if="globalShare.isLogined == false">
            <router-link to="/member/login" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              로그인
            </router-link>
          </li>
          <li v-if="globalShare.isLogined == false">
            <router-link to="/member/join" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              회원가입
            </router-link>
          </li>
          <li v-if="globalShare.isLogined">
            <a v-on:click="globalShare.logout" class="cursor-pointer h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              로그아웃
            </a>
          </li>
          <li v-if="globalShare.isLogined">
            <router-link to="/article/write" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              글 작성
            </router-link>
          </li>
          <li>
            <router-link to="/article/list?boardId=1" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              공지사항 리스트
            </router-link>
          </li>
          <li>
            <router-link to="/article/list?boardId=2" class="h-full flex items-center font-bold px-4 hover:bg-white hover:text-black whitespace-nowrap">
              자유 리스트
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
   </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonHeader } from '@ionic/vue'

export default defineComponent({
  name: 'HeaderBar',
  components:{
    IonHeader
  },
  props: {
    globalShare: {
      type:Object,
      required:true
    }
  }
})
</script>

<style scoped>
  
</style>