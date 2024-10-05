import axios from 'axios'
export const catalog = [
    {
        "title" : "Emerald",
        "image" : "/images/emeralds.jpeg",
        "price" : 300,
        "category" : ["Precious", "All"],
        "#id": "0"
    },
    {
        "title" : "Quartz",
        "image" : "/images/quartz.png",
        "price" : 24.99,
        "category" : ["Non-precious", "All"],
        "#id": "1"
    },
    {
        "title" : "Pearl",
        "image" : "/images/pearls.jpeg",
        "price" : 79.99,
        "category" : ["Semi-Precious", "All"],
        "#id": "2"
    },
    {
        "title" : "Topaz",
        "image" : "/images/topaz.png",
        "price" : 32.99,
        "category" : ["Synthetic", "All"],
        "#id": "3"
    }, 
    {
        "title" : "Rock's NFT",
        "image" : "/images/nft.jpeg",
        "price" : .05,
        "category" : ["NFT", "All"],
        "#id": "4"
    },
    {
        "title" : "Artpiece",
        "image" : "/images/art.jpeg",
        "price" : 39.97,
        "category" : ["Art", "All"],
        "#id": "6"
    },
    {
        "title" : "Dress",
        "image" : "/images/apparel.jpeg",
        "price" : 79.99,
        "category" : ["Apparel", "All"],
        "#id": "7"
    },
    {
        "title" : "Mug",
        "image" : "/images/merchandise.jpeg",
        "price" : 4.99,
        "category" : ["Merchandise", "All"],
        "#id": "8"
    },
    {
        "title" : "Our eBook",
        "image" : "/images/books.jpeg",
        "price" : 4.99,
        "category" : ["Books", "All"],
        "#id": "9"
    },
    {
        "title" : "Coffee Bag",
        "image" : "/images/coffee.jpeg",
        "price" : 14.97,
        "category" : ["Coffee", "All"],
        "#id": "10"
    },
    {
        "title" : "Gem's Tarot",
        "image" : "/images/collectables.jpeg",
        "price" : 9.99,
        "category" : ["Collectables", "All"],
        "#id": "11"
    },
    {
        "title" : "Candles",
        "image" : "/images/candles.jpeg",
        "price" : 7.97,
        "category" : ["Merchandise", "All"]
    },
    {
        "title" : "Digital Art",
        "image" : "/images/art2.jpeg",
         "price" : 36.99,
         "category" : ["Art", "All"]
    },
    {
        "title" : "Opal",
        "image" : "/images/opal.webp",
        "price" : 50.00,
        "category" : ["Semi-Precious", "All"]
    },
    {
        "title" : "Crystal",
        "image" : "/images/crystal.jpg",
        "price" : 19.99,
        "category" : ["Non-precious", "All"]
    },
    {
        "title" : "Jade Buddha",
        "image" : "/images/uglybudda.jpeg",
        "price" : 49.99,
        "category" : ["Merchandise", "All"]
    },
    {
        "title" : "Opal Hoodie",
        "image" : "/images/hoodie.jpeg",
        "price" : 39.99,
        "category" : ["Apparel", "All"]
    }
    
];



class DataService {
    async getProducts() {
        let response = await axios.get("http://127.0.0.1:5000/api/products");
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }
}

export const categories = [ "Non-precious", "Semi-Precious", "Precious", "Synthetic", "NFT", "Art", "Apparel", "Merchandise", "Books", "Coffee", "Membership Plans"]
export default DataService;
