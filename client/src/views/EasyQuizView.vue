<script setup>
import data from '../../../server/f1_questions.json';
import { onMounted, ref } from 'vue';

let showQuestion = ref([]);
let correctAnswer = ref('');
let isCorrect = ref(false);

onMounted(() => {
  const easyData = data.fragen.filter((item) => item.difficulty === 'easy');
  const randomIndex = Math.floor(Math.random() * easyData[0].questions.length);

  const question = easyData[0].questions[randomIndex];
  showQuestion.value.push(question);
  correctAnswer.value = question.answer;
});

const checkAnswer = (option) => {
  if (option === correctAnswer.value) {
    isCorrect.value = true;
  } else {
    isCorrect.value = false;
  }
};

const nextQuestion = () => {
  window.location.reload();
};
</script>

<template>
  <div class="container text-center mt-5">
    <div class="card text-center">
      <div class="card-header text-light" style="background-color: #e10700"><b>- EASY -</b></div>
      <div class="card-body">
        <img src="../../public/images/f1_empty_image.png" style="width: 60%" />
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

    <div
      class="modal fade"
      id="feedbackModal"
      tabindex="-1"
      aria-labelledby="feedbackModalLabel"
      aria-hidden="true"
      @click="nextQuestion"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header {{ isCorrect.value ? 'bg-success' : 'bg-danger' }}">
            <h5 class="modal-title" id="feedbackModalLabel">Feedback</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              {{
                isCorrect.value
                  ? 'Congratulations! You answered correctly.'
                  : `Incorrect answer. The correct answer is ${correctAnswer.value}.`
              }}
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Next</button>
          </div>
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
</style>
