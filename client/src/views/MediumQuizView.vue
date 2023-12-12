<script setup>
import data from '../../../server/f1_questions.json';
import { onMounted, ref } from 'vue';

let showQuestion = ref([]);
let correctAnswer = ref('');
let isCorrect = ref(false);
let score = ref(0);

onMounted(() => {
  const mediumData = data.fragen.filter((item) => item.difficulty === 'medium');
  const randomIndex = Math.floor(Math.random() * mediumData[0].questions.length);

  const question = mediumData[0].questions[randomIndex];
  showQuestion.value.push(question);
  correctAnswer.value = question.answer;
});

const checkAnswer = (option) => {
  if (option === correctAnswer.value) {
    scoreCount(1);
    isCorrect.value = true;
  } else {
    scoreCount(0);
    isCorrect.value = false;
  }
};

function scoreCount(checkNum) {
  if (checkNum == 0) {
    score.value = 0;
  } else {
    score.value += 1;
  }
}

const nextQuestion = () => {
  // Generate new random question
  const mediumData = data.fragen.filter((item) => item.difficulty === 'medium');
  const randomIndex = Math.floor(Math.random() * mediumData[0].questions.length);
  const question = mediumData[0].questions[randomIndex];

  showQuestion.value = [question];
  correctAnswer.value = question.answer;
  isCorrect.value = false;

  // Re-render component to display new question
  const vm = this;
  vm.$nextTick(() => {
    vm.$emit('update:questionData');
  });
};
</script>

<template>
  <div
    class="modal fade"
    id="feedbackModal"
    tabindex="-1"
    aria-labelledby="feedbackModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog text-center">
      <div class="modal-content">
        <div
          class="modal-header text-light"
          :class="{ 'bg-success': isCorrect, 'bg-danger': !isCorrect }"
        >
          <h5 class="modal-title" id="feedbackModalLabel">Feedback:</h5>
        </div>

        <div class="modal-body" :class="{ 'text-success': isCorrect, 'text-danger': !isCorrect }">
          <p>
            {{
              isCorrect == true
                ? 'Congratulations! You answered correctly.'
                : `Incorrect answer. The correct answer is "${correctAnswer}".`
            }}
          </p>
          <p>
            <button
              class="btn btn-lg"
              :class="{ 'btn-outline-success': isCorrect, 'btn-outline-danger': !isCorrect }"
              disabled
            >
              Score: {{ score }}
            </button>
          </p>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn text-light"
            :class="{ 'btn-success': isCorrect, 'btn-danger': !isCorrect }"
            data-bs-dismiss="modal"
            @click="nextQuestion"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="area">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <div class="container text-center pt-5" style="opacity: 80%">
      <div class="card border-dark">
        <div class="card-header text-light" style="background-color: #e10700">
          <b>- MEDIUM -</b>
        </div>
        <div class="card-body">
          <img
            :src="
              `/images/question images/${showQuestion.map((el) => el.image).toString()}` ||
              '/images/f1_empty_image.png'
            "
            style="width: 60%"
          />
          <h5 class="card-title mt-3">{{ showQuestion.map((el) => el.question).toString() }}</h5>
        </div>
        <div class="card-footer text-muted">
          <button
            href="#"
            type="button"
            class="btn btn-outline-secondary mx-4 mt-2 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#feedbackModal"
            @click="checkAnswer(showQuestion.map((el) => el.options[0]).toString())"
          >
            {{ showQuestion.map((el) => el.options[0]).toString() }}
          </button>
          <button
            href="#"
            type="button"
            class="btn btn-outline-secondary mx-4 mt-2 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#feedbackModal"
            @click="checkAnswer(showQuestion.map((el) => el.options[1]).toString())"
          >
            {{ showQuestion.map((el) => el.options[1]).toString() }}
          </button>
          <button
            href="#"
            type="button"
            class="btn btn-outline-secondary mx-4 mt-2 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#feedbackModal"
            @click="checkAnswer(showQuestion.map((el) => el.options[2]).toString())"
          >
            {{ showQuestion.map((el) => el.options[2]).toString() }}
          </button>
          <button
            href="#"
            type="button"
            class="btn btn-outline-secondary mx-4 mt-2 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#feedbackModal"
            @click="checkAnswer(showQuestion.map((el) => el.options[3]).toString())"
          >
            {{ showQuestion.map((el) => el.options[3]).toString() }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f7f4f1;
}

.btn-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  width: 45%;
  height: 45%;
  margin: 5px;
}

.card-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: 'Exo', sans-serif;
}

.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}

.area {
  background: #38383f;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 90;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
