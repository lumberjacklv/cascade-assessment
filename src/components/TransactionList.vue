<template>
  <div class="transaction-list">
    <transaction v-for="(trans, idx) in transactions" v-bind="trans" :key="idx" />
  </div>
</template>

<script>
import Transaction from './Transaction.vue';

export default {
  components: {
    Transaction,
  },
  props: {
    transactions: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="scss" scoped>
  .transaction-list {
    display: flex;
    flex-direction: column;
  }
</style>
