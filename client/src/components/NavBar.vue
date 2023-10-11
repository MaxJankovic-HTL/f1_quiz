<script setup></script>

<template>
  <nav style="background-color: #e10600" class="navbar navbar-dark bg-red rounded-4 mx-2 mt-2">
    <div class="container-fluid">
      <a class="navbar-brand mx-3" href="#">F1 QUIZ</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly">
          <li class="nav-item">
            <a class="nav-link active mx-3" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle mx-3"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Quiz
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Easy</a></li>
              <li><a class="dropdown-item" href="#">Medium</a></li>
              <li><a class="dropdown-item" href="#">Hard</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-3" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-toggler-icon {
  border-width: 10px;
}
</style>
