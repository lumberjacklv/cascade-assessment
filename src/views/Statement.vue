<template>
  <div class="statement-view">
    <div class="statement-view__summary">
      <summary-data class="statement-view__summary_summary" v-bind="summary" />
    </div>
    <div class="statement-view__list">
      <h4>Transactions</h4>
      <transaction-list :transactions="transactions" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SummaryData from '../components/Summary.vue';
import TransactionList from '../components/TransactionList.vue';

export default {
  components: {
    SummaryData,
    TransactionList,
  },
  beforeMount() {
    this.fetchStatement();
  },
  computed: {
    ...mapGetters('statement', [
      'statement',
    ]),
    transactions() {
      return this.statement.Transactions.map((t) => ({
        ...t,
        pending: this.pendingTransactions.some(
          (pt) => (
            pt.MerchantNumber === t.MerchantNumber
            && pt.TransactionDate === t.TransactionDate
          ),
        ),
      }));
    },
    pendingTransactions() {
      return this.statement.NotSettled;
    },
    summary() {
      return {
        openingBalance: 400.00,
        endingBalance: 400.00 + this.transactions.reduce((c, t) => c + (t.Amount * -1), 0.00),
      };
    },
  },
  methods: {
    ...mapActions('statement', [
      'fetchStatement',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .statement-view {
    &__list {
      text-align: left;
    }
    &__summary {
      &_summary {
        max-width: 300px;
      }
    }
  }
</style>
