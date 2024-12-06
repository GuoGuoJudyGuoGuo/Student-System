

<script setup>
import { ref } from 'vue';
import { Student, teacherStudentMap} from '@/state';

var teachers = []
var students = ref([])
for (const [teacher, studentsOfTeacher] of teacherStudentMap) {
  teachers.push(teacher)
  for (const student of studentsOfTeacher){
    students.value.push(student.clone())
  }
}
students.value.sort((a, b) => a.studentId-b.studentId);

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});


function addItem() {
  students.value.push(new Student(null, null, null, null, null));
}

function submitAll() {
  for (const student of students.value){
  teacherStudentMap.set(student.assignedTeacher, []);
}
for (const student of students.value){
  teacherStudentMap.get(student.assignedTeacher).push(student.clone());
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
button {
    margin: 5px;
}
</style>

<template>

  <div>
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3>
        Hello admin, please assign students to teachers
      </h3>
    </div>    
    <h1>Student Teacher Sheet</h1>
    <table>
      <thead>
        <tr>
          <th>UID</th>
          <th>Student Name</th>
          <th>Assigned Teacher</th>
          <th>Progress Grade</th>
          <th>Final Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>
            <input type="text" v-model="student.studentId" />
          </td>
          <td>
            <input type="text" v-model="student.name" />
          </td>
          <td>
            <select v-model="student.assignedTeacher">
              <option v-for="teacher in teachers" :key="teacher" :value="teacher">
              {{ teacher }}
              </option>
            </select>
          </td>
          <td>
            <span>{{ student.progressGrade }}</span>
          </td>
          <td>
            <span>{{ student.finalGrade }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addItem">Add Student</button>
    <button @click="submitAll">Save</button>
  </div>

</template>


