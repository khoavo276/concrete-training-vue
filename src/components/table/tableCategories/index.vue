<template>
  <div class="tableCategories">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Key</th>
          <th scope="col">Display name</th>
          <th scope="col">Show/Hide</th>
          <th scope="col">Order</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
          <th scope="col">Bulk Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in categories" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.name }}</td>
          <td>show</td>
          <td>{{ item.order }}</td>
          <td>edit</td>
          <td>delete</td>
          <td>choose</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableCategories',
  computed: {
    categories() {
      return this.$store.state.categories
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
