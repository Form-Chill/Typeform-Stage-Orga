<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { db } from "../firebaseDb.js";
import { collection, addDoc, doc,setDoc } from "firebase/firestore";
import router from "../router";

export default {
    components: { Navbar, Footer },
    data() {
        return {
           form: {
               name: '',
               firstName: '',
               email: '',
               password: '',
               CGU:false,

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
            var currentUser = getAuth().currentUser;
            var uid = currentUser.uid;

            const profile = {
                name: this.form.name.toUpperCase(),
                firstName: this.form.firstName,
                email: this.form.email,
                bookmarks:[],
                pollsCreated:[]
            }

            this.addUserData(uid,profile);
            router.push('/dashboard');

        }).catch((error) => {
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
        });
      },


    async addUserData(uid,profile){
        //alert(uid);
        const docRef = await setDoc(doc(db, "users",uid), profile);
        console.log("Inscription réussie !");  
    },
    }
}

</script>


<template>
<Navbar></Navbar>

<div id="InscriptionUI">
<br>
<img class="mx-auto d-block" src="../assets/Icon.png" alt="Icone"/>
<h1 style="text-align:center; color:white" class="fw-bold"> Inscription</h1>
<br>
    <form class="needs-validation container-fluid px-5" @submit.prevent="">
        <div class="form-floating mb-3">
            <input type="string" class="form-control" id="InputName" placeholder="Nom" v-model="this.form.name" required>
            <label for="InputName">Nom</label>
        </div>

        <div class="form-floating mb-3">
            <input type="string" class="form-control" id="InputFirstname" placeholder="Prénom" v-model="this.form.firstName" required>
            <label for="InputFirstname">Prénom</label>
        </div>
          
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" v-model="this.form.email" required>
            <label for="InputEmail">Adresse Email</label>
            
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" v-model="this.form.password" required>
            <label for="InputPassword">Mot de passe</label>
        </div>

        <!-- <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" v-model="this.form.password" required>
            <label for="InputPassword">Confirmation du mot de passe (WIP)</label>
        </div> -->

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="this.form.CGU" required>
            <label style="color: white;" class="form-check-label" for="exampleCheck1">Accepter les CGU</label>
        </div>
        <button type="submit" @click="register" class="btn btn-success" >S'inscrire</button> 

    <br>
    <br>
    <div class="alert alert-danger d-inline-flex align-items-center" role="alert" v-if="errMessage">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
            <div class="px-2">
                {{this.errMessage}}
            </div>
    </div>
    </form>
    
   
   
    <br>

    </div>

<Footer></Footer>
</template>


<style>

#InscriptionUI{
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 20%;
    margin-right: 20%;
    background-color: #022C4F;
    border-radius: 20px;

}

</style>

