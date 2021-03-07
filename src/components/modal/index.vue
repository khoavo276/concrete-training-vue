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
        <b-form-input
          id="input-key"
          v-model="params.key"
          :state="validationKey"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationKey">
          Please input key
        </b-form-invalid-feedback>
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
        <b-form-input
          id="input-name"
          v-model="params.name"
          :state="validationName"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationName">
          Please input name
        </b-form-invalid-feedback>
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
        <b-form-input
          id="input-order"
          v-model="params.order"
          :state="validationOrder"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationOrder">
          Please input order, order is number
        </b-form-invalid-feedback>
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
        key: '',
        name: '',
        order: '',
        status: null
      }
    }
  },
  methods: {
    addCategories() {
      if (this.validation) {
        console.log('Number(this.params.order): ', Number(this.params.order))
        if (this.getAllCategories.length > 0) {
          this.$store.commit('addCategories', {
            id: this.getLastId + 1,
            key: this.params.key,
            name: this.params.name,
            order: Number(this.params.order),
            status: this.params.status
          })
          this.params.key = ''
          this.params.name = ''
          this.params.order = ''
          this.params.status = null
          this.$bvModal.hide('modal-1')
        } else {
          this.$store.commit('addCategories', {
            id: 0,
            key: this.params.key,
            name: this.params.name,
            order: this.params.order,
            status: this.params.status
          })
          this.params.key = ''
          this.params.name = ''
          this.params.order = ''
          this.params.status = null
          this.$bvModal.hide('modal-1')
        }
      }
    }
  },
  computed: {
    getLastId() {
      return this.$store.getters.getLastId
    },
    getAllCategories() {
      return this.$store.state.categories
    },
    validationKey() {
      return this.params.key.length > 0
    },
    validationName() {
      return this.params.name.length > 0
    },
    validationOrder() {
      // return this.params.order.length > 0
      return !isNaN(this.params.order) && this.params.order.length > 0
    },
    validation() {
      return this.validationKey && this.validationName && this.validationOrder
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
