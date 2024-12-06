<script setup>
import { teacherStudentMap } from '@/state';
import {ref} from 'vue';

var teachers = [];
for (const [teacher, studentsOfTeacher] of teacherStudentMap) {
  teachers.push(teacher)
}

var selectedTeacher = ref(null)
var students = ref(null)

function updateTeacher(teacher){
  selectedTeacher.value  = teacher
  students.value = []
  for (const student of teacherStudentMap.get(selectedTeacher.value)){
    students.value.push(student.clone())
  }
}

updateTeacher(teachers[0])

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});


function submitAll() {
  teacherStudentMap.set(selectedTeacher.value, [])
for (const student of students.value){
  teacherStudentMap.get(selectedTeacher.value).push(student.clone());
}
}
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}
input[type="number"] {
    width: 60px;
}
button {
    margin: 5px;
}
</style>

<template>
  <div>
    <div>
      <h2>Please choice your name:</h2>
      <div>
        <button
          v-for="teacher in teachers"
          :key="teacher"
          @click="(updateTeacher(teacher))"
        >
          {{ teacher }}
        </button>
      </div>
    </div>
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3>
        Hello {{ selectedTeacher }}, please change grades
      </h3>
    </div>
    <h1>Grade Sheet</h1>
    <table>
      <thead>
        <tr>
          <th>UID</th>
          <th>Name</th>
          <th>Progress Grade</th>
          <th>Final Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>
            <span>{{ student.studentId }}</span>
          </td>
          <td>
           <span>{{ student.name }}</span>
          </td>
          <td>
            <input type="number" v-model="student.progressGrade" />
          </td>
          <td>
            <input type="number" v-model="student.finalGrade" />
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="submitAll">Save</button>
  </div>
</template>

