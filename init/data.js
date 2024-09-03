const sampleProducts = [
    {
        "name": "Broccoli",
        "image": {
            "url": "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1155&h=1528",
            "filename": "productimage"
        },
        "price": 180,
        "quantity": 7,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Almond Milk",
        "image": {
            "url": "https://i0.wp.com/stephanieleenutrition.com/wp-content/uploads/2022/06/Untitled-design-8-e1654793763569.png?fit=1887%2C1260&ssl=1",
            "filename": "productimage"
        },
        "price": 180,
        "quantity": 8,
        "category": "vegan",
        "unit": "litre"
    },
    {
        "name": "Cheddar Cheese",
        "image": {
            "url": "https://www.tasteofhome.com/wp-content/uploads/2022/09/GettyImages-470340853.jpg",
            "filename": "productimage"
        },
        "price": 350,
        "quantity": 5,
        "category": "dairy",
        "unit": "kg"
    },
    {
        "name": "Carrots",
        "image": {
            "url": "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
            "filename": "productimage"
        },
        "price": 60,
        "quantity": 10,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Spinach",
        "image": {
            "url": "https://www.agrifarming.in/wp-content/uploads/Spinach-Farming-Guide5.jpg",
            "filename": "productimage"
        },
        "price": 80,
        "quantity": 6,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Cow's Milk",
        "image": {
            "url": "https://www.parents.com/thmb/qKThoOlGAzJwGZ-moTTGQVFRvhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grass-Fed-vs-Organic-Milk-9fff118133c14e578c2379ed86888817.jpg",
            "filename": "productimage"
        },
        "price": 50,
        "quantity": 10,
        "category": "dairy",
        "unit": "litre"
    },
    {
        "name": "Tofu",
        "image": {
            "url": "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/Tofu-v-2-resized.jpg",
            "filename": "productimage"
        },
        "price": 220,
        "quantity": 7,
        "category": "vegan",
        "unit": "kg"
    },
    {
        "name": "Lettuce",
        "image": {
            "url": "https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-01/hgic_veg_crop_letttuce.jpg?itok=VNyJj3LI",
            "filename": "productimage"
        },
        "price": 90,
        "quantity": 8,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Greek Yogurt",
        "image": {
            "url": "https://media.post.rvohealth.io/wp-content/uploads/2021/10/fruit-berries-yogurt-732x549-thumbnail-732x549.jpg",
            "filename": "productimage"
        },
        "price": 270,
        "quantity": 5,
        "category": "dairy",
        "unit": "litre"
    },
    {
        "name": "Zucchini",
        "image": {
            "url": "https://cdn.britannica.com/96/138896-050-A640EBE8/Zucchini-vines.jpg",
            "filename": "productimage"
        },
        "price": 110,
        "quantity": 9,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Mushrooms",
        "image": {
            "url": "https://images.immediate.co.uk/production/volatile/sites/30/2023/08/Chestnut-mushrooms-a223a78.jpg?quality=90&resize=440,400",
            "filename": "productimage"
        },
        "price": 180,
        "quantity": 7,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Mozzarella Cheese",
        "image": {
            "url": "https://www.allrecipes.com/thmb/C3KiwuxOUCx5emB5zJhyGCUqzr8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-623211022-2000-7321665a5d394b9792acc073d0de4e9c.jpg",
            "filename": "productimage"
        },
        "price": 370,
        "quantity": 8,
        "category": "dairy",
        "unit": "kg"
    },
    {
        "name": "Avocado",
        "image": {
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaNXdVT-4kYnxgSUsWb-bLCLMHpu2yUUU_g&s",
            "filename": "productimage"
        },
        "price": 240,
        "quantity": 9,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Coconut Milk",
        "price": 270,
        "quantity": 8,
        "category": "vegan",
        "unit": "litre"
    },
    {
        "name": "Butter",
        "price": 120,
        "quantity": 10,
        "category": "dairy",
        "unit": "kg"
    },
    {
        "name": "Bell Peppers",
        "price": 100,
        "quantity": 7,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Vegan Cheese",
        "price": 370,
        "quantity": 6,
        "category": "vegan",
        "unit": "kg"
    },
    {
        "name": "Cauliflower",
        "price": 80,
        "quantity": 5,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Yogurt",
        "price": 180,
        "quantity": 10,
        "category": "dairy",
        "unit": "litre"
    },
    {
        "name": "Tomatoes",
        "price": 50,
        "quantity": 8,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Oat Milk",
        "price": 250,
        "quantity": 9,
        "category": "vegan",
        "unit": "litre"
    },
    {
        "name": "Parmesan Cheese",
        "price": 400,
        "quantity": 7,
        "category": "dairy",
        "unit": "kg"
    },
    {
        "name": "Green Beans",
        "price": 90,
        "quantity": 6,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Rice Milk",
        "price": 260,
        "quantity": 5,
        "category": "vegan",
        "unit": "litre"
    },
    {
        "name": "Eggplant",
        "price": 60,
        "quantity": 9,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Red Cabbage",
        "price": 130,
        "quantity": 5,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Sweet Potatoes",
        "price": 90,
        "quantity": 8,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Blueberries",
        "price": 350,
        "quantity": 6,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Cottage Cheese",
        "price": 280,
        "quantity": 5,
        "category": "dairy",
        "unit": "kg"
    },
    {
        "name": "Radishes",
        "price": 70,
        "quantity": 9,
        "category": "vegetable",
        "unit": "kg"
    },
    {
        "name": "Feta Cheese",
        "price": 330,
        "quantity": 8,
        "category": "dairy",
        "unit": "kg"
    },
    {
        "name": "Pea Protein",
        "price": 400,
        "quantity": 6,
        "category": "vegan",
        "unit": "kg"
    },
    {
        "name": "Cream Cheese",
        "price": 270,
        "quantity": 10,
        "category": "dairy",
        "unit": "kg"
    },
    {
        "name": "Apples",
        "price": 120,
        "quantity": 6,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Bananas",
        "price": 60,
        "quantity": 9,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Oranges",
        "price": 80,
        "quantity": 7,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Grapes",
        "price": 150,
        "quantity": 8,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Mangoes",
        "price": 200,
        "quantity": 5,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Strawberries",
        "price": 300,
        "quantity": 6,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Blueberries",
        "price": 350,
        "quantity": 7,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Pineapples",
        "price": 180,
        "quantity": 9,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Kiwis",
        "price": 220,
        "quantity": 8,
        "category": "fruit",
        "unit": "kg"
    },
    {
        "name": "Watermelons",
        "price": 90,
        "quantity": 10,
        "category": "fruit",
        "unit": "kg"
    }
];


module.exports = { data: sampleProducts };