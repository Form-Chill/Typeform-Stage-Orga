<script >
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";

  var auth;

export default {



  data() {
    return {
       loggedIn: false,
    }
  },

  created(){
     auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user)
        this.loggedIn = true; 
        else
        this.loggedIn = false; 

    });
  },

  methods: {

    seDeconnecter(){
      signOut(auth).then(() => {
        this.loggedIn =  false,
        router.push("/");})
      .catch((error) => {
        console.log(error);
      })
    },

    testConnexion(){
      alert(this.loggedIn);
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

            <li class="nav-item" v-if="loggedIn">
              <router-link to="/Dashboard" class="nav-link active text-light ps-4">Tableau de bord</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sondages" class="nav-link active text-light ps-4">Sondages</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link active text-light  ps-4">A propos</router-link>
            </li>
          </ul>
         
            
            <div v-if="loggedIn" >
             <router-link to="/"><button class="btn btn-danger"  @click="seDeconnecter">Se déconnecter</button></router-link>
            </div>
            <div v-else>
              <router-link to="/login"><button class="btn btn-outline-light me-2" >Connexion</button></router-link>
              <router-link to="/signin"><button class="btn btn-success">Inscription</button></router-link>
            </div>
          <button @click="testConnexion" class="btn btn-success">test connexion</button>
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
