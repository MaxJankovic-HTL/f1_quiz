<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
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
    <div class="site">
      <section class="section py-2 text-center text-light shadow-lg">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto mt-2">
            <h1 class="fw-bold">FAST ➔ FASTER ➔ F1</h1>
            <p class="lead text-muted"></p>
          </div>
        </div>
      </section>

      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <RouterLink class="col w-25 nav-link mx-5" to="/quiz-easy">
            <div class="card h-100 text-center">
              <img src="../../public/images/tyres/soft.png" class="card-img-top" alt="..." />
              <div class="card-body" style="background-color: whitesmoke">
                <h5 class="card-title">QUIZ - EASY</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </RouterLink>

          <RouterLink class="col w-25 nav-link mx-5" to="/quiz-medium">
            <div class="card h-100 text-center">
              <img src="../../public/images/tyres/medium.png" class="card-img-top" alt="..." />
              <div class="card-body" style="background-color: whitesmoke">
                <h5 class="card-title">QUIZ - MEDIUM</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </RouterLink>

          <RouterLink class="col w-25 nav-link mx-5" to="/quiz-hard">
            <div class="card h-100 text-center">
              <img src="../../public/images/tyres/hard.png" class="card-img-top" alt="..." />
              <div class="card-body" style="background-color: whitesmoke">
                <h5 class="card-title">QUIZ - HARD</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .site {
  background-color: f7f4f1;
  padding-bottom: 25%;
} */

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
