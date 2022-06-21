<template>


    <div id="apercu" class="card mw-100 mh-100">
        <div class="class-body " >
            <div class="col-md-8 bbbb">
                <p class="card-text enonce text-light"><b>{{this.enoncé}}</b></p>
            </div>
            <div class="component">
                <component class="row row-cols-2" :is="type" :responses="responses" :responsesPossibles="responses" :editable="editable"></component>
            </div>
            <a class="btn btn-outline-light btn-lg float-end mx-5 bouton " >OK</a>
            
        </div>
        
    </div>



</template>



<script>
import MultipleChoice from "./MultipleChoice.vue"
import SimpleText from './SimpleText.vue'


export default {
components: { MultipleChoice, SimpleText },

props: {
     enoncé: String,
     type:String,
     isActive: Boolean,
     responses: Array,
     responsesPossibles: Array,
     editable: Boolean
},
data(){
    return{
        message: "",
        radio: "",
    }
},
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
    background-color: grey;
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