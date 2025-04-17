const fashionData = [
  {
    id: 1,
    img: require("../assets/fashion/fashion (1).jpg"),
    title: "Georgette Saree",
    price: 3999
  },
  {
    id: 2,
    img: require("../assets/fashion/fashion (2).jpg"),
    title: "Silk Saree",
    price: 5499
  },
  {
    id: 3,
    img: require("../assets/fashion/fashion (3).jpg"),
    title: "Cotton Saree",
    price: 2999
  },
  {
    id: 4,
    img: require("../assets/fashion/fashion (4).jpg"),
    title: "Chiffon Saree",
    price: 6999
  },
  {
    id: 5,
    img: require("../assets/fashion/fashion (5).jpg"),
    title: "Banarasi Saree",
    price: 10999
  },
  // Auto-generated from id 6 to 85
  ...Array.from({ length: 80 }, (_, i) => {
    const id = 6 + i;
    return {
      id,
      img: require(`../assets/fashion/fashion (${id}).jpg`),
      title: `Fashion Saree ${id}`,
      price: Math.floor(Math.random() * 100000) + 2999
    };
  })
];

export default fashionData;
