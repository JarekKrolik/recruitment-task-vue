<template>
  <li class="main__products-item">
    <div
      class="main__products-item-picture"
      :style="{
        border: `4px solid ${product.color}`,
        boxShadow: `0 0 8px ${product.color}`,
      }"
    >
      <img
        v-if="product.category === 'pet-house' && product.type === 'ground'"
        src="src\assets\img\house-pngwing.com.png"
        alt="pet house"
      />
      <img
        v-if="product.category === 'pet' && product.type !== 'canary'"
        :src="
          product.animalSize === 'small'
            ? 'src/assets/img/pngwing.com.png'
            : 'src/assets/img/rabbit.png'
        "
        alt="pet"
      />
      <img
        v-if="product.category === 'pet' && product.type === 'canary'"
        src="src\assets\img\canary.png"
        alt="pet"
      />
      <img
        v-if="product.category === 'pet-house' && product.type === 'tree'"
        src="src\assets\img\feeder.png"
        alt="pet"
      />
    </div>
    <p class="text">{{ product.name }}</p>
    <p class="text price">
      price :
      {{
        currency !== "PLN"
          ? (product.priceInPln / Number(currency_rate)).toFixed(2)
          : product.priceInPln
      }}
      {{ currency }}
    </p>
    <Transition name="rotate">
      <ItemDetails
        v-if="detailsOn"
        :product="product"
        :price="product.priceInPln"
        :currency="currency"
        :currency_rate="currency_rate"
      />
    </Transition>
    <DoubleDown @click="detailsExpand" />
  </li>
</template>

<script>
import { ref } from "vue";
import DoubleDown from "../components/icons/DoubleDown.vue";
import ItemDetails from "./ItemDetails.vue";
export default {
  name: "ListItem",
  components: {
    DoubleDown,
    ItemDetails,
  },
  props: {
    product: {
      type: Object,
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
    const detailsOn = ref(false);
    const detailsExpand = () => {
      detailsOn.value ? (detailsOn.value = false) : (detailsOn.value = true);
    };
    return { detailsOn, detailsExpand };
  },
};
</script>

<style lang="scss">
.rotate-enter-active {
  animation: rotate-in 0.3s linear;
}
.rotate-leave-active {
  animation: rotate-in 0.3s linear reverse;
}
@keyframes rotate-in {
  0% {
    transform: rotateX(-100deg);
    opacity: 0;
  }
  50% {
    transform: rotateX(-50deg);
    opacity: 0.5;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
}
.main__products-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5em 0.8em;
  font-family: "Ysabeau SC", sans-serif;
  border-radius: 10px;
  background-color: rgb(246, 200, 143);
  border: 1px solid black;
  .text {
    font-size: 1.5rem;
  }
  .price {
    font-weight: 700;
  }
  &-picture {
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    padding: 0.3em;
    margin: 0.3em;
    border-radius: 50%;
    box-shadow: 0 0 12px black;
    img {
      width: 100%;
    }
  }
}
@media (min-width: 912px) {
  .main__products-item {
    &-picture {
      width: 9rem;
      height: 9rem;
    }
    .text {
      font-size: 2.7rem;
    }
  }
}
@media (min-width: 1200px) {
  .main__products-item {
    padding: 1.5rem 5rem;
    &-picture {
      width: 7rem;
      height: 7rem;
    }
    .text {
      font-size: 2.2rem;
    }
  }
}
</style>
