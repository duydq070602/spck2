



let menu = ["Hạ Long","Đà Nẵng","Phú Quốc","Nha Trang","Vũng Tàu",];
function nhap(){
  let x=0;
  let y=0;
  let a = confirm("Bạn đã có kế hoạch đi du lịch?");
  if(a == true){
    let c = prompt("Bạn định đi đâu thế?");
      for(let i=0;i<=menu.length; i++) {
        if(c==menu[i]) {
          console.log(menu[i]);
          alert("Hãy xem những resort/hotel ở " + c + " bằng cách click vào BOOKING nhé!")
          x++;}
        }
      if(x==0){     
        menu.push(c) ;
        localStorage.setItem("menu", JSON.stringify(menu));
        alert("Địa điểm này chưa có trong dữ liệu. Cảm ơn bạn đã bổ sung!");
        } 
      }
  else{
    let b = prompt("Hãy để tôi gợi ý cho bạn: "+ menu + "... Bạn đã chọn được chưa?");
    for(let i=0;i<=menu.length; i++) {
       if(b==menu[i]) {
        console.log(menu[i]);
        alert("Hãy xem những resort/hotel ở " + b + " bằng cách click vào BOOKING nhé!");
        y++;
      }
    } 
    if(y==0){
      menu.push(c) ;
      localStorage.setItem("menu", JSON.stringify(menu));
      alert("Địa điểm này chưa có trong dữ liệu. Cảm ơn bạn đã bổ sung!");
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
        price: "1.500.000đ/night",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Resort...",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Khach san...",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/hotel.jpg",
      },
  
      {
        name: "Resort",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/",
      },
  
      {
        name: "",
        price: "780.000đ - 1.470.000đ",
        image: "assets/img/",
      },
  
      {
        name: "",
        price: "780.000đ - 1.670.000đ",
        image: "assets/img/",
      },
  
      {
        name: "",
        price: "780.000đ - 1.670.000đ",
        image: "",
      },
  
      {
        name: "",
        price: "780.000đ - 1.670.000đ",
        image: "",
      },
      {
        name: "",
        price: "780.000đ - 1.670.000đ",
        image: "",
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
    btnAdd.innerText = "Dat khach san";
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



