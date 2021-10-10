<template>
  <h1>GraphQL Demo</h1>
  <h3>User Data</h3>

  <table id="customers">
    <tr>
      <th>Name</th>
      <th>About</th>
      <th>Country</th>
    </tr>
    <tr v-for="ppl of people" :key="ppl.name">
      <td>{{ ppl.name }}</td>
      <td>{{ ppl.aboutShort }}</td>
      <td>{{ ppl.location.country.name }}</td>
    </tr>
  </table>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: 'App',
  apollo: {
    people: gql`
      query {
        people {
          name
          aboutShort
          location {
            country {
              name
            }
          }
        }
      }
    `,
  },
  data() {
    return {
      people: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04aa6d;
  color: white;
}
</style>
