<template>
  <div class="transaction" :class="{ 'transaction--pending': pending }">
    <div class="transaction__date">{{TransactionDate | formatDate('MMM d, y')}}</div>
    <div class="transaction__merchant">{{MerchantName}}</div>
    <div class="transaction__amount">{{Amount | money}}</div>
  </div>
</template>

<script>
export default {
  props: {
    Amount: Number,
    Description: String,
    TransactionDate: String,
    MerchantName: String,
    pending: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .transaction {
    align-items: center;
    border-bottom: 1px solid #EEE;
    display: flex;
    height: 70px;
    &--pending {
      color: #333;
      font-style: italic;
      .transaction__merchant:after {
        content: ' (pending)';
      }
    }
    &__date {
      flex: 0 0 100px;
      padding-right: 20px;
    }
    &__merchant {
      flex: 1;
    }
    &__amount {
      flex: 0 1 100px;
      text-align: right;
    }
  }
</style>
