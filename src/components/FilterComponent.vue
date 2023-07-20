<template>
  <select class="select" @change="sendCurrency" name="currency" id="currency">
    <option selected value="PLN">PLN</option>
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="GBP">GBP</option>
  </select>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FilterComponent",
  emits: ["currency", "filterOn"],
  setup(props, ctx) {
    const currency = ref("PLN");
    const sendCurrency = (e) => {
      ctx.emit("currency", e.target.value);
    };
    return { sendCurrency, currency };
  },
};
</script>
<style lang="scss" scoped></style>
