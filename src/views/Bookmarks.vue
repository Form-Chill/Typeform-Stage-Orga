<script>

import Poll from '../components/Poll.vue';

export default {
    components: { Poll },
}

</script>


<template>
    <Navbar />
    <br>

    <h1 class="title-1 fw-bold" style="text-align: center;">Mes favoris</h1>
    <br>

    <div class="">
        <div class="row row-cols-4">
            <Poll class="col"></Poll>
            <Poll class="col"></Poll>
            <Poll class="col"></Poll>
            <Poll class="col"></Poll>
        </div>

    </div>
    
    <Footer />

</template>


<style>

</style>