<script >

import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseDb.js";

export default {
  data() {
    return {
       loggedIn: false,
       name:"",
       firstName:""
    }
  },

  async created(){
     let auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = true;
        let uid = user.uid;
         this.recupName(uid);
      } else {
        this.loggedIn = false;
      }
        
    });
  },

  methods: {
    seDeconnecter(){
      let auth = getAuth();
      signOut(auth).then(() => {
        this.loggedIn =  false,
        router.push("/");})
      .catch((error) => {
        console.log(error);
      })
    },

    testConnexion(){
      alert(this.loggedIn);
    }, 

    async recupName(uid) {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        this.name = docSnap.data().name;
        this.firstName = docSnap.data().firstName;

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  }
}

</script>


  <template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
     <router-link to="/"> <a id="titre" class="text-decoration-none navbar-brand text-white fw-bold translate-middle" href="#">
       <img class="logo" width="80" height="70" src="../assets/logo.png">
     </a></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active text-light ps-4">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sondages" class="nav-link active text-light ps-4">Sondages</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link active text-light  ps-4">A propos</router-link>
            </li>
          </ul>
         
            
            <div v-if="loggedIn" >
                <router-link to="/Dashboard">
                  <button class="btn btn-outline-light me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                    </svg> {{firstName + " " + name}}
                  </button>
                </router-link>
             <router-link to="/"><button class="btn btn-danger"  @click="seDeconnecter">Se déconnecter</button></router-link>
            </div>
            <div v-else>
              <router-link to="/login"><button class="btn btn-outline-light me-2" >Connexion</button></router-link>
              <router-link to="/signin"><button class="btn btn-success">Inscription</button></router-link>
            </div>
        </div>
      </div>
  </nav>
  </template>

<style>
.navbar {
  background-color: #022C4F !important;
  font-family: "Montserrat";
  /* font-size: large; */
}
</style>
