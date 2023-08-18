<template>
  <h1>Demo Post</h1>
  <DemoPost></DemoPost>
  <div class="student">
    <h1>Student</h1>
    <p>{{ findStudent.id }}</p>
    <p>{{ findStudent.name }}</p>
    <p>{{ findStudent.age }}</p>
    <p>{{ findStudent.address }}</p>
    <p>{{ findStudent.phone }}</p>
  </div>
</template>

<script>
import DemoPost from "@/components/DemoPost.vue";

export default {
  name: "StudentView",
  // props: {
  //   student: {
  //     type: Object,
  //     required: true,
  //   },
  // },
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
  components: {
    DemoPost,
  },

  computed: {
    findStudent() {
      for (let i = 0; i < this.student.length; i++) {
        if (this.student[i].id == this.$route.params.id) {
          return this.student[i];
        }
      }
      return "Student not found";
    },
    // findStudent() {
    //   for (let x of this.student) {
    //     if (x.id == this.$route.params.id) return x;
    //   }
    //   return { error: "User not found" };

    //   // return this.users.find((x) => x.id == this.$route.params.id);
    // },
  },
};
</script>
