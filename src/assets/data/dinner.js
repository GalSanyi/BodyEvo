import URL_to_image_1 from "../images/dinner/Grilled Chicken and Quinoa.jpg";
import URL_to_image_2 from "../images/dinner/Spaghetti Bolognese.jpg";
import URL_to_image_3 from "../images/dinner/Salmon with Brown Rice and Broccoli.jpg";
import URL_to_image_4 from "../images/dinner/Beef and Vegetable Stir-Fry.jpg";
import URL_to_image_5 from "../images/dinner/Baked Potatoes with Chili.jpg";
import URL_to_image_6 from "../images/dinner/Chicken and Rice Casserole.jpg";
import URL_to_image_7 from "../images/dinner/Vegetarian Lasagna.jpg";
import URL_to_image_8 from "../images/dinner/Sweet and Sour Tofu with Rice.jpg";
import URL_to_image_9 from "../images/dinner/Beef and Bean Burritos.jpg";
import URL_to_image_10 from "../images/dinner/Mashed Potatoes and Meatloaf.jpg";

import { v4 as uuidv4 } from "uuid";
export const recipes = [
  {
    id: uuidv4(),
    name: "Grilled Chicken and Quinoa",
    calories: 525,
    description:
      "A balanced dinner with grilled chicken, quinoa, steamed vegetables, and a drizzle of olive oil.",
    instructions:
      "1. Grill chicken breast and prepare quinoa. \n2. Steam your choice of vegetables. \n3. Drizzle with olive oil and serve.",
    image: URL_to_image_1,
  },
  {
    id: uuidv4(),
    name: "Spaghetti Bolognese",
    calories: 625,
    description:
      "A hearty pasta dish with whole wheat spaghetti, lean ground beef, tomato sauce, and grated Parmesan cheese.",
    instructions:
      "1. Cook whole wheat spaghetti. \n2. Prepare a bolognese sauce with lean ground beef and tomato sauce. \n3. Top the pasta with the sauce and Parmesan cheese.",
    image: URL_to_image_2,
  },
  {
    id: uuidv4(),
    name: "Salmon with Brown Rice and Broccoli",
    calories: 575,
    description:
      "A nutritious dinner featuring baked or grilled salmon, brown rice, steamed broccoli, and a zesty lemon-butter sauce.",
    instructions:
      "1. Bake or grill salmon and cook brown rice. \n2. Steam broccoli. \n3. Drizzle with lemon-butter sauce and serve.",
    image: URL_to_image_3,
  },
  {
    id: uuidv4(),
    name: "Beef and Vegetable Stir-Fry",
    calories: 575,
    description:
      "A flavorful stir-fry with sliced beef, mixed vegetables, and a savory stir-fry sauce served over brown rice.",
    instructions:
      "1. Stir-fry sliced beef and mixed vegetables. \n2. Add a savory stir-fry sauce. \n3. Serve over brown rice and enjoy.",
    image: URL_to_image_4,
  },
  {
    id: uuidv4(),
    name: "Baked Potatoes with Chili",
    calories: 625,
    description:
      "Loaded baked potatoes with chili (ground beef or plant-based), cheese, and a dollop of sour cream.",
    instructions:
      "1. Bake potatoes and top with your choice of chili and cheese. \n2. Add a dollop of sour cream. \n3. Enjoy your hearty dinner.",
    image: URL_to_image_5,
  },
  {
    id: uuidv4(),
    name: "Chicken and Rice Casserole",
    calories: 625,
    description:
      "A comforting casserole with baked chicken thighs, rice, mixed vegetables, and a creamy sauce.",
    instructions:
      "1. Bake chicken thighs and prepare rice. \n2. Mix with your choice of mixed vegetables. \n3. Pour creamy sauce and bake until bubbly.",
    image: URL_to_image_6,
  },
  {
    id: uuidv4(),
    name: "Vegetarian Lasagna",
    calories: 525,
    description:
      "A vegetarian delight with layered lasagna featuring whole wheat noodles, ricotta cheese, spinach, and marinara sauce.",
    instructions:
      "1. Layer whole wheat noodles with ricotta cheese, spinach, and marinara sauce. \n2. Bake until bubbly and enjoy.",
    image: URL_to_image_7,
  },
  {
    id: uuidv4(),
    name: "Sweet and Sour Tofu with Rice",
    calories: 525,
    description:
      "A sweet and sour delight with crispy tofu, bell peppers, pineapple, and a flavorful sauce served with rice.",
    instructions:
      "1. Prepare crispy tofu and bell peppers. \n2. Add pineapple and a sweet and sour sauce. \n3. Serve with rice and savor the flavors.",
    image: URL_to_image_8,
  },
  {
    id: uuidv4(),
    name: "Beef and Bean Burritos",
    calories: 625,
    description:
      "Hearty beef and bean burritos wrapped in whole wheat tortillas, topped with cheese and salsa.",
    instructions:
      "1. Prepare ground beef and black beans. \n2. Fill whole wheat tortillas with the mixture. \n3. Top with cheese and salsa. \n4. Roll up and enjoy your burritos.",
    image: URL_to_image_9,
  },
  {
    id: uuidv4(),
    name: "Mashed Potatoes and Meatloaf",
    calories: 625,
    description:
      "A comforting dinner with homemade meatloaf, creamy mashed potatoes, green beans, and savory gravy.",
    instructions:
      "1. Make meatloaf and creamy mashed potatoes. \n2. Serve with green beans and top with savory gravy. \n3. Enjoy your hearty meal.",
    image: URL_to_image_10,
  },
];
