
<script>
import Question from "../components/Question.vue"
import Navbar from "../components/Navbar.vue"
import { ref } from "vue";


 export default {
    components: { Question, Navbar },
    data(){
      return{
        indexActive: 0,
        pollname: '',

        listQuestions: [{
          enoncé: "",
          type: "",
          isActive: ref(true),
          responses: []

        }],

        radio: ref("")
        
      }
    },
    methods: {

      addQuestion(){
        this.listQuestions.push({
          enoncé: ref(""),
          type: ref(""),
          isActive: ref(false),
          responses: []
        });

        this.currentQuestion(this.listQuestions.length - 1);
      },

      currentQuestion(index){
        this.listQuestions[this.indexActive].isActive = false;
        this.listQuestions[index].isActive = true;
        this.indexActive = index;
      },

      test(){
        console.log(this.indexActive);
        console.log(this.listQuestions.length);
      },
      changeType(type){
        this.listQuestions[this.indexActive].type = type;
        this.listQuestions[this.indexActive].responses.splice(0,this.listQuestions[this.indexActive].responses.length)
    },

    addBtnRadio(s){
        if(s.length == 0 )
            alert("Le texte est vide");
        else{
            this.listQuestions[this.indexActive].responses.push(s);
            this.radio = "";}
    }




    }
  }


</script>


<template>
  <Navbar/>

  <h2 style="text-align:center">Créer un sondage </h2>
      <div class="row">
        <div v-for="(item,index) in this.listQuestions">
          <div v-if="item.isActive">
          <Question v-bind="listQuestions[index]"></Question> 
          
          <label>Texte enoncé:</label><br>  
          <input id="textenoncé" v-model="listQuestions[index].enoncé">
          <button  @click="" class="btn btn-primary text-center"> Changer l'énoncé (WIP)</button>

          <div v-show= "listQuestions[index].type == 'MultipleChoice'">
            <label>Texte radio bouton:</label><br>  
            <input v-model="radio">
            <button @click="addBtnRadio(radio)" class="btn btn-success text-center">Valider</button>
          </div>

          <li><button @click="changeType('MultipleChoice')" class="dropdown-item" type="button">Choix multiple</button></li>
          <li><button @click="changeType('SimpleText')" class="dropdown-item" type="button">Texte simple</button></li>
          </div>

        </div>
      </div>



      <div id="navigationQuestions" v-for="(item,index) in this.listQuestions" >
        <button class="btn btn-primary" @click="currentQuestion(index)">  Question n° {{index}} </button>
    
      </div>

   <button @click="addQuestion()" class="btn btn-success">Ajouter une question</button>

   <!-- <button @click="test()" class="btn btn-success">test</button> -->

   <Footer></Footer>

</template>



<style>


</style>