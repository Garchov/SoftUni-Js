function summerOutfit(input) {
  let temperature = Number(input[0]);
  let partOFDay = input[1];
  let outfit = "";
  let shoes = "";
  switch (partOFDay) {
    case "Morning":
      if (temperature <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (temperature <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;

    case "Afternoon":
      if (temperature <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;

    case "Evening":
      outfit = "Shirt";
      shoes = "Moccasins";

      break;
  }
  console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]);
