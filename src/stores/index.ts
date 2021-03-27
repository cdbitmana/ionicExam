import { computed, inject, reactive } from 'vue'
import * as Util from '../utils'
import { GlobalState } from '@/types'

export const globalStateSymbol = Symbol('globalShare');

// 전역상태 만들기
const authKey = localStorage.getItem("authKey")
const loginedMemberId = Util.toIntOrNull(localStorage.getItem("loginedMemberId"))
const loginedMemberName = Util.toStringOrNull(localStorage.getItem("loginedMemberName"))
const loginedMemberNickname = Util.toStringOrNull(localStorage.getItem("loginedMemberNickname"))
const loginedMemberProfileImgUrl = Util.toStringOrNull(localStorage.getItem("loginedMemberProfileImgUrl"))

export const globalShare = () => {
  const globalState: any = reactive({
  fullPath: '',
  loginedMember:{
    authKey,
    id:loginedMemberId,
    name:loginedMemberName,
    nickname:loginedMemberNickname,
    profileImgUrl:loginedMemberProfileImgUrl
  },
  isLogined: computed(() => globalState.loginedMember.id !== null ),
  logout: () => {
    localStorage.removeItem("authKey");
    localStorage.removeItem("loginedMemberId");
    localStorage.removeItem("loginedMemberName");
    localStorage.removeItem("loginedMemberNickname");
    localStorage.removeItem("loginedMemberProfileImgUrl");
    location.replace('/member/login');
  }
  })
  
};

  export const useGlobalShare = ():any => inject(globalStateSymbol);