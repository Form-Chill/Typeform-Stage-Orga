<template>
    <textarea v-model="responses[0]" class="form-control mb-5 w-50" placeholder="Ecrivez votre réponse ici..." ></textarea>
</template>


<script>

export default{

    props: {
        responses: [],
    },

    mounted(){
        this.responses.splice(0,this.responses.length);
        this.responses.push("");
    }
}
</script>