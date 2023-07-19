<template>
  <div class="details">
    <h3>details of product</h3>
    <p>
      Name of product: <span>{{ product.name }}</span>
    </p>
    <p>
      Category of product:
      <span>{{ product.category === "pet-house" ? "house for pet" : "pet" }}</span>
    </p>
    <p v-if="product.category === 'pet-house'">
      type of pet house:
      <span>{{ product.type === "tree" ? "mounted on tree" : "mounted on ground" }}</span>
    </p>
    <p>
      price: <span>{{ price }} &nbsp;</span><span>{{ currency }}</span>
    </p>
  </div>
</template>

<script>
export default {
  namel: "ItemDetails",
  props: {
    product: {
      type: Object,
      recuired: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "PLN",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0.9em;
  padding: 0.8em;
  background-color: aliceblue;
  h3 {
    border-bottom: 1px solid black;
    text-align: center;
    text-transform: uppercase;
    padding: 0.3em;
  }
  p {
    padding: 0.5em;
  }
  span {
    font-weight: bolder;
  }
}
</style>
