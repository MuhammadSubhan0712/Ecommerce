const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech",
        img:"https://www.shutterstock.com/image-photo/wireless-computer-mouse-isolated-on-260nw-1931658485.jpg"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung",
        img:"https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_640.jpg"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell",
        img:"https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkaXNwbGF5fGVufDB8fDB8fHww"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL",
        img:"https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple",
        img:"https://www.gizbot.com/img/2020/03/best-ultra-hd-screen-laptops-to-buy-in-india-1585652594.jpg"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike",
        img:"https://c4.wallpaperflare.com/wallpaper/838/532/887/shoes-nike-splashing-running-wallpaper-preview.jpg"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas",
        img:"https://w0.peakpx.com/wallpaper/308/955/HD-wallpaper-adidas-originals-shoes-sneakers-laptop-for-your-mobile-tablet-explore-adidas-originals-adidas-logo-adidas-iphone-adidas-for.jpg"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva",
        img:"https://images.pexels.com/photos/1504188/pexels-photo-1504188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks",
        img:"https://c1.wallpaperflare.com/preview/630/294/495/still-items-things-footwear.jpg"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland",
        img:"https://images.unsplash.com/photo-1542838686-ddebb563fef4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGltYmVybGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster",
        img:"https://icuracao.com/media/catalog/product/cache/ebc7fb90b21f5eb74aecbdd15a6003e6/2/_/2_06L-A30-BLSTJJBNT000_654c3a01a680a.jpg"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic",
        img:"https://www.panasonic.com/content/dam/pim/mi/en/NN/NN-CT6/NN-CT65MM/ast-1396072.jpg.pub.thumb.644.644.jpg"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG",
        img:"https://www.lg.com/levant_en/images/microsites/LG-Article-Air-Conditioner-Energy/LG-Article-Air-Conditioner-Energy-01-M.jpg"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson",
        img:"https://media.product.which.co.uk/prod/images/original/gm-9e2af951-aa01-4521-baac-7343910c5c1e-dyson-cordlessglide.png"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville",
        img:"https://cdn11.bigcommerce.com/s-dwrt3u9mku/images/stencil/1280x1280/products/5364/6369/LTA842PDB_PDP_HERO_Toast_1300px__78077.1699171211.jpg?c=2"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine",
        img:"https://s.turbifycdn.com/aah/yhst-172572239-9/moleskine-cahier-large-notebooks-5-x-8-25-set-of-3-62.jpg"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker",
        img:"https://5.imimg.com/data5/OJ/SJ/AT/SELLER-2238407/parker-pens-gift-sets-with-customization-500x500.jpg"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie",
        img:"https://images.hdsupplysolutions.com/image/upload/d_no_image.gif,f_auto,fl_lossy,h_600,q_auto,w_600/317067_V_Lg.jpg"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline",
        img:"https://m.media-amazon.com/images/I/71OaKZtyFkL.jpg"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren",
        img:"https://i.pinimg.com/originals/8a/cf/25/8acf259c74ca99d28c326578da88677d.jpg"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea",
        img:"https://www.ikea.com/at/en/images/products/alefjaell-office-chair-grann-golden-brown__0724709_pe734591_s5.jpg?f=s"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm",
        img:"https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture",
        img:"https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/97704-38-35-T145?fit=fit&wid=1200&hei=900"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder",
        img:"https://images.webfronts.com/cache/meitiqttveur.jpg"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn",
        img:"https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202415/0500/parkmore-reclaimed-wood-extending-dining-table-l.jpg"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam",
        img:"https://m.media-amazon.com/images/I/91D4w7aAJ7L._AC_UF894,1000_QL80_.jpg"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex",
        img:"https://reviewed-com-res.cloudinary.com/image/fetch/s--jGZjU4v6--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1634830853000/bowflexhero.jpg"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack",
        img:"https://res.cloudinary.com/iconfitness/image/upload/dpr_3.0,f_auto,q_auto,w_500/v1/site--1/NTL10423_gallerya-v2.png"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify",
        img:"https://5.imimg.com/data5/SELLER/Default/2020/11/LR/DS/AK/90951446/61xnzp-u0fl-ac-sl1500--500x500.jpg"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton",
        img:"https://cdn.mos.cms.futurecdn.net/fJwGGzqcCeSxjRQ47JPrV4-1200-80.jpg"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig",
        img:"https://cdn.thewirecutter.com/wp-content/uploads/2018/05/keurigmachines-lowres-9175.jpg?auto=webp&quality=75&crop=3:2&width=1024"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja",
        img:"https://www.foodandwine.com/thmb/ksWbA2kPvHMo3O-GWGupEfuuWMQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/QVC-Ninja-Dual-Basket-Air-Fryer-Deal-tout-696f8ec3771643f69bb781d7673b1e0a.jpg"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid",
        img:"https://www.kitchenaid.ca/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-KG25H1XER.tif?id=zc-ld1&fmt=jpg&dpr=off&fit=constrain,1&wid=300&hei=357"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnK8_WCe4LGe_uShiVLWZLK1_V531C4IOR4g&usqp=CAU"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch",
        img:"https://www.appliancesdirect.co.uk/files/images/apd/bosch-dish-freestanding-tile.jpg"
    }
];








const div = document.querySelector('#card');


// There I render all the following Items using "MAP()" method

const renderall = (btn)=>{
    div.innerHTML = "";  
    products.map((item) =>{
    div.innerHTML += `
    <div class="card bg-dark text-white" style="width: 18rem;">
    <img src="${item.img}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">Product Name: ${item.brand} ${item.name}</h5>
      <h5 class="card-title">Category: ${item.category} </h5>
      <p class="card-text">Price: ${item.price}</p>
      <a href="#" id="card-btn" class="btn btn-primary">Add to Cart</a>
    </div>
  </div> `
})
}
renderall();





// There I render only the following Items which user selected using "filter()" method

let filtereditems = (btn)=>{
    div.innerHTML = ''
console.log(btn.innerHTML);
let filtered = products.filter((item) =>{
    return item.category === 'Stationery'
}).map((item) =>{
    div.innerHTML += `
    <div class="card bg-dark text-white" style="width: 18rem;">
    <img src="${item.img}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">Product Name: ${item.brand} ${item.name}</h5>
      <h5 class="card-title">Category: ${item.category} </h5>
      <p class="card-text">Price: ${item.price}</p>
      <a href="#" id="card-btn" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>`
})
console.log(filtered);
}


