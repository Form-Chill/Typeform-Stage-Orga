<script>
import Question from "../components/Question.vue"
import Navbar from "../components/Navbar.vue"
import { ref } from "vue";
import { db } from "../firebaseDb.js";
import { collection, addDoc, doc,setDoc,updateDoc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import router from "../router";

export default {
    components: { Question, Navbar },
    data(){
      return{
        idForm: new URL(location.href).searchParams.get("id"),
        indexActive: 0,
        title: '',
        listQuestions: [],
        textRadio: ref("")
        
      }
    },
    created(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
            this.uid = user.uid;
            this.getForm();
        } else {
            console.log("No one connected !");
        }
        });
    },
    methods: {
      async getForm() {
        const docRef = doc(db, "polls", this.idForm);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.title = docSnap.data().title;
          this.listQuestions = docSnap.data().questions;
        }
      },
      addQuestion(type){
        this.listQuestions.push({
          enoncé: ref("Je suis un énoncé"),
          type: ref(type),
          isActive: ref(false),
          responses: []
        });

        this.currentQuestion(this.listQuestions.length - 1);
      },

      removeQuestion(index){
        this.listQuestions.splice(index,1);
        this.indexActive = 0;
      },
      //modifie la question afichée en fonction de son index
      currentQuestion(index){
        this.indexActive = index;
      },
      //modifie le type de la question (question à choix multiple, question avec une réponse possédant un simple input...)
      changeType(type){
        this.listQuestions[this.indexActive].type = type;
        this.listQuestions[this.indexActive].responses.splice(0,this.listQuestions[this.indexActive].responses.length)
    },

    addBtnRadio(textRadio){
      if(textRadio.length == 0 )
        alert("Le texte est vide");
      else{
        this.listQuestions[this.indexActive].responses.push(textRadio);
      }
    },
    async updatePoll(){
      const poll = {
        questions : this.listQuestions,
        title : this.title,
        createur: this.uid
      };
      const docRef = doc(db, "polls",this.idForm);
      await updateDoc(docRef, poll);
      router.push("/dashboard")
    }

    }
  }


</script>


<template>
  <Navbar/>

  <!-- Menu -->
  <div class="toolbox row justify-content-center">
    <div class="col-md-4 col-sm-12 ">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle blue" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
          Type de sondage
        </button>
        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          <li><button @click="changeType('MultipleChoice')" class="dropdown-item" type="button">Choix multiple</button></li>
          <li><button @click="changeType('SimpleText')" class="dropdown-item" type="button">Texte simple</button></li>
        </ul>
      </div>
    </div>

    <div class="col-md-4 col-xs-12">
      <input type="text" class="form-control" placeholder="Nom du sondage" v-model="title">
    </div>

    <div class="col-md-4 col-xs-12">
      <button @click="addQuestion('SimpleText')" class="btn" style="background-color: #022C4F; color:white;" >Ajouter une question</button>
      <button @click="removeQuestion(indexActive)" v-if="this.listQuestions.length > 1" class="btn btn-danger" >Supprimer la question</button>
    </div>

  </div>

  <br> 

   <!-- Affichage de la Question active du Sondage -->
    <div class="container-lg">
    <div v-for="(item,index) in this.listQuestions">
      <div v-if="index == indexActive">
        <label>Texte enoncé:</label><br>  
        <input class="form-control mb-3" v-model="listQuestions[index].enoncé" placeholder="Ecrivez votre question ici">
       
        <div v-show= "listQuestions[index].type == 'MultipleChoice'" class="mb-3">
          <label>Texte des réponses possibles :</label><br> 
          <input v-model="textRadio">
          <button @click="addBtnRadio(textRadio)" class="btn btn-success btn-sm text-center ms-2">Valider</button>
        </div>

        <Question v-bind="listQuestions[index]" :editable="true" ></Question> 
      </div>
    </div>

    <br> 

     <!--Pagination-->

     <div class="col-md-3 offset-md-4 col-xs-12 overflow-auto">
        <nav aria-label="Page navigation example" class="justify-content-center">
          <ul class="pagination">
          <div id="navigationQuestions" class="" v-for="(item,index) in this.listQuestions" >
            <li class="page-item " @click="currentQuestion(index)">
              <a class="page-link blue text-light"> {{index}} </a>
            </li>
          </div>
          </ul>
        </nav>
      </div>
      

    <div class="container-lg justify-content-end">
      <div class="float-end">
        <button @click="updatePoll()" class="btn btn-lg btn-success">Valider la modification</button>
      </div>
    </div>
      
   </div>
</template>




<style>

.toolbox{
  background-color: #25E589;
  width: inherit;
  padding-block: 1%;
}

</style>