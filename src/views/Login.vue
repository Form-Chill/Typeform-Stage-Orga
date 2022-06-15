<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { defineComponent, ref } from "vue";
import { getAuth,signOut, signInWithEmailAndPassword, sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup } from "@firebase/auth";
import { db } from "../firebaseDb.js";
import { collection, addDoc, doc,setDoc,getDoc,updateDoc } from "firebase/firestore";
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
            message:'', 
            profile:null
        }
    },
    methods: {
        login(){
            signInWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
            .then((userCredential) => {
              //  alert("wouhou1");
                const user = userCredential.user;
                router.push("/Dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                //const errorMessage = error.message;
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

        },
        resetPassword() {
            const auth = getAuth();
            if (this.form.email == "") {
                this.message = "";
                this.errMessage = "Veuillez entrer votre adresse e-mail dans le champ prévu à cet effet !";
            } else {
                sendPasswordResetEmail(auth, this.form.email)
                .then(() => {
                    this.errMessage = "";
                    this.message = "Un email vous a été envoyé pour réinitialiser votre mot de passe !";
                })
                .catch((error) => {
                    if (error.code == "auth/user-not-found") {
                        this.errMessage = "L'utilisateur est inconnu !";
                    }
                });
            }

        },
        async manageProfileData(uid,user){
         const docRef = doc(db, "users",uid);
         const docSnap = await getDoc(docRef);
       
         if(docSnap.exists()){

            this.profile = {
                name: "",
                firstName: user.displayName,
                email:  user.email,
            };

            this.updateUserData(uid,this.profile);
         }
        else{
            this.profile = {
                name: "",
                firstName: user.displayName,
                email:  user.email,
                bookmarks:[],
                pollsCreated:[]
            };
            this.addUserData(uid,this.profile);
            }
        },

        async addUserData(uid,profile ){
            const docRef = await setDoc(doc(db, "users",uid), profile);
        },
        async updateUserData(uid,profile ){
             const docRef = await updateDoc(doc(db, "users",uid), profile);
        },

        signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        
        const auth = getAuth();

        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const uid = user.uid;
            
            //on veut eviter d'écraser des données de profil si l'utilisateur s'est déjà connecté auparavant (probablement pas la meilleure solution)
            this.manageProfileData(uid,user);
            
            router.push('/dashboard');
        }).catch((error) => {
            // Handle Errors here.
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }
    }
};
</script>


<template>
<Navbar></Navbar>
<div id="ConnexionUI">
<br>

<img class="rounded mx-auto d-block" src="../assets/Icon.png" alt="Icone"/>

<h1 style="text-align:center; color: white" class="fw-bold">Connexion</h1>
<br>

    <form class="needs-validation container-fluid px-5" @submit.prevent="" novalidate>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" v-model="form.email" required>
            <label for="InputEmail">Adresse Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" v-model="form.password" required>
            <label for="InputPassword">Mot de passe</label>
        </div>
        <!-- <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1" style="color:white">Se souvenir de mes identifiants</label>
        </div> -->

        <div class=" row " id="buttons">
            <button @click="login" class="btn btn-success text-center me-3 col-md-3" >Se connecter</button>  
            <button @click="resetPassword" class="btn btn-outline-light text-center me-3 col-md-3">Réinitialiser le mot de passe</button>  
            <button type="submit" @click="signInWithGoogle" class="btn btn-light col-md-3">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="20" height="20">
                <defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs>
                <clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath>
                <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/>
                <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
            </svg>
                Se connecter avec Google
            </button>  
        </div>

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

    <div class="alert alert-success d-inline-flex align-items-center" role="alert" v-if="message">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
            <div class="px-2">
                {{this.message}}
            </div>
    </div>
    </form>
    <br>

    </div>
    <Footer></Footer>
    
</template>


<style>

#ConnexionUI{
    padding-bottom: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 20%;
    margin-right: 20%;
    background-color: #022C4F;
    border-radius: 20px;
}

</style>
