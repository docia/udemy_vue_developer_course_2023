<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World</h2>
    <h2 v-else key="secondary">Another hello!</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
    }
  }
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0
}

.fade-enter-active,
.fade-leave-active {
  transition: all 3s linear;
}

/* .fade-enter-active {
  animation: bounce-in 0.5s;
}

.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
} */
</style>
