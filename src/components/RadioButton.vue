<template>
    <input  type="radio" class="btn-check" name="btnradio" :id="'btnradio' + this.number"  >
     <label class="btn btn-outline-primary" :for="'btnradio' + this.number"> {{this.text}} </label>
     <!-- <button @click="aaa()">aaa</button> -->
</template>


<script>
import { ref } from 'vue'



export default{
    data(){

        return{
            
           

        }
    },


    props:{
        text: String,
        number: Number
    },
    methods:{

        aaa(){
            alert('btnradio' + this.number)
        }
    }
}




</script>