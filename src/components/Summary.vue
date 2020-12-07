<template>
  <div class="summary">
    <div class="summary__detail">
      <div class="summary__detail_title">Opening Balance</div>
      <div class="summary__detail_value">{{openingBalance | money}}</div>
    </div>
    <div class="summary__detail">
      <div class="summary__detail_title">Ending Balance</div>
      <div class="summary__detail_value">{{endingBalance | money}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openingBalance: Number,
    endingBalance: Number,
  },
};
</script>

<style lang="scss" scoped>
  .summary {
    &__detail {
      display: flex;
      width: 100%;
      &_title {
        flex: 1 1 50%;
        font-weight: bold;
        text-align: left;
      }
      &_value {
        align-self: flex-end;
        flex: 1 1 50%;
        text-align: right;
      }
    }
  }
</style>
