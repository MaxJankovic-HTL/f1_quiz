<script setup>
import data from '../../../server/f1_questions.json';

function randomQuestion() {
  const easyData = data.filter((item) => item.questions.difficulty === 'easy');
  const randomIndex = Math.floor(Math.random() * easyData.length);
  return easyData[randomIndex];
}
</script>

<template>
  <div class="container text-center mt-4">
    <p>{{ randomQuestion().question }}</p>
  </div>
</template>

<!-- <script setup>
import { json } from '@vue/composition-api';

const questions = json.parseFile('./data.json');
const easyQuestions = questions.filter((question) => question.difficulty === 'easy');
</script> 

<template>
  <div class="container text-center mt-4">
    <p v-for="question in easyQuestions" :key="question.id">
      {{ question.question }}
    </p>
  </div>
</template> -->