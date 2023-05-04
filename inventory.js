function updateInventory(arr1, arr2) {
  // Convert the inventory arrays into an object
  const inventory = convertToInventoryObject(arr1);
  
  // Iterate over the fresh delivery array
  for (let i = 0; i < arr2.length; i++) {
    const [quantity, item] = arr2[i];
    
    // If the item exists in the inventory, update its quantity
    if (inventory.hasOwnProperty(item)) {
      inventory[item] += quantity;
    }
    // If the item doesn't exist, add it to the inventory
    else {
      inventory[item] = quantity;
    }
  }
  
  // Convert the inventory object back to an array and sort it alphabetically
  const sortedInventory = convertToSortedInventoryArray(inventory);
  
  // Return the sorted inventory array
  return sortedInventory;
}

// Helper function to convert the inventory arrays into an object
function convertToInventoryObject(inventoryArray) {
  const inventory = {};
  
  for (let i = 0; i < inventoryArray.length; i++) {
    const [quantity, item] = inventoryArray[i];
    inventory[item] = quantity;
  }
  
  return inventory;
}

// Helper function to convert the inventory object back to an array and sort it alphabetically
function convertToSortedInventoryArray(inventory) {
  const sortedInventory = [];
  
  for (let item in inventory) {
    sortedInventory.push([inventory[item], item]);
  }
  
  return sortedInventory.sort((a, b) => a[1].localeCompare(b[1]));
}
