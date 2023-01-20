import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image:
        "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0127_9b29d079-aac3-46da-84b8-91b60243bdd7_765x.jpg?v=1661004175",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220420/SQg7/625f0c0aaeb26921af2bacdf/-473Wx593H-469131589-red-MODEL.jpg",
      price: 250,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image:
        "https://cdn.shopify.com/s/files/1/0261/7393/1605/products/SPORTONemanja00762_1728x.jpg?v=1667639985",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image:
        "https://getketchadmin.getketch.com/product/8905404323927/660/HLTR004648_1.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Anarkali Kurtha",
      slug: "anarkali kurtha",
      category: "kurtha",
      image:
        "https://i.pinimg.com/736x/33/02/d7/3302d727f244c027547edab3ac5e64ef.jpg",
      price: 165,
      countInStock: 50,
      brand: "Avasa",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: " kids Fashion Wear",
      slug: " kids fashion wear",
      category: "kids",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210921/qmEx/6149cd9baeb269a2689bef80/-473Wx593H-462989154-multi-MODEL.jpg",
      price: 185,
      countInStock: 5,
      brand: "Avasa",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "LangaVoni for Women",
      slug: "langavoni",
      category: "langa",
      image:
        "https://i.etsystatic.com/35257410/r/il/bf590c/4222891858/il_fullxfull.4222891858_an0k.jpg",
      price: 205,
      countInStock: 5,
      brand: "Avasa",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Jeans for Women",
      slug: "jeans for women",
      category: "jeans",
      image:
        "https://i.pinimg.com/736x/04/42/60/044260a4770aa701d1ae8ec167eb3513.jpg",
      price: 505,
      countInStock: 5,
      brand: "Avasa",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
