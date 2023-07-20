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

<style lang="scss" scoped>
.input {
  width: 80%;
  padding: 1em;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  margin: 0.7em auto;
}
</style>
