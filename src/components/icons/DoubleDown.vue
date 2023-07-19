<template>
  <div class="icon" @click="reverseArrow" :class="arrowPositionUp && 'reverse'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-double-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
      <path
        fill-rule="evenodd"
        d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DoubleDown",
  emits: ["expand"],
  setup() {
    const arrowPositionUp = ref(false);
    const reverseArrow = () => {
      arrowPositionUp.value
        ? (arrowPositionUp.value = false)
        : (arrowPositionUp.value = true);
    };
    return { arrowPositionUp, reverseArrow };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  position: absolute;
  bottom: 0.3rem;
  left: 50%;
  transform: translateX(-50%) rotate(0);
  padding: 0.3em;
  cursor: pointer;
  transition: transform 0.3s;
}
.reverse {
  transform: translateX(-50%) rotate(180deg);
}
</style>
