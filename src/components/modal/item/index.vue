<template>
  <tr>
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
      <div v-on:click="delCategories(item.id)">
        <img src="../../../assets/images/delete.png" />
      </div>
    </td>
    <td>
      <b-form-checkbox :key="item.id" :value="item.id" inline>
      </b-form-checkbox>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: Object
  },
  data() {
    return {
      //   selected: []
    }
  },
  methods: {
    delCategories(id) {
      this.$store.commit('delCategories', id)
    }
  },
  computed: {}
}
</script>

<style lang="scss">
// @import './style.scss';
</style>
