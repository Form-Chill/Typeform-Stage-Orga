<script>
import { doc, getDoc, addDoc,collection } from 'firebase/firestore'
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
            indexActive: 0,
            id: new URL(location.href).searchParams.get("id"),
            title: ref(""),
            questions: [],
            responsesCollected : [],
            
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
            router.push('/NotFound');
        }
    },

    methods: {
        async sendAnswer(){
            const docRef = await addDoc(collection(db,"statistics"),{
                responsesCollected : this.responsesCollected,
                idPoll : this.id
                });

                router.push("/");
        },

         gotoNextQuestion(){
            this.responsesCollected.push({reponse : this.questions[this.indexActive].responses}); //push la reponse de l'utiisateur
            this.indexActive ++;
        }

    }
}
</script>


<template>

    <div v-for="(item,index) in this.questions">
        <div v-if="index == this.indexActive">
            <AnswerVue v-on:clickBtn="gotoNextQuestion()" v-bind="this.questions[index]" :editable="false"></AnswerVue>

        </div>
    </div>

    <div v-if="this.questions.length == this.indexActive" class="Merci">
        <h1> Merci d'avoir répondu, appuyez sur le bouton pour confirmer vos réponses</h1>
        <button @click="sendAnswer" class="btn btn-primary">Envoyer les données</button>
    </div>
</template>