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
            errMessage:'', 
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
        //Vérifier éventuellement ici si le nom et prénom du formulaire sont conformes avec du regex 
        createUserWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
        .then((data) => {
            console.log("Inscription réussie !");
            router.push('/about'); //Rediriger sur le dashboard
        })
        .catch((error) => {
           const errorCode = error.code;
            console.log(errorCode);

            switch(errorCode) {
                case "auth/invalid-email":
                    this.errMessage = "Adresse email invalide !";
                    break;
                case "auth/email-already-in-use":
                    this.errMessage = "Cette adresse mail est déja utilisée";
                    break;
                case "auth/weak-password":
                    this.errMessage = "Le mot de passe doit avoir au minimum 6 caractères !";
                    break;
                default:
                    this.errMessage = "Email et/ou mot de passe incorrect !";
                break;
            }
        })
      },

      signInWithGoogle(){

      }
    }
}

</script>


<template>
<Navbar></Navbar>

<div id="InscriptionUI">
<br>
<img class="mx-auto d-block" src="../assets/Icon.png" alt="Icone"/>
<h1 style="text-align:center" class="fw-bold"> Inscription</h1>
<br>
    <form class="needs-validation container-fluid px-5" @submit.prevent=""  novalidate>
        <div class="form-floating mb-3">
            <input type="string" class="form-control" id="InputName" placeholder="Nom" required>
            <label for="InputName">Nom (WIP) </label>
        </div>

        <div class="form-floating mb-3">
            <input type="string" class="form-control" id="InputFirstname" placeholder="Prénom" required>
            <label for="InputFirstname">Prénom (WIP)</label>
        </div>
          
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" v-model="this.form.email" required>
            <label for="InputEmail">Adresse Email</label>
            
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" v-model="this.form.password" required>
            <label for="InputPassword">Mot de passe</label>
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" v-model="this.form.password" required>
            <label for="InputPassword">Confirmation du mot de passe (WIP)</label>
        </div>


        
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Accepter les CGU</label>
        </div>
        <button type="submit" @click="register" class="btn btn-success" >S'inscrire</button>
        <button type="submit" @click="signInWithGoogle" class="btn btn-success">S'inscrire avec Google (WIP)</button>  
    </form>

    <p> {{this.errMessage}}</p>
    <br>

    </div>

<Footer></Footer>
</template>


<style>

#InscriptionUI{
    padding-top: 5%;
    padding-bottom: 15%;
}

</style>

