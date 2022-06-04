<template>

<div class="row block">

    <div id="apercu" class="card" style="width: 100rem;">
        <div class="class-body " >
            <div class="col-md-8  bbbb">
            <p class="card-text enonce"><b>{{this.enoncé}}</b></p>
            </div>
            <div class="col-md-12 component">
            <component :is="type" :responses="responses"></component>
            </div>
            <a class="btn btn-primary float-end bouton blue" >OK</a>
            
        </div>
        
    </div>

    


</div>



</template>



<script>
import { ref } from 'vue'
import MultipleChoice from "./MultipleChoice.vue"
import SimpleText from './SimpleText.vue'


export default {

components: {  MultipleChoice, SimpleText },

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
created(){


},

methods:{
}

}
</script>




<style>

#textenoncé{
    text-decoration: none !important;
    border:none !important;
    background-image:none;
    background-color:transparent;
    box-shadow: none;
    border-color: transparent !important;
 


} 

#apercu{
    margin: auto;
    background-color: #D9D9D9;
    font-size: large;
    /* padding-block: 10%; */
} 

.bbbb{
    overflow-wrap: break-word;
    overflow-y: auto;
}

.bouton{
   
    margin-bottom: 2%;
}

.enonce{
    margin-top: 10%;
    margin-left: 5%;
    font-size: 32px;

}

.component{
    margin-top: 5%;
     margin-left: 5%;
}

</style>