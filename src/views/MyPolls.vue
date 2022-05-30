<script>

import Poll from '../components/Poll.vue';

export default {
    components: { Poll },
}

</script>


<template>
    <Navbar />
    <br>

    <h1 class="title-1 fw-bold" style="text-align: center;">Mes sondages</h1>
    <br>

    <div class="MyPolls">
        <div class="row row-cols-4">
            <Poll class="col ms-3"></Poll>
        </div>

    </div>
    
    <Footer class="mt-4" />
</template>

<style>
.MyPolls {
display: flex;
text-align: center;
justify-content: center;
}


</style>