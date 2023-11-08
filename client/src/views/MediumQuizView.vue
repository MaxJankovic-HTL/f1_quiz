<script setup>
import data from '../../../server/f1_questions.json';
import { onMounted, ref } from 'vue';

let showQuestion = ref([]);
let correctAnswer = ref('');
let isCorrect = ref(false);

onMounted(() => {
  const mediumData = data.fragen.filter((item) => item.difficulty === 'medium');
  const randomIndex = Math.floor(Math.random() * mediumData[0].questions.length);

  const question = mediumData[0].questions[randomIndex];
  showQuestion.value.push(question);
  correctAnswer.value = question.answer;
});

const checkAnswer = (option) => {
  if (option === correctAnswer.value) {
    isCorrect.value = true;
    alert('Congratulations! You answered correctly.');
  } else {
    isCorrect.value = false;
    alert('Incorrect answer. The correct answer is ' + correctAnswer.value);
  }
};
</script>

<template>
  <div class="container text-center mt-5">
    <div class="card text-center">
      <div class="card-header text-light" style="background-color: #e10700"><b>- MEDIUM -</b></div>
      <div class="card-body">
        <img src="../../public/images/f1_empty_image.png" style="width: 60%" />
        <h5 class="card-title mt-3">{{ showQuestion.map((el) => el.question).toString() }}</h5>
      </div>
      <div class="card-footer text-muted">
        <btn
          href="#"
          class="btn btn-outline-secondary mx-4"
          @click="checkAnswer(showQuestion.map((el) => el.options[0]).toString())"
          >{{ showQuestion.map((el) => el.options[0]).toString() }}</btn
        >
        <btn
          href="#"
          class="btn btn-outline-secondary mx-4"
          @click="checkAnswer(showQuestion.map((el) => el.options[1]).toString())"
          >{{ showQuestion.map((el) => el.options[1]).toString() }}</btn
        >
        <btn
          href="#"
          class="btn btn-outline-secondary mx-4"
          @click="checkAnswer(showQuestion.map((el) => el.options[2]).toString())"
          >{{ showQuestion.map((el) => el.options[2]).toString() }}</btn
        >
        <btn
          href="#"
          class="btn btn-outline-secondary mx-4"
          @click="checkAnswer(showQuestion.map((el) => el.options[3]).toString())"
          >{{ showQuestion.map((el) => el.options[3]).toString() }}</btn
        >
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f7f4f1;
}

.btn {
  width: 250px;
}
</style>
