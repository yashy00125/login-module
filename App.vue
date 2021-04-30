<template>
 <Appheader @open-loginm="isLoginOpen = false"  />
 
 <div >
   <router-view></router-view>
    
   </div>
   <loginm v-if="isLoginOpen" @close-login="isloginopen = false  " />
</template>


<script>

import Appheader from '@/components/Appheader';
import firebase from './utilities/firebase';
import loginm from '@/components/loginm';
export default{

  data(){
    return{
      isLoginOpen: false, 
      isOnboard: false,
      authuser: {},
    };
  },
  mounted(){
    firebase.auth().onAuthStatechanged((user) =>  {
      if (user){
        this.isOnboard = true;
        this.authuser = user;

      }
      else{
       this.isOnboard = false;
       this.authuser = {};
      }
    });
   

  },


  components: { Appheader, loginm },







};

</script>