import URL_to_image_1 from "../images/lunch/Chicken Avocado Salad.jpg";
import URL_to_image_2 from "../images/lunch/Pasta with Pesto and Sun-Dried Tomatoes.jpg";
import URL_to_image_3 from "../images/lunch/Tuna and Quinoa Bowl.jpg";
import URL_to_image_4 from "../images/lunch/Turkey and Cheese Wrap.jpg";
import URL_to_image_5 from "../images/lunch/Grilled Cheese Sandwich with Tomato Soup.jpg";
import URL_to_image_6 from "../images/lunch/Salmon and Asparagus.jpg";
import URL_to_image_7 from "../images/lunch/Chickpea and Vegetable Stir-Fry.jpg";
import URL_to_image_8 from "../images/lunch/Beef and Broccoli Bowl.jpg";
import URL_to_image_9 from "../images/lunch/Mashed Potato Bowl.jpg";
import URL_to_image_10 from "../images/lunch/Bean and Cheese Quesadilla.jpg";

import { v4 as uuidv4 } from "uuid";
export const recipes = [
  {
    id: uuidv4(),
    name: "Chicken Avocado Salad",
    calories: 475,
    description:
      "A healthy and filling salad with grilled chicken and creamy avocado.",
    instructions:
      "1. Toss mixed greens with grilled chicken, sliced avocado, and cherry tomatoes. \n2. Drizzle with vinaigrette dressing. \n3. Enjoy your delicious salad.",
    image: URL_to_image_1,
  },
  {
    id: uuidv4(),
    name: "Pasta with Pesto and Sun-Dried Tomatoes",
    calories: 525,
    description:
      "A flavorful pasta dish with whole wheat pasta, pesto sauce, sun-dried tomatoes, and Parmesan cheese.",
    instructions:
      "1. Cook whole wheat pasta. \n2. Toss with pesto sauce and sun-dried tomatoes. \n3. Top with Parmesan cheese and serve.",
    image: URL_to_image_2,
  },
  {
    id: uuidv4(),
    name: "Tuna and Quinoa Bowl",
    calories: 475,
    description:
      "A protein-packed bowl with quinoa, canned tuna, black beans, corn, and a zesty lime-cilantro dressing.",
    instructions:
      "1. Cook quinoa and mix with canned tuna, black beans, and corn. \n2. Drizzle with lime-cilantro dressing. \n3. Enjoy your nutritious bowl.",
    image: URL_to_image_3,
  },
  {
    id: uuidv4(),
    name: "Turkey and Cheese Wrap",
    calories: 425,
    description:
      "A simple and tasty wrap with whole grain tortilla, turkey slices, cheese, lettuce, and mustard.",
    instructions:
      "1. Lay turkey slices, cheese, and lettuce on a whole grain tortilla. \n2. Spread with mustard. \n3. Roll up and savor your wrap.",
    image: URL_to_image_4,
  },
  {
    id: uuidv4(),
    name: "Grilled Cheese Sandwich with Tomato Soup",
    calories: 625,
    description:
      "A classic combo of a grilled cheese sandwich with whole grain bread and a side of comforting tomato soup.",
    instructions:
      "1. Prepare a grilled cheese sandwich with whole grain bread. \n2. Serve with a side of tomato soup. \n3. Enjoy this cozy meal.",
    image: URL_to_image_5,
  },
  {
    id: uuidv4(),
    name: "Salmon and Asparagus",
    calories: 525,
    description:
      "Baked or grilled salmon with roasted asparagus and a zesty lemon-dill sauce.",
    instructions:
      "1. Bake or grill salmon and roast asparagus. \n2. Drizzle with lemon-dill sauce. \n3. Savor the delicious flavors.",
    image: URL_to_image_6,
  },
  {
    id: uuidv4(),
    name: "Chickpea and Vegetable Stir-Fry",
    calories: 425,
    description:
      "A vegetarian stir-fry with chickpeas, assorted vegetables, and a savory stir-fry sauce served over brown rice.",
    instructions:
      "1. Stir-fry chickpeas and assorted vegetables. \n2. Add a savory stir-fry sauce. \n3. Serve over brown rice and enjoy.",
    image: URL_to_image_7,
  },
  {
    id: uuidv4(),
    name: "Beef and Broccoli Bowl",
    calories: 525,
    description:
      "A hearty bowl with sliced beef, broccoli, and a flavorful sauce served over rice or noodles.",
    instructions:
      "1. Stir-fry sliced beef and broccoli. \n2. Add a flavorful sauce. \n3. Serve over rice or noodles and savor the dish.",
    image: URL_to_image_8,
  },
  {
    id: uuidv4(),
    name: "Mashed Potato Bowl",
    calories: 475,
    description:
      "A comforting bowl with mashed potatoes, butter, cheese, and your choice of toppings like bacon bits and sour cream.",
    instructions:
      "1. Prepare mashed potatoes with butter and cheese. \n2. Top with your favorite toppings like bacon bits and sour cream. \n3. Enjoy your mashed potato bowl.",
    image: URL_to_image_9,
  },
  {
    id: uuidv4(),
    name: "Bean and Cheese Quesadilla",
    calories: 425,
    description:
      "A quick and tasty quesadilla made with a whole wheat tortilla filled with black beans, cheese, and salsa.",
    instructions:
      "1. Place black beans and cheese between two whole wheat tortillas. \n2. Heat until the cheese melts. \n3. Serve with salsa and enjoy your quesadilla.",
    image: URL_to_image_10,
  },
];
