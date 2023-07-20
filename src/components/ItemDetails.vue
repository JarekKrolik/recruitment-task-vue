<template>
  <div class="details">
    <h3>details of product</h3>
    <p>
      Category of product:
      <span>{{ product.category === "pet-house" ? "house for pets" : "pet" }}</span>
    </p>
    <p>
      {{ product.category === "pet" ? "Name of pet: " : "Model of home: " }}
      <span>{{ product.name }}</span>
    </p>
    <p v-if="product.category === 'pet-house'">
      type of pet house:
      <span>{{ product.type === "tree" ? "mounted on tree" : "mounted on ground" }}</span>
    </p>
    <p v-if="product.category === 'pet'">
      pet species:
      <span>{{ product.type }}</span>
    </p>
    <p>
      {{ product.category === "pet" ? "color of pet: " : "color of house: " }}
      <span>{{ product.color }}</span>
    </p>
    <p>
      {{ product.category === "pet" ? "pet size: " : "house size: " }}
      <span>{{ product.animalSize }}</span>
    </p>
    <p>
      price:<span
        >{{
          currency !== "PLN"
            ? (product.priceInPln / Number(currency_rate)).toFixed(2)
            : product.priceInPln
        }}
        &nbsp;</span
      ><span>{{ currency }}</span>
    </p>
    <p v-if="product.category !== 'pet'">
      houses in stock :
      <span :class="product.count < 5 ? 'low-in-stock' : 'lot-in-stock'">{{
        product.count
      }}</span>
    </p>
    <p class="alert" v-if="product.count && product.count < 3">Almost out of stock !</p>
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
    currency_rate: {
      type: [String, Number],
      required: true,
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
    line-height: 2rem;
  }
  span {
    font-weight: bolder;
  }
}
.lot-in-stock {
  font-size: 2rem;
  color: green;
}
.low-in-stock {
  color: red;
  font-size: 2rem;
}
.alert {
  color: red;
  text-align: center;
}
</style>
