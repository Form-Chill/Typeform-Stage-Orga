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
          createUserWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
            .then((data) => {
                console.log("Inscription réussie !");
                router.push('/Dashboard'); //Rediriger sur le dashboard
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
            <input type="string" class="form-control" id="InputName" placeholder="Nom" required>
            <label for="InputName">Nom</label>
        </div>

        <div class="form-floating mb-3">
            <input type="string" class="form-control" id="InputFirstname" placeholder="Prénom" required>
            <label for="InputFirstname">Prénom</label>
        </div>

        <div class="form-floating mb-3">
            <input type="string" class="form-control" id="InputNickname" placeholder="Pseudo" required>
            <label for="InputNickname">Pseudo</label>
        </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" required>
            <label for="InputEmail">Adresse Email</label>
            <div class="invalid-feedback">
                L'adresse Email est incorrecte.
            </div>
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" required>
            <label for="InputPassword">Mot de passe</label>
            <div class="invalid-feedback">
                Le mot de passe doit contenir au minimum 8 caractères, un chiffre et un caractère spécial.
            </div>
            <div class="valid-feedback">
                Le mot de passe est valide.
            </div>
        </div>

         <div class="form-floating mb-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Sexe</option>
                <option value="1">Masculin</option>
                <option value="2">Féminin</option>
            </select>
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
