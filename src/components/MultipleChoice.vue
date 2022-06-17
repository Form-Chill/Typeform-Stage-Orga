<template>

<div v-if="this.editable">

    <div class="btn-group row" role="group" aria-label="Basic radio toggle button group">
        <div class="col-sm-3 col-md-3" v-for="(item,index) in this.responsesPossibles">
            <!-- <RadioButton :text="item" :number="(index)" ></RadioButton> -->
            <input type="radio" class="btn-check" name="btnradio" :id="'btnradio' + index"  >
            <label @click="btnClick(item)"  class="btn btn-outline-light w-10 mb-3" :for="'btnradio' + index"> {{item}} </label> 
        </div> 
    </div>
    </div>
    <div v-else>
        <div class="btn-group row" role="group" aria-label="Basic radio toggle button group">
        <div class="col-sm-3 col-md-3" v-for="(item,index) in this.responsesPossiblesTmp">
            <!-- <RadioButton :text="item" :number="(index)" ></RadioButton> -->
            <input type="radio" class="btn-check" name="btnradio" :id="'btnradio' + index"  >
            <label @click="btnClick(item)"  class="btn btn-outline-light w-10 mb-3" :for="'btnradio' + index"> {{item}} </label> 
        </div> 
    </div>
    </div>



   
    
</template>


<script>

export default{

    props: {
        responses: [],
        responsesPossibles : [],
        editable:Boolean
    },
    mounted(){
        this.responsesPossiblesTmp =  this.responsesPossibles.slice(); //copie profonde
        
    },
    data(){
        return{
            responsesPossiblesTmp : []
        }
    },

    methods: {
        btnClick(reponse){
            this.responses.splice(0,this.responses.length);
            this.responses.push(reponse);
        }
    }
}
</script>