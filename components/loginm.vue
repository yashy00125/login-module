<template>

 
  <section 
   @click="close" 
   class="fixed top-0 z-20 w-screen h-screen bg-gray-500 " ></section>
  <div class="absolute inset-0 ">
    <div class = "flex h-full" >
      <div class = "z-30 p-2 m-auto bg-white rounded shadow ">

        <h1 class="text-2xl text-center" >login</h1>
        <form class = "p-2 my-2 " @submit.prevent="submit">
         <div class="my-6">  
          <label> Email or username </label>
          <input  
             v-model="email"
             class= "w-full p-2 rounded shadow " placeholder="Enter your Email" />
         </div>
         <div class= "my-6"> 
          <label> Password </label>
          <input 
            v-model="password"
            class= "w-full p-2 rounded shadow " type = "password" placeholder="enter your password" />
         </div>
          <div class= "my-6"> 
            <button type="submit " class= "w-full text-white rounded shadow-md bg-gradient-to-r from-red-800 to-pink-500 " >
              <span v-if =" !isloading " > Enter into database  </span>
              
            </button>

         </div>
          

          
          
          </form> 



      
      </div>


    
    
    </div>
  </div>   


</template>

<script>
import firebase from '../utilities/firebase'
export default{
  data(){
    return{
        Email:" ",
        Password:" ",      
        isloading :false,
        };
  
  },




  methods: {
    submit(){
      this.isloading = true;
      firebase.auth().signInWithEmailandPassword(this.Email,this.Password).
      then( () => {
        this.Email = "";
        this.Password = "";
        this.isloading = false;
        this.close();

      }).catch(e =>  {
        console.log(e);
        this.isloading = false;
      });
    },
    close(){
         this.$emit("close-login");      
    },
  }

  
}

</script>



<style></style>

