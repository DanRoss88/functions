const findWaldo = function (names, found) {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i);   // execute callback & return index
    }
  });
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  console.log("Waldo is located at:", index);
});