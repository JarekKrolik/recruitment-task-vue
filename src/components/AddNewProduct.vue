<template>
  <div class="modal">
    <div class="addProduct">
      <h2>Add New Product</h2>
      <label for="category">Choose Category</label>
      <select
        v-model="category"
        @click="categoryHandle"
        class="select"
        name="category"
        id="category"
      >
        <option value="pet">pet</option>
        <option value="pet-house">house</option>
      </select>
      <form
        v-on:submit.prevent="submitHandle"
        v-if="category && category === 'pet'"
        class="form"
      >
        <label for="name">Name of Pet</label>
        <input
          @change="storeData"
          v-model="name"
          class="input"
          type="text"
          placeholder="Name"
          required
          minlength="3"
          maxlength="10"
        />
        <label for="type">Type Of Pet</label>
        <select
          @change="storeData"
          v-model="type"
          required
          class="select"
          name="type"
          id="type"
        >
          <option value="canary">canary</option>
          <option value="rabbit">rabbit</option>
          <option value="hamster">hamster</option>
        </select>
        <label for="animalSize">Size of Pet</label>
        <select
          @change="storeData"
          v-model="animalSize"
          required
          class="select"
          name="type"
          id="size"
        >
          <option value="small">small</option>
          <option value="medium">medium</option>
        </select>
        <label for="name">Color of Pet</label>
        <input
          v-model="color"
          @change="storeData"
          class="input"
          type="text"
          placeholder="Color"
          required
          minlength="3"
          maxlength="15"
        />
        <label for="name">Price of Pet</label>
        <input
          v-model="priceInPln"
          @change="storeData"
          class="input"
          type="number"
          placeholder="Price"
          required
          min="0"
          max="999"
        />
        <button class="save-btn" type="submit">Save</button>
      </form>
      <form
        v-on:submit.prevent="
          $emit('data', {
            name,
            category,
            type,
            color,
            animalSize,
            price,
            count,
          })
        "
        v-if="category && category !== 'pet'"
        class="form"
      >
        <label for="name">Name of House Project</label>
        <input
          @change="storeData"
          v-model="name"
          class="input"
          type="text"
          placeholder="Name"
          required
          minlength="3"
          maxlength="10"
        />
        <label for="type">Type of House</label>
        <select
          @change="storeData"
          v-model="type"
          required
          class="select"
          name="type"
          id="type"
        >
          <option value="tree">mounted on tree</option>
          <option value="ground">mounted on ground</option>
        </select>
        <label for="size">Size of House</label>
        <select
          @change="storeData"
          v-model="animalSize"
          required
          class="select"
          name="type"
          id="size"
        >
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="big">big</option>
        </select>
        <label for="color">Color of House</label>
        <input
          v-model="color"
          @change="storeData"
          class="input"
          type="text"
          placeholder="Color"
          required
          minlength="3"
          maxlength="15"
        />
        <label for="color">Number of Houses</label>
        <input
          v-model="count"
          @change="storeData"
          class="input"
          type="number"
          placeholder="number of houses"
          required
          min="0"
          max="999"
        />
        <label for="name">Price of House</label>
        <input
          v-model="priceInPln"
          @change="storeData"
          class="input"
          type="number"
          placeholder="Price in PLN"
          required
          min="0"
          max="9999"
        />
        <button class="save-btn" type="submit">Save</button>
      </form>
      <button @click="$emit('closeForm')" class="addProduct__exit-btn">&times;</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["closeForm", "data"],
  name: "AddNewProduct",
  setup(props, ctx) {
    const name = ref(null);
    const category = ref(null);
    const type = ref(null);
    const color = ref(null);
    const priceInPln = ref(null);
    const animalSize = ref(null);
    const count = ref(null);
    const submitHandle = () => {
      ctx.emit("data", {
        name: name.value,
        category: category.value,
        type: type.value,
        color: color.value,
        animalSize: animalSize.value,
        priceInPln: priceInPln.value,
      });

      ctx.emit("closeForm");
    };
    const categoryHandle = (e) => {
      category.value = e.target.value;
    };
    return {
      category,
      categoryHandle,
      name,
      type,
      color,
      animalSize,
      priceInPln,
      count,
      submitHandle,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2em 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}
.addProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  background-image: url("../assets/img/wood-ge15a0cebe_640.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  overflow: hidden;
  &__exit-btn {
    width: 5rem;
    height: 5rem;
    border: none;
    margin: 1em;
    border-radius: 50%;
    font-size: 2.5rem;
    background-color: rgb(246, 200, 143);
    cursor: pointer;
  }
  .input {
    width: 98%;
    display: block;
  }

  .save-btn {
    padding: 1.2em;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    background-color: rgb(246, 200, 143);
    font-family: "Ysabeau SC", sans-serif;
    font-size: 1.6rem;
    cursor: pointer;
  }

  .form {
    width: 100%;
    margin: 1em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label,
  h2 {
    display: block;
    text-align: center;
    font-size: 2.6rem;
    width: 98%;
    margin: 0.3em auto;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 5px 5px 10px black;
    border-radius: 10px;
    padding: 0.5em;
  }
  .select {
    width: 100%;
  }
}
@media (min-width: 1200px) {
  .addProduct {
    width: 55%;
    background-image: url("../assets/img/wood-g77fd02f9b_1280.jpg");

    &__exit-btn {
      width: 7rem;
      height: 7rem;
      border: none;
      margin: 1em;
      border-radius: 50%;
      font-size: 2.5rem;
      background-color: rgb(246, 200, 143);
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: rgb(246, 200, 143);
      }
    }
    .input {
      width: 98%;
      display: block;
    }

    .save-btn {
      padding: 1.2em 3em;
      transition: 0.3s;
      &:hover {
        background-color: black;
        color: rgb(246, 200, 143);
      }
    }

    .form {
      width: 80%;
    }

    label,
    h2 {
      display: block;
      text-align: center;
      font-size: 2.6rem;
      width: 98%;
      margin: 0.3em auto;
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 5px 5px 10px black;
      border-radius: 10px;
      padding: 0.5em;
    }
    .select {
      width: 100%;
    }
  }
}
</style>
