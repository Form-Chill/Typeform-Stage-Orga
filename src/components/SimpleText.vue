<template>

    <div class="btn-group">
        <div class="input">
            <input placeholder="Une réponse" v-model="title">

        </div>
    </div>
    
</template>


<script>
import RadioButton from './Radiobutton.vue'

export default{
    components: {RadioButton},

    props: {
        responses: []
    }

    


}
</script>