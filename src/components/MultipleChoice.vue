<template>

    <div class="btn-group row" role="group" aria-label="Basic radio toggle button group">
        <div class="col-sm-3 col-md-3" v-for="(item,index) in responses">
            <RadioButton :text="item" :number="(index)" ></RadioButton> 
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