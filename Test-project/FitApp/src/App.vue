<template>
	<div class="fit-app">
    <record @data-saved="dataForAdvice"/>
    <advice />
    
	</div>
</template>

<script>
import Record from './components/Record.vue'
import Advice from './components/Advice.vue'

export default {
  name: "App",
  components: {
    Record, 
    Advice
  }
};
</script>

<style></style>
