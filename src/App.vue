<script setup>
import { ref } from 'vue';
import Admin from './components/Admin.vue';
import Teacher from './components/Teacher.vue';
import Home from './components/Home.vue';

const currentView = ref('home'); // Default view

const showAdmin = () => {
  currentView.value = 'admin';
};

const showTeacher = () => {
  currentView.value = 'teacher';
};
</script>
<style>
.fixed-size {
    width: 900px; /* Set a fixed width */
    height: 600px; /* Set a fixed height */
    overflow: hidden; /* Hide overflow content */
    box-sizing: border-box; /* Include padding and border in width and height */
}
</style>
<template>
  <header>
    <div class="wrapper">
      <Home 
        msg="You did it!" 
        @showAdmin="showAdmin" 
        @showTeacher="showTeacher" 
      />
    </div>
  </header>


    
    <main class="fixed-size">
      <component :is="currentView === 'admin' ? Admin : currentView === 'teacher' ? Teacher : null" />
    </main>

</template>


















<!-- <script setup>
import Admin from './components/Admin.vue'
import Home from './components/Home.vue'

</script>

<template>
  <header>
   

    <div class="wrapper">
      <Home msg="You did it!" />
    </div>
  </header>

  <main>
    <Admin />
    <Teacher />
  </main>
</template> -->

