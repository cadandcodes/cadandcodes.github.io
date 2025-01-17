<template>
    <div>
      <h1>Item List</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
      <form @submit.prevent="addItem">
        <input v-model="newItem" placeholder="Add new item" />
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: ['Item 1', 'Item 2', 'Item 3'],
        newItem: ''
      };
    },
    methods: {
      addItem() {
        if (this.newItem.trim()) {
          this.items.push(this.newItem);
          this.newItem = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background: #f9f9f9;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ddd;
  }
  input {
    margin-right: 10px;
  }
  </style>