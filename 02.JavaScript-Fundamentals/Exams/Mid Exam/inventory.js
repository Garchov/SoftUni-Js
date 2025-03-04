function inventory(input) {
    let items = input.shift().split(", ");
  
    for (const line of input) {
      if (line === "Craft!") {
        console.log(items.join(", "));
        break;
      }
  
      let tokens = line.split(" - ");
      let command = tokens.shift();
  
      switch (command) {
        case "Collect":
          let collectedItem = tokens[0];
          if (!items.includes(collectedItem)) {
            items.push(collectedItem);
          }
          break;
        case "Drop":
          let droppedItem = tokens[0];
          if (items.includes(droppedItem)) {
            items.splice(items.indexOf(droppedItem), 1);
          }
          break;
        case "Combine Items":
          let [oldItem, newItem] = tokens[0].split(":");
          if (items.includes(oldItem)) {
            items.splice(items.indexOf(oldItem) + 1, 0, newItem);
          }
          break;
        case "Renew":
          let renewedItem = tokens[0];
          if (items.includes(renewedItem)) {
            items.splice(items.indexOf(renewedItem), 1);
            items.push(renewedItem);
          }
          break;
      }
    }
  }
  // inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
  inventory([
    "Iron, Sword",
    "Drop - Bronze",
    "Combine Items - Sword:Bow",
    "Renew - Iron",
    "Craft!",
  ]);

  // function Inventory(array) {
  //   let elementsList = array.shift(", ").split(", ");
  //   for (const el of array) {
  //     let line = el.split(" - ");
  //     let command = line[0];
  //     let element = line[1];
  
  //     switch (command) {
  //       case "Collect":
  //         if (!elementsList.includes(element)) {
  //           elementsList.push(element);
  //         }
  //         break;
  //       case "Drop":
  //         if (elementsList.includes(element)) {
  //           let indexToRemove = elementsList.indexOf(element);
  //           elementsList.splice(indexToRemove, 1);
  //         }
  
  //         break;
  //       case "Combine Items":
  //         let [oldItem, newItem] = element.split(":");
  //         if (elementsList.includes(oldItem)) {
  //           elementsList.splice(elementsList.indexOf(oldItem) + 1, 0, newItem);
  //         }
  //         break;
  
  //       case "Renew":
  //         if (elementsList.includes(element)) {
  //           let indexToRemove = elementsList.indexOf(element);
  //           let indexToAdd = elementsList.splice(indexToRemove, 1);
  //           elementsList.push(indexToAdd);
  //         }
  
  //         break;
  //       case "Craft!":
  //         console.log(elementsList.join(", "));
  //         break;
  //     }
  //   }
  // }
  
  // // Inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
  // Inventory([
  //   "Iron, Sword",
  //   "Drop - Bronze",
  //   "Combine Items - Sword:Bow",
  //   "Renew - Iron",
  //   "Craft!",
  // ]);