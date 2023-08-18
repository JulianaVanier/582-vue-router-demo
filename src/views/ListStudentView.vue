<template>
  <div class="listStudents">
    <h1>List of students</h1>
    <li v-for="x in student" :key="x.id">
      <div
        @click="this.$router.push({ name: 'studentId', params: { id: x.id } })"
      >
        {{ x.name }}
      </div>
      <!-- <div @click="this.$router.push({ name: 'studentId', params: { id: 2 } })">
      Student
    </div> -->
    </li>
  </div>
</template>

<script>
export default {
  name: "ListStudentView",
  data() {
    return {
      student: [
        {
          id: 1,
          name: "John Doe",
          age: 20,
          address: "123 Main St",
          phone: "555-555-5555",
        },
        {
          id: 2,
          name: "Jane Doe",
          age: 19,
          address: "123 Main St",
          phone: "555-555-5555",
        },
        {
          id: 3,
          name: "Bob Smith",
          age: 21,
          address: "123 Main St",
          phone: "555-555-5555",
        },
      ],
    };
  },
};
</script>
