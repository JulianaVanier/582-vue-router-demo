<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/liststudents">List Students AFTER</router-link> |
    <router-link to="/student">Student</router-link> |
    <router-link to="/liststudentsbefore">List Students BEFORE</router-link> |
  </nav>
  <button @click="this.$router.go(-1)">Return</button>
  <button @click="this.$router.go(1)">Foward</button>
  <router-view />
  <TestCompView />
</template>

<script>
import TestCompView from "./views/TestCompView.vue";

export default {
  name: "App",
  components: {
    TestCompView,
  },
};
// export default {
//   name: "App",
//   data() {
//     return {
//       student: [
//         {
//           name: "John Doe",
//           age: 20,
//           address: "123 Main St",
//           phone: "555-555-5555",
//         },
//         {
//           name: "Jane Doe",
//           age: 19,
//           address: "123 Main St",
//           phone: "555-555-5555",
//         },
//         {
//           name: "Bob Smith",
//           age: 21,
//           address: "123 Main St",
//           phone: "555-555-5555",
//         },
//       ],
//     };
//   },
// };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.not-found h1 {
  font-weight: normal;
  color: red;
}

.listStudents,
.student {
  display: block;
  width: 400px;
  margin: auto;
}

li {
  list-style: none;
  padding: 10px 0;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
