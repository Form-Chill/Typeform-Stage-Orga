<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { defineComponent, ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import router from "../router";

export default {
    components: { Navbar, Footer },
    data() {
        return {
           form: {
               email: '',
               password: '',
               reminder: ''
            },
            errMessage:'', 
        }
    },
    methods: {
        login(){
            console.log(this.form.email);
            console.log(this.form.password);
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.form.email, this.form.password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            router.push("/");
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch(errorCode) {
                        case "auth/invalid-email":
                            this.errMessage = "Adresse email invalide !";
                            break;
                        case "auth/user-not-found":
                            this.errMessage = "Aucun compte trouvé avec ces identifiants !";
                            break;
                        case "auth/wrong-password":
                            this.errMessage = "Mot de passe incorrect !";
                            break;
                        default:
                            this.errMessage = "Email et/ou mot de passe incorrect !";
                            break;
                        }
                });

        }
    }
};




</script>


<template>
<Navbar></Navbar>
<br>
<img class="rounded mx-auto d-block" src="../assets/Icon.png" alt="Icone"/>
<br>
<h1 style="text-align:center" class="fw-bold">Connexion</h1>
<br>

    <form class="needs-validation container-fluid px-5" novalidate>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" v-model="form.email" required>
            <label for="InputEmail">Adresse Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" v-model="form.password" required>
            <label for="InputPassword">Mot de passe</label>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Se souvenir de mes identifiants</label>
        </div>
        <button @click="login" class="btn btn-success text-center" >Se connecter</button>  
        <div v-if="errorMessage" class="invalid-feedback">
            {{errorMessage}}
        </div>
    </form>
    <br>
    <Footer></Footer>
    
</template>


<style>

form {
    margin-bottom: auto;
}

</style>
