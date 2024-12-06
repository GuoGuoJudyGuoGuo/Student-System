<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits();

</script>

<template>

      <div >
        <button @click="emit('showAdmin')">*Admin*</button>
        <button @click="emit('showTeacher')">*Teacher*</button>
      </div>

</template>


