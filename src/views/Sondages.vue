<script>
    import Poll from "../components/Poll.vue";

    export default {
        components:{ Poll}
    }
</script>


<template>

<Navbar />
    <br>
    <h2 class="fw-bold" style="text-align: center;">Rechercher un sondage : </h2>

    <br>

    <div class="input-group mb-3 px-5">
        <input type="text" class="form-control" placeholder="Rechercher un sondage" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-primary" type="button" id="button-addon2">Rechercher</button>
    </div>
    <br>
    <!-- Afficher les sondages en fonction de la recherche -->

    <div class="OurPolls">
        <div class="row row-cols-4">
            <Poll class="col ms-3"></Poll>
        </div>
        
    </div>
    
    <br>
<Footer />
</template>

<style>
.OurPolls {
display: flex;
text-align: center;
justify-content: center;
}

</style>