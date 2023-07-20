<template>
  <div class="filter-component">
    <button class="filter-component__button">Filter</button>
    <select
      @change="sendCurrency"
      class="filter-component__select"
      name="currency"
      id="currency"
    >
      <option selected value="PLN">PLN</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FilterComponent",
  emits: ["currency"],
  setup(props, ctx) {
    const currency = ref("PLN");
    const sendCurrency = (e) => {
      ctx.emit("currency", e.target.value);
    };
    return { sendCurrency, currency };
  },
};
</script>

<style lang="scss" scoped>
.filter-component {
  width: 98%;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin: 0.5em auto;
  &__button,
  &__select {
    width: 45%;
    padding: 1em;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
