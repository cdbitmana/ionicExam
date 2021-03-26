import { createApp, reactive, computed } from 'vue'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import App from './App.vue'


import { IonicVue } from '@ionic/vue';



// 전역 CSS 불러오기
import './index.css'

// 전역 컴포넌트 불러오기
import * as Util from './utils/';

import HeaderBar from './components/HeaderBar.vue'
import TitleBar from './components/TitleBar.vue';
import FormRow from './components/FormRow.vue';

// 페이지 불러오기
import HomeMainPage from './pages/HomeMainPage.vue'
import ArticleListPage from './pages/ArticleListPage.vue'
import ArticleWritePage from './pages/ArticleWritePage.vue'
import ArticleDetailPage from './pages/ArticleDetailPage.vue'
import MemberLoginPage from './pages/MemberLoginPage.vue'
import MemberJoinPage from './pages/MemberJoinPage.vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// 전역상태 만들기
const authKey = localStorage.getItem("authKey")
const loginedMemberId = Util.toIntOrNull(localStorage.getItem("loginedMemberId"))
const loginedMemberName = Util.toStringOrNull(localStorage.getItem("loginedMemberName"))
const loginedMemberNickname = Util.toStringOrNull(localStorage.getItem("loginedMemberNickname"))
const loginedMemberProfileImgUrl = Util.toStringOrNull(localStorage.getItem("loginedMemberProfileImgUrl"))

const globalShare:any = reactive({
  fullPath: '',
  loginedMember:{
    authKey,
    id:loginedMemberId,
    name:loginedMemberName,
    nicknam:loginedMemberNickname,
    profileImgUrl:loginedMemberProfileImgUrl
  },
  isLogined: computed(() => globalShare.loginedMember.id !== null ),
  logout: () => {
    localStorage.removeItem("authKey");
    localStorage.removeItem("loginedMemberId");
    localStorage.removeItem("loginedMemberName");
    localStorage.removeItem("loginedMemberNickname");
    localStorage.removeItem("loginedMemberProfileImgUrl");

    location.replace('/member/login');
  }
});

// MainApi 불러오기
import { MainApi } from './apis/'

// MainApi 객체 생성
const mainApi = new MainApi();

// 라우팅 정보 구성
const routes = [
  {
    path: '/',
    component: HomeMainPage,
    props: (route:any) => ({ globalShare })
  },
  {
    path: '/article/list',
    component: ArticleListPage,
    props: (route:any) => ({ boardId: Util.toIntOrUnd(route.query.boardId), globalShare })
  },
  {
    path: '/article/detail',
    component: ArticleDetailPage,
    props: (route:any) => ({ id: Util.toIntOrUnd(route.query.id), globalShare })
  },
  {
    path: '/article/write',
    component: ArticleWritePage,
    props: (route:any) => ({ boardId: Util.toIntOrUnd(route.query.boardId), globalShare })
  },
  {
    path: '/member/login',
    component: MemberLoginPage,
    props: (route:any) => ({ globalShare })
  },
  {
    path: '/member/join',
    component: MemberJoinPage,
    props: (route:any) => ({ globalShare })
  }
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  globalShare.fullPath = to.fullPath;
  next();
});

const app = createApp(App, { globalShare })
  .use(IonicVue)
  .use(router);

// 전역 컴포넌트 등록
app.component('TitleBar', TitleBar);
app.component('FormRow', FormRow);
app.component('HeaderBar', HeaderBar);

  
router.isReady().then(() => {
  app.mount('#app');
});


// 전력 라이브러리 등록
app.config.globalProperties.$mainApi = mainApi;
app.config.globalProperties.$router = router;