<template>
<nav class ="w-full px-4 py-2 bg-gradient-to-r from-blue-800 to-blue-600 text-red">
   <router-link to ="/Home">Home</router-link>
   

   <button  class= "mx-2 " @click= " $emit('open-loginm') " >Login</button>
    <button  class= "mx-2 " @click= "logout " >Log-out</button> 


 

</nav>



</template>

<script>
import firebase from '../utilities/firebase';
export default {
   methods:{
      logout(){
         firebase.auth().signOut();
         //.then(res => {}).catch(e => {});
      }
   }
    
}
</script>