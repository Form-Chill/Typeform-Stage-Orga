
<script>
import Question from "../components/Question.vue"
import Navbar from "../components/Navbar.vue"


 export default {
    components: { Question, Navbar },
    data(){
      return{
        pollname: '',
        questions: []
      }
    },
    methods: {
      addQuestion(){
        this.questions.push([]);
      }
    }





  }


</script>


<template>
<Navbar></Navbar>
  <h2 style="text-align:center">Créer un sondage </h2>
   
  <div class="container">

      <div class="row">
        <div class="col-sm-12 col-md-12">
        <label>Nom du sondage</label>  <br>     
        <input v-model="radio">
        <button class="btn btn-success">Valider (WIP)</button>
        </div>
      

    <br>     
     <h2 style="text-align:center">Question </h2>



      <Question></Question>
    
    </div>

  </div>


   <button @click="addQuestion()" class="btn btn-success">Ajouter une question (WIP)</button>

</template>



<style>

.class-body{
  background-color: blue;



}
</style>