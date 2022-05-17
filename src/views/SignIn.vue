<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import router from "../router";

export default {
    components: { Navbar, Footer },
    data() {
        return {
           form: {
               name: '',
               firstName: '',
               birthdayDate: '',
               email: '',
               password: '',
               CGU: '',
               Sex: [],
            }, 
        }
    },
    methods: {
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.password = ''
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
        })
      },
      register(){
        //alert(this.form.email)
        createUserWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
        .then((data) => {
            console.log("Inscription réussie !");
            router.push('/about'); //Rediriger sur le dashboard
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
      },

      signInWithGoogle(){

      }
    }
}

</script>


<template>
<Navbar></Navbar>
<br>
<img class="mx-auto d-block" src="../assets/Icon.png" alt="Icone"/>
<h1 style="text-align:center" class="fw-bold"> Inscription</h1>
<br>
    <form class="needs-validation container-fluid px-5" novalidate>
          
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" v-model="this.form.email" required>
            <label for="InputEmail">Adresse Email</label>
            
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" v-model="this.form.password" required>
            <label for="InputPassword">Mot de passe</label>
        </div>

        
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Accepter les CGU</label>
        </div>
        <button type="submit" @click="register" class="btn btn-success" >S'inscrire</button>
        <button type="submit" @click="signInWithGoogle" class="btn btn-success">S'inscrire avec Google</button>  

    </form>
    <br>

<Footer></Footer>
</template>


<style>


</style>
