<template>
  <input
    class="input"
    @input="handleInput"
    type="text"
    :value="value"
    placeholder="search..."
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  emits: ["input"],
  name: "InputKeyWord",
  setup(props, ctx) {
    const handleInput = (e) => {
      ctx.emit("input", e.target.value);
    };
    return { handleInput };
  },
};
</script>

<style lang="scss">
.input {
  width: 80%;
  padding: 1em;
  border-radius: 10px;
  text-align: center;
  font-family: "Ysabeau SC", sans-serif;
  box-shadow: 5px 5px 10px black;
  background-color: rgb(246, 200, 143);
  text-transform: uppercase;
  margin: 0.7em auto;
}
@media (min-width: 912px) {
  .input {
    font-size: 2.5rem;
  }
}
@media (min-width: 1200px) {
  .input {
    width: 60%;
    font-size: 1.9rem;
    cursor: pointer;
  }
}
</style>
