// utils/ReusableFunctions.js
async function createItem(Model, data) {
    try {
      const item = await new Model(data);
      return await item.save();
    } catch (error) {
      console.log(error.message);
    }
  }
















  async function getAllItems(Model) {
    try {
      return await Model.find();
    } catch (error) {
      console.log(error.message);
    }
  }















  
  
  async function getItemById(Model, id) {
    try {
      return await Model.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  

  
  async function updateItem(Model, id, data) {
    try {
      return await Model.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  async function deleteItem(Model, id) {
    try {
      return await Model.findByIdAndDelete(id);
    } catch (error) {
     console.log(error.message);
    }
  }
  
  module.exports = {
    createItem,
    getItemById,
    getAllItems,
    updateItem,
    deleteItem,
  };
  