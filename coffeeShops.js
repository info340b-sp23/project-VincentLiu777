var coffeeShops = [
    { 
      id: 1,
      name: "Coffee Shop 1", 
      ...
    },
    { 
      id: 2,
      name: "Coffee Shop 2", 
      ...
    },
    { 
      id: 3,
      name: "Coffee Shop 3", 
      ...
    }
  ];
  
  function getCoffeeShopById(id) {
    for (var i = 0; i < coffeeShops.length; i++) {
      if (coffeeShops[i].id === id) {
        return coffeeShops[i];
      }
    }
    return null;
  }
  