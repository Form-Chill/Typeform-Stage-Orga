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
            profile:null
        }
    },
    methods: {
        login(){
            console.log("Ceci est l'email " + this.form.email);
            console.log("Ceci est le mot de passe "  + this.form.password);

            signInWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
            .then((userCredential) => {
              //  alert("wouhou1");
                const user = userCredential.user;
                console.log(user)
                router.push("/dashboard")  
                 
            // Signed in  
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
            if (this.form.email == "") {
                this.message = "Veuillez entrer votre adresse e-mail dans le champ prévu à cet effet avant de réinitialiser votre mot de passe !"
            } else {
                const auth = getAuth();
                sendPasswordResetEmail(auth, this.form.email)
                .then(() => {
                    this.message = "Le mot de passe a été réinitialisé, vérifiez votre boîte mail."
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.code);
                    console.log(error.message);
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

<h1 style="text-align:center" class="fw-bold">Connexion</h1>
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
            <label class="form-check-label" for="exampleCheck1">Se souvenir de mes identifiants</label>
        </div> -->
        <div class="d-flex">
            <button @click="login" class="btn btn-success text-center" >Se connecter</button>  
            <button @click="resetPassword" class="btn btn-success text-center" >J'ai oublié mon mot de passe</button>  
            <button type="submit" @click="signInWithGoogle" class="btn btn-success">Se connecter avec Google</button>  
        </div>


        <p > {{this.errMessage}}</p>
    </form>
    <br>

    </div>
    <Footer></Footer>
    
</template>


<style>

#ConnexionUI{
    padding-top: 5%;
    padding-bottom: 15%;
}

</style>
