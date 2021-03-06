<template>
  <div>
    <b-modal id="modal-1" title="Add New Categories">
      <b-form-group
        id="fieldset-key"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Key"
        label-for="input-key"
      >
        <b-form-input id="input-key" v-model="params.key"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-name"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Display Name"
        label-for="input-name"
      >
        <b-form-input id="input-name" v-model="params.name"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-status"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Status"
        label-for="input-status"
      >
        <b-form-select
          v-model="params.status"
          :options="options"
          id="input-status"
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="fieldset-order"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Order"
        label-for="input-order"
      >
        <b-form-input id="input-order" v-model="params.order"></b-form-input>
      </b-form-group>

      <template #modal-footer>
        <b-button size="sm" variant="success" @click="addCategories">
          ADD
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalAdd',
  data() {
    return {
      options: [
        { value: true, text: 'Enable' },
        { value: false, text: 'Disable' }
      ],
      params: {
        key: null,
        name: null,
        order: null,
        status: null
      }
    }
  },
  methods: {
    addCategories() {
      console.log('this.getLastId : ', this.getLastId)
      if (this.getAllCategories.length > 0) {
        this.$store.commit('addCategories', {
          id: this.getLastId + 1,
          key: this.params.key,
          name: this.params.name,
          order: Number(this.params.order),
          status: this.params.status
        })
        this.params.key = null
        this.params.name = null
        this.params.order = null
        this.params.status = null
        this.$bvModal.hide('modal-1')
      } else {
        this.$store.commit('addCategories', {
          id: 1,
          key: this.params.key,
          name: this.params.name,
          order: this.params.order,
          status: this.params.status
        })
        this.params.key = null
        this.params.name = null
        this.params.order = null
        this.params.status = null
        this.$bvModal.hide('modal-1')
      }

      console.log('this.getAllCategories: ', this.getAllCategories)
    }
  },
  computed: {
    getLastId() {
      return this.$store.getters.getLastId
    },
    getAllCategories() {
      return this.$store.state.categories
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
