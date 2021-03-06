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
        <tr v-for="(item, index) in getListOrder" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.name }}</td>
          <td>
            <div v-if="item.status">
              <img src="../../../assets/images/check.png" />
            </div>
            <div v-else>
              <img src="../../../assets/images/close.png" />
            </div>
          </td>
          <td>{{ item.order }}</td>
          <td>
            <div>
              <img src="../../../assets/images/edit.png" />
            </div>
          </td>
          <td>
            <div v-on:click="delCategories(item.order)">
              <img src="../../../assets/images/delete.png" />
            </div>
          </td>
          <td>
            <b-form-checkbox
              v-model="selected"
              :key="index"
              :value="item.order"
              :aria-describedby="ariaDescribedby"
              name="flavour-4a"
              inline
            >
            </b-form-checkbox>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableCategories',
  data() {
    return {
      selected: []
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    getListOrder() {
      return this.$store.getters.getListOrder
    }
  },
  methods: {
    delCategories(order) {
      this.$store.commit('delCategories', order)
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
