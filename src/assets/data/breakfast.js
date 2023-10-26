import URL_to_image_1 from "../images/breaksast/screenshot1.jpg";
import URL_to_image_2 from "../images/breaksast/Avocado-Toast-With-Eggs.jpg";
import URL_to_image_3 from "../images/breaksast/Greek-Yogurt.jpg";
import URL_to_image_4 from "../images/breaksast/Peanut-Butter-Banana-Smoothie.jpg";
import URL_to_image_5 from "../images/breaksast/breakfast-quinoa-bowl.jpg";
import URL_to_image_6 from "../images/breaksast/Protein-Pancakes.jpg";
import URL_to_image_7 from "../images/breaksast/Sweet Potato and Black Bean Hash.jpg";
import URL_to_image_8 from "../images/breaksast/pineapple-cottage-cheese-ambrosia.jpg";
import URL_to_image_9 from "../images/breaksast/pinachAndFetaOmelette.jpg";
import URL_to_image_10 from "../images/breaksast/high-protein-breakfast-burritos.jpg";
import { v4 as uuidv4 } from "uuid";

export const recipts = [
  {
    id: uuidv4(),
    name: "Protein-Packed Oatmeal",
    calories: 450,
    description: "A hearty and protein-rich breakfast to kickstart your day.",
    instructions:
      "1. Cook 1/2 cup of rolled oats in 1 cup of milk or water. \n2. Stir in 1 scoop of protein powder. \n3. Top with sliced bananas, nuts, and a drizzle of honey.",
    image: URL_to_image_1,
  },
  {
    id: uuidv4(),
    name: "Avocado and Egg Toast",
    calories: 400,
    description:
      "A delicious combination of creamy avocado and protein-packed eggs on whole-grain toast.",
    instructions:
      "1. Toast 2 slices of whole-grain bread. \n2. Mash 1 avocado and spread it on the toast. \n3. Top with poached or fried eggs and a sprinkle of salt and pepper.",
    image: URL_to_image_2,
  },
  {
    id: uuidv4(),
    name: "Greek Yogurt Parfait",
    calories: 350,
    description:
      "A creamy and fruity parfait packed with protein and essential nutrients.",
    instructions:
      "1. Layer Greek yogurt with mixed berries and granola in a glass. \n2. Repeat the layers. \n3. Drizzle with honey and serve.",
    image: URL_to_image_3,
  },
  {
    id: uuidv4(),
    name: "Peanut Butter and Banana Smoothie",
    calories: 500,
    description:
      "A satisfying smoothie with the rich flavor of peanut butter and the sweetness of bananas.",
    instructions:
      "1. Blend 1 banana, 2 tablespoons of peanut butter, 1 cup of milk, and ice cubes. \n2. Add honey for sweetness if desired.",
    image: URL_to_image_4,
  },
  {
    id: uuidv4(),
    name: "Quinoa Breakfast Bowl",
    calories: 420,
    description:
      "A protein-packed quinoa bowl with fresh berries and a touch of maple syrup.",
    instructions:
      "1. Cook 1/2 cup of quinoa with 1 cup of water. \n2. Top with sliced almonds, fresh berries, and a drizzle of maple syrup.",
    image: URL_to_image_5,
  },
  {
    id: uuidv4(),
    name: "Protein Pancakes",
    calories: 480,
    description:
      "Fluffy and protein-rich pancakes for a delightful morning meal.",
    instructions:
      "1. Mix 1 scoop of protein powder, 1/2 cup of oats, 1/2 cup of Greek yogurt, and 1 egg. \n2. Cook like regular pancakes and serve with fruit.",
    image: URL_to_image_6,
  },
  {
    id: uuidv4(),
    name: "Sweet Potato and Black Bean Hash",
    calories: 420,
    description:
      "A savory hash with sweet potatoes, black beans, and perfectly poached eggs.",
    instructions:
      "1. Sauté diced sweet potatoes, black beans, and onions in a pan. \n2. Season with cumin, paprika, and salt. \n3. Top with poached eggs.",
    image: URL_to_image_7,
  },
  {
    id: uuidv4(),
    name: "Cottage Cheese and Pineapple Bowl",
    calories: 350,
    description:
      "A simple and nutritious bowl with cottage cheese and tropical pineapple.",
    instructions:
      "1. Combine cottage cheese, diced pineapple, and a sprinkle of cinnamon in a bowl. \n2. Enjoy as a creamy and sweet breakfast.",
    image: URL_to_image_8,
  },
  {
    id: uuidv4(),
    name: "Spinach and Feta Omelette",
    calories: 380,
    description:
      "An omelette with the goodness of spinach, feta cheese, and tomatoes.",
    instructions:
      "1. Whisk 2 eggs and pour into a hot skillet. \n2. Add spinach, feta cheese, and diced tomatoes. \n3. Fold the omelette and cook until set.",
    image: URL_to_image_9,
  },
  {
    id: uuidv4(),
    name: "High-Protein Breakfast Burrito",
    calories: 470,
    description:
      "A hearty breakfast burrito with scrambled eggs, turkey sausage, and cheese.",
    instructions:
      "1. Scramble eggs with diced bell peppers and onions. \n2. Add cooked turkey sausage and cheese. \n3. Wrap in a tortilla and enjoy.",
    image: URL_to_image_10,
  },
];
