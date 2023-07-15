



let menu = ["Hạ Long","Đà Nẵng","Phú Quốc","Nha Trang","Vũng Tàu","Quy Nhơn","Cát Bà","Sầm Sơn"];
function nhap(){
  let a = confirm("Have you got a plan to travel?");
  if(a == true){
    let c = prompt("Where do you want to go?");
    for(let i=0;i<=menu.length; i++) {
      if(c==menu[i]) {
         let booking = document.getElementById("product");
         booking.scrollIntoView();
         alert("Book a place right now!");
        }
      else{
        menu.push(c) ;
        localStorage.setItem("menu", JSON.stringify(menu));
      }
    }
  }
  else{
    let d = confirm("Let us suggest some places for you: " + menu + ". Have you made a decision yet? ");
    if(d==true) {
      let booking = document.getElementById("product");
      booking.scrollIntoView();
      alert("Book a place right now!");
    }
    else{
      alert("Keep on searching!");
    }
}
}



  

var deadline = new Date("aug 15, 2023 15:37:25").getTime();
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);








let products = {
    data: [
      {
        name: "Central Luxury Hạ Long Hotel",
        price: "1.500.000đ",
        image: "assets/img/hotel.jpg",

      },
  
      {
        name: "Resort Ha Long",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Khach san Phu Quoc",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Resort Da Nang",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Resort Nha Trang",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Hotel Vung Tau",
        price: "780.000đ - 1.670.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Resort Quy Nhon",
        price: "780.000đ - 1.670.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Hotel Phu Quoc",
        price: "780.000đ - 1.670.000đ",
        image: "assets/img/hotel.jpg",
      },
      {
        name: "",
        price: "780.000đ - 1.670.000đ",
        image: "assets/img/hotel.jpg",
      },
  
    ],
  };
  
  for (let items of products.data) {
    let card = document.createElement("div");
    card.classList.add("card");
  
    let imgContainer = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", items.image);
  
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let name = document.createElement("b");
    name.innerText = items.name;
  
    let price = document.createElement("p");
    price.innerHTML = "<b>Price: </b>" + items.price;
  
    card.appendChild(name);
    card.appendChild(price);

    let btnAdd = document.createElement("button");
    btnAdd.innerText = "Book now";
    btnAdd.classList.add("btn", "btn-outline-info", "btn1"); 
    console.log(btnAdd);
    card.appendChild(btnAdd);
    document.getElementById("product").appendChild(card);
  }

  for (let i of products.data){
    let product = JSON.parse(localStorage.product)
    product.push({
        name: items.name,
        price: items.price , 
        images: items.image,
    })

    localStorage.setItem("product", JSON.stringify(product));
}


const addToCart = () => {
    
}

let r = document.getElementById("comment");
let bc = document.getElementById("send");
bc.addEventListener("click", (e) => {
  let user = JSON.parse(localStorage.user)
  user.push({
   
  })
  localStorage.setItem("feedback", JSON.stringify(bc));
})
