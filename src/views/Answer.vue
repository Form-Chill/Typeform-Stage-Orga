<script>

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseDb'

import { ref } from 'vue'
import router from '../router'
import Question from '../components/Question.vue'
import Navbar from '../components/Navbar.vue'
import AnswerVue from '../components/Answer.vue'





export default{

    components: { Question, Navbar, AnswerVue },
    data() {
        return {
            id: new URL(location.href).searchParams.get("id"),
            title: ref(""),
            questions: [],
            indexActive: 0
        };
    },
     async created() {
        
        const docRef = doc(db, "polls", this.id);

        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            this.title = docSnap.data().title;
            this.questions = docSnap.data().questions;
            
        }
        else {
            console.log("Pas de doc ayant ce nom");
            //router.push('/NotFound');
        }
    },
    
}
</script>


<template>
<!-- <div v-for="(item,index) in this.questions">
          <div v-if="index == this.indexActive"> -->

<!-- <div class="mh-100 mw-100">
    <Question v-bind="questions"></Question>
</div>
-->

<AnswerVue></AnswerVue>

          <!-- </div>
</div> -->
<br>



</template>