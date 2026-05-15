const Storage = {
  // Store an item
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        console.error("Storage quota exceeded");
      }
      return false;
    }
  },
  
  // Retrieve an item
  get: (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Failed to parse stored data");
      return null;
    }
  },
  
  // Remove an item
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("Failed to remove item");
      return false;
    }
  },
  
  // Clear all items
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("Failed to clear storage");
      return false;
    }
  }
};

export default Storage;