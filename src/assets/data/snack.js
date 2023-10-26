import URL_to_image_1 from "../images/snack/Nut Butter and Banana Sandwich.jpg";
import URL_to_image_2 from "../images/snack/Cottage Cheese Stuffed Peppers.jpg";
import URL_to_image_3 from "../images/snack/Energy Bites photo.jpg";
import URL_to_image_4 from "../images/snack/Sweet Potato Fries.jpg";
import URL_to_image_5 from "../images/snack/chia-seed-pudding.jpg";
import URL_to_image_6 from "../images/snack/Cheese Quesadilla.jpg";
import URL_to_image_7 from "../images/snack/caramel-popcorn.jpg";
import URL_to_image_8 from "../images/snack/egg-salad-sandwich.jpg";
import URL_to_image_9 from "../images/snack/spinach-artichoke.jpg";
import URL_to_image_10 from "../images/snack/chocolate-milkshake.jpg";

import { v4 as uuidv4 } from "uuid";
export const recipes = [
  {
    id: uuidv4(),
    name: "Nut Butter and Banana Sandwich",
    calories: 375,
    description:
      "A delicious and energy-boosting sandwich with nut butter and bananas.",
    instructions:
      "1. Take two slices of whole wheat bread. \n2. Spread almond or peanut butter on one slice. \n3. Add banana slices on top. \n4. Place the second slice of bread on top. \n5. Enjoy your sandwich.",
    image: URL_to_image_1,
  },
  {
    id: uuidv4(),
    name: "Cottage Cheese Stuffed Peppers",
    calories: 220,
    description:
      "Mini bell peppers stuffed with low-fat cottage cheese and herbs for a healthy and savory snack.",
    instructions:
      "1. Cut mini bell peppers in half and remove the seeds. \n2. Fill each half with low-fat cottage cheese. \n3. Sprinkle with your favorite herbs and serve.",
    image: URL_to_image_2,
  },
  {
    id: uuidv4(),
    name: "Energy Bites",
    calories: 125,
    description:
      "A quick and nutritious snack with rolled oats, honey, peanut butter, and dark chocolate chips.",
    instructions:
      "1. Mix rolled oats, honey, peanut butter, and dark chocolate chips in a bowl. \n2. Roll into bite-sized balls. \n3. Refrigerate and enjoy.",
    image: URL_to_image_3,
  },
  {
    id: uuidv4(),
    name: "Sweet Potato Fries",
    calories: 175,
    description:
      "Crispy baked sweet potato fries seasoned with a touch of olive oil and spices.",
    instructions:
      "1. Cut sweet potatoes into fries. \n2. Toss with a light drizzle of olive oil and your favorite spices. \n3. Bake until crispy and enjoy.",
    image: URL_to_image_4,
  },
  {
    id: uuidv4(),
    name: "Chia Seed Pudding",
    calories: 225,
    description:
      "Creamy chia seed pudding made with almond milk, honey, and fresh fruit.",
    instructions:
      "1. Mix chia seeds with almond milk and honey in a jar. \n2. Refrigerate overnight. \n3. Top with fresh fruit before serving.",
    image: URL_to_image_5,
  },
  {
    id: uuidv4(),
    name: "Cheese Quesadilla",
    calories: 325,
    description:
      "A tasty quesadilla with whole wheat tortilla and melted shredded cheese, served with salsa.",
    instructions:
      "1. Place shredded cheese between two whole wheat tortillas. \n2. Heat in a pan until the cheese melts. \n3. Serve with salsa.",
    image: URL_to_image_6,
  },
  {
    id: uuidv4(),
    name: "Caramel Popcorn",
    calories: 175,
    description:
      "Crunchy air-popped popcorn with a delightful drizzle of caramel sauce.",
    instructions:
      "1. Pop popcorn and drizzle with caramel sauce. \n2. Toss to coat evenly. \n3. Enjoy your sweet and savory treat.",
    image: URL_to_image_7,
  },
  {
    id: uuidv4(),
    name: "Egg Salad Sandwich",
    calories: 325,
    description:
      "A classic egg salad sandwich made with hard-boiled eggs, mayo, and mustard, served on whole wheat bread.",
    instructions:
      "1. Make egg salad with hard-boiled eggs, mayo, and mustard. \n2. Spread on whole wheat bread. \n3. Assemble your sandwich and enjoy.",
    image: URL_to_image_8,
  },
  {
    id: uuidv4(),
    name: "Spinach and Artichoke Dip",
    calories: 275,
    description:
      "Creamy spinach and artichoke dip served with whole wheat pita chips for dipping.",
    instructions:
      "1. Warm up spinach and artichoke dip. \n2. Serve with whole wheat pita chips for a delicious snack.",
    image: URL_to_image_9,
  },
  {
    id: uuidv4(),
    name: "Chocolate Protein Shake",
    calories: 325,
    description:
      "A satisfying chocolate protein shake with protein powder, milk, banana, and cocoa powder.",
    instructions:
      "1. Blend protein powder, milk, banana, and cocoa powder until smooth. \n2. Add honey for extra sweetness if desired. \n3. Enjoy your protein shake.",
    image: URL_to_image_10,
  },
];
