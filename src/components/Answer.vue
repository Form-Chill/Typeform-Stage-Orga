<script>


export default {
    props: {
        enonce: "",
        responses:Array,
    }
}

</script>


<template>
<div class="mh-auto mw-auto d-flex align-items-center" id="page">
    <div class="container-lg">
        <h2 class="text-white mb-5">{{this.enonce}}</h2>

        <textarea class="form-control mb-5 w-50" placeholder="Ecrivez votre réponse ici..." ></textarea>
        
        <div class="row col w-25 ms-1 mb-5">
            <!-- Insérer les boutons ici et mettre du margin bottom-->
            <button class="btn btn-outline-light w-10 mb-3">Oui</button>
            <button class="btn btn-outline-light">Non</button>
        </div>

        <div class="d-flex justify-content-end">
            <button class="btn btn-outline-light btn-lg">OK</button>
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