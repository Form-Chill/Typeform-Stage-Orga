<template>

<div id="apercu" class="card" style="width:1000px">
    <div class="class-body row" >
        <p>{{this.enoncé}}</p>
        <component :is="type" :responses="responses"></component>
    </div>
</div>


<label>Texte enoncé:</label><br>  
<input id="textenoncé" v-model="enoncé">
<button  @click="" class="btn btn-success text-center"> Changer l'énoncé (WIP)</button>

<div v-show= "type == 'MultipleChoice'">
    <label>Texte radio bouton:</label><br>  
    <input v-model="radio">
    <button @click="addBtnRadio(radio)" class="btn btn-success text-center">Valider</button>
</div>

<!-- <div v-show= "tab == 'SimpleText'">
    <label>Texte radio bouton:</label><br>  
    <input v-model="radio">
    <button @click="addBtnRadio(radio)" class="btn btn-success text-center">Valider</button>
</div>
 -->


    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Type de réponse
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button @click="changeType('MultipleChoice')" class="dropdown-item" type="button">Choix multiple</button></li>
    <li><button @click="changeType('SimpleText')" class="dropdown-item" type="button">Texte simple</button></li>
    <li><button class="dropdown-item" type="button">(WIP)</button></li>
  </ul>
</div>

</template>



<script>
import { ref } from 'vue'

import RadioButton from "./Radiobutton.vue"

import MultipleChoice from "./MultipleChoice.vue"





export default{
components: { RadioButton,  MultipleChoice },
data(){
    return{
        enoncé: ref(""),    
        responses: ref([]),
        message: ref(""),
        radio: ref(""),
        type: ref("")
    }

},

methods:{
    addBtnRadio(s){
        if(s.length == 0 )
            alert("Le texte est vide");
        else
            this.responses.push(s);
    },

    changeType(type){
        this.type = type;
        this.responses.splice(0,this.responses.length)
    }
}

}
</script>




<style>
 /* #textenoncé{
text-decoration: none;
border:none;
background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
 


} */

#apercu{

padding: 10%;
} 

.class-body{
  background-color: white !important;
  



}

p{

    overflow-wrap: break-word;
}

</style>