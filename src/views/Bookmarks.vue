<script>

import Poll from '../components/Poll.vue';

export default {
    components: { Poll },
}

</script>


<template>
    <Navbar></Navbar>
    <br>

    <h1 class="title-1 fw-bold" style="text-align: center;">Mes favoris</h1>
    <br>

    <div class="">
        <div id= "favoris" class="row row-cols-4">
            <Poll class="col ms-3"></Poll>
            <Poll class="col ms-3"></Poll>
            <Poll class="col ms-3"></Poll>
            <Poll class="col ms-3"></Poll>
            
        </div>

    </div>
    
    <Footer class= "mt-4"></Footer>

</template>


<style>
#favoris {
display: flex;
text-align: center;
justify-content: center;
}


</style>