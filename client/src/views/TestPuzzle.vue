<script setup>
// import data from '../../../server/f1_questions.json';
import { onMounted, ref } from 'vue';

const state = ref({
  rows: 5,
  columns: 5,
  currTile: null,
  otherTile: null,
  turns: 0,
});

onMounted(() => {
  // Initialisiere das 5x5 Board
  for (let i = 0; i < state.value.rows; i++) {
    for (let j = 0; j < state.value.columns; j++) {
      let tile = document.createElement("img");
      tile.src = "/images/puzzle/blank.jpg";

      // DRAG FUNCIONALITY
      tile.draggable = true;
      tile.addEventListener("dragstart", () => dragStart(tile));
      tile.addEventListener("dragover", (e) => dragOver(e));
      tile.addEventListener("dragenter", () => dragEnter(tile));
      tile.addEventListener("dragleave", () => dragLeave(tile));
      tile.addEventListener("drop", () => dragDrop(tile));
      tile.addEventListener("dragend", () => dragEnd(tile));

      document.getElementById("board").appendChild(tile);
    }
  }

  // Puzzleteile
  let pieces = [];
  for (let k = 1; k <= state.value.rows * state.value.columns; k++) {
    pieces.push(k.toString()); // Füge "1" bis "25" in das Array ein (Puzzle-Bildernamen)
  }
  pieces.reverse();

  for (let s = 0; s < pieces.length; s++) {
    let j = Math.floor(Math.random() * pieces.length);

    // Tausche die Stücke
    let tmp = pieces[s];
    pieces[s] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "/images/puzzle/" + pieces[i] + ".png";

    // DRAG FUNCIONALITY
    tile.draggable = true;
    tile.addEventListener("dragstart", () => dragStart(tile));
    tile.addEventListener("dragover", (e) => dragOver(e));
    tile.addEventListener("dragenter", () => dragEnter(tile));
    tile.addEventListener("dragleave", () => dragLeave(tile));
    tile.addEventListener("drop", () => dragDrop(tile));
    tile.addEventListener("dragend", () => dragEnd(tile));

    document.getElementById("pieces").appendChild(tile);
  }
});

// DRAG-TILES
function dragStart(tile) {
  state.value.currTile = tile;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(tile) {
  tile.classList.add("over");
}

function dragLeave(tile) {
  tile.classList.remove("over");
}

function dragDrop(tile) {
  tile.classList.remove("over");
  state.value.otherTile = tile;
  swapTiles(state.value.currTile, state.value.otherTile);
}

function dragEnd(tile) {
  tile.classList.remove("over");
  state.value.turns += 1;
}

function swapTiles(currTile, otherTile) {
  const tempSrc = currTile.src;
  currTile.src = otherTile.src;
  otherTile.src = tempSrc;
}


// Code für die Fragen
// let showQuestion = ref([]);
// let correctAnswer = ref('');
// let isCorrect = ref(false);
// let score = ref(0);

// onMounted(() => {
//   const easyData = data.fragen.filter((item) => item.difficulty === 'easy');
//   const randomIndex = Math.floor(Math.random() * easyData[0].questions.length);

//   const question = easyData[0].questions[randomIndex];
//   showQuestion.value.push(question);
//   correctAnswer.value = question.answer;
// });

// const checkAnswer = (option) => {
//   if (option === correctAnswer.value) {
//     scoreCount(1);
//     isCorrect.value = true;
//   } else {
//     scoreCount(0);
//     isCorrect.value = false;
//   }
// };

// function scoreCount(checkNum) {
//   if (checkNum == 0) {
//     score.value = 0;
//   } else {
//     score.value += 1;
//   }
// }

// const nextQuestion = () => {
//   // Generate new random question
//   const easyData = data.fragen.filter((item) => item.difficulty === 'easy');
//   const randomIndex = Math.floor(Math.random() * easyData[0].questions.length);
//   const question = easyData[0].questions[randomIndex];

//   showQuestion.value = [question];
//   correctAnswer.value = question.answer;
//   isCorrect.value = false;

//   // Re-render component to display new question
//   const vm = this;
//   vm.$nextTick(() => {
//     vm.$emit('update:questionData');
//   });
// };
</script>

<template>
  <!-- <div
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
              disableds
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
  </div> -->

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
        <div class="card-header text-light" style="background-color: #e10700"><b>- PUZZLE -</b></div>
        <div class="card-body">
          <div id="board"></div>
          <h5 class="card-title mt-3">Lösen Sie das Puzzle!</h5>
        </div>
        <div class="card-footer text-muted">
          <div id="pieces"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f7f4f1;
}

#board{
  width: 400px;
  height: 400px;
  border: 2px solid red;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

#board img {
  width: 79px;
  height: 79px;
  border: 0.5px solid lightblue;
}

#pieces{
  width: 1040px;
  height: 160px;
  border: 2px solid red;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

#pieces img{
  width: 79px;
  height: 79px;
  border: 0.5px solid lightblue;
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
