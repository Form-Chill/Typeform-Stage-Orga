<template>



<div id="apercu" class="card">
    <div class="class-body z row" >
        <div class="col-md-12  bbbb">
        <p>{{this.enoncé}}</p>
        </div>
        <component :is="type" :responses="responses"></component>
    </div>
</div>

</template>



<script>
import { ref } from 'vue'
import RadioButton from "./Radiobutton.vue"
import MultipleChoice from "./MultipleChoice.vue"

export default {
components: { RadioButton,  MultipleChoice },

props: {
     enoncé: String,
     type:String,
     isActive: Boolean,
     responses: Array
},
data(){
    return{
        message: ref(""),
        radio: ref(""),
    }

},

methods:{
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
    width: 80%;
   
    padding: 15% 30% 25% 10%;
    margin: auto;
    background-color: blanchedalmond;
} 

.class-body{
 
  



}

.bbbb{
    overflow-wrap: break-word;
}

</style>