<template>
  <select @change="handleChange" class="select" name="category" id="category">
    <option value="all">all products</option>
    <option value="pet-canaries">pet - canaries</option>
    <option value="pet-rodents">pet - rodents</option>
    <option value="pet-house-tree">tree houses</option>
    <option value="pet-house-ground">ground houses</option>
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
  font-family: "Ysabeau SC", sans-serif;
  background-color: rgb(246, 200, 143);
}
@media (min-width: 912px) {
  .select {
    font-size: 2.5rem;
  }
}
@media (min-width: 1200px) {
  .select {
    width: 60%;
    font-size: 1.9rem;
    cursor: pointer;
  }
}
</style>
