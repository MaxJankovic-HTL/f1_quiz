<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="site">
    <section class="section py-2 text-center shadow-lg">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto mt-2">
          <h1 class="fw-bold">FAST ➔ FASTER ➔ F1</h1>
          <p class="lead text-muted"></p>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <RouterLink class="col w-25 nav-link mx-5" to="/easy-quiz">
          <div class="card h-100 text-center">
            <img src="../../public/images/tyres/soft.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">QUIZ - EASY</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </RouterLink>

        <RouterLink class="col w-25 nav-link mx-5" to="/medium-quiz">
          <div class="card h-100 text-center">
            <img src="../../public/images/tyres/medium.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">QUIZ - MEDIUM</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </RouterLink>

        <RouterLink class="col w-25 nav-link mx-5" to="/hard-quiz">
          <div class="card h-100 text-center">
            <img src="../../public/images/tyres/hard.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">QUIZ - HARD</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
.section {
}

.site {
  background-color: f7f4f1;
  padding-bottom: 25%;
}
</style>
