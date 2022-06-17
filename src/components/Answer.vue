<script>
import SimpleText from './SimpleText.vue';
import MultipleChoice from "./MultipleChoice.vue";


export default {
    components: { SimpleText,MultipleChoice },
    props: {
        enoncé: String,
        type: String,
        isActive: Boolean,
        responses: Array,
        responsesPossibles: Array,
        editable: Boolean
    },
    data(){
        return {
            message: "",
            radio: "",

        }
    },
    methods:{


    }
    
}

</script>


<template>
<div class="mh-auto mw-auto d-flex align-items-center" id="page">
    <div class="container-lg">
        <h2 class="text-white mb-5">{{this.enoncé}}</h2>

        <component :is="type" :responses="responses" :responsesPossibles="responses" :editable="editable"></component>
        
        <div class="d-flex justify-content-end">
            <button @click="(event) => this.$emit('clickBtn',event)" class="btn btn-outline-light btn-lg">OK</button>
        </div>
    </div>

</div>
    



</template>


<style>
#page {
    background-color: grey;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;  
}



</style>