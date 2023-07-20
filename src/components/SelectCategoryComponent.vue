<template>
  <select @change="handleChange" class="select" name="category" id="category">
    <option value="all">all products</option>
    <option value="pet">pets</option>
    <option value="pet-house">houses</option>
  </select>

  <!-- <select
    v-if="category === 'pet-house'"
    class="select"
    name="house-type"
    id="house-type"
  >
    <option value="all">all products</option>
    <option value="pet">pets</option>
    <option value="pet-house">houses</option>
  </select> -->
</template>

<script>
import { ref } from "vue";
export default {
  name: "SelectCategoryComponent",
  emits: ["select"],
  setup(props, ctx) {
    const category = ref(null);
    const handleChange = (e) => {
      category.value = e.target.value;
      ctx.emit("select", e.target.value);
    };
    const handleInput = (e) => {
      console.log(e.target.value);
      ctx.emit("input", e.target.value);
    };

    return { category, handleChange, handleInput };
  },
};
</script>

<style lang="scss">
.select {
  width: 80%;
  padding: 1em;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
}
</style>
