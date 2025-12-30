
let   items =[
    {
        id:1,
        image:"page/images/1.jpg",
        company_name:'Carlton london',
        item_name:"Rhodium-plated CZ floral studs",
        current_price:606,
        original_price:1045,
        discount:42,
        return_period:14,
        dilvery_date:'10 Oct 2025',
        rating:{
            star:4.5,
           count: 1400,
        },
    },
        {
        id:2,
        image:"page/images/2.jpg",
        company_name:'CUKOO',
        item_name:"Women Padded Halter Neck Swimming Dress",
        current_price:1507,
        original_price:2599,
        dilvery_date:'17 sept 2025',
        discount:42,
        return_period:3,

        rating:{
            star:4.3,
           count: 24,
        },
    },
        {
        id:3,
        image:"page/images/3.jpg",
        company_name:'NUEVOSDAMAS',
        item_name:'Women Red & White Printed A-Line Knee-Length Skirts',
        current_price:495,
        original_price:1600,
        discount:70,
        return_period:7,
        dilvery_date:'10 Dec 2025',
        rating:{
            star:4.1,
           count: 239,
        },
    },
        {
        id:4,
        image:"page/images/4.jpg",
        company_name:'ADIDAS',
        item_name:"PAKISTAN Cricket ODI Jersey",
        current_price:999,
        original_price:999,
        discount:0,

        return_period:2,
        dilvery_date:'14 Aug 2025',
        rating:{
            star:5.0,
           count: 10,
        },
    },
        {
        id:5,
        image:"page/images/5.jpg",
        company_name:'Roadster',
        item_name:'Pure Cotton T-shirt',
        current_price:490,
        original_price:1399,
        discount:70,

        return_period:10,
        dilvery_date:'7 NOv 2025',
        rating:{
            star:4.2,
           count: 3500,
        },
    },
        {
        id:6,
        image:"page/images/6.jpg",
        company_name:'Nike',
        item_name:'Men ReactX Running Shoes',
        current_price:14995,
        original_price:14995,
        discount:0,

        return_period:4,
        dilvery_date:'16 JUN 2025',
        rating:{
            star:4.5,
           count: 2000,
        },
    },
     {
        id:7,
        image:"page/images/7.jpg",
        company_name:'The pakistan Garage Co',
        item_name:'Men Slim Fit Regular Shorts',
        current_price:639,
        original_price:1599,
        discount:60,

        return_period:9,
        dilvery_date:'10 APIRL 2026',
        rating:{
            star:4.2,
           count: 380,
        },
    },
 
   {
        id:8,
        image:"page/images/8.jpg",
        company_name:'Nivea',
        item_name:"Men Fresh Deodrant 150ml",
        current_price:150,
        original_price:300,
        discount:50,
        
        return_period:5,
        dilvery_date:'6 May 2026',
        rating:{
            star:4.2,
           count: 5200,
        },
    },
     
];

function displayitemsonpage(){
    let itemscontainerelement=document.querySelector('.items_container');
  if(!itemscontainerelement){
        return;
    }
    let innerhtml='';
items.forEach(item => {
      innerhtml +=
                 `<div class="item_container">
                <img class="product_image"  src= "${item.image}" alt="item_images">
                <div class="rating">
                ${item.rating.star} ⭐| ${item.rating.count}
                </div>
                <div class="company_name">${item.company_name}</div>
                <div class="item_name">${item.item_name}</div>
                <div class="price">
                    <span class="current_price">Rs ${item.current_price}</span>
                    <span class="original_price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount}% OFF)</span>
                </div>
                <button class="btn_add_bag" onclick="addtobag(${item.id})">Add to Bag </button>
            </div>`;

 });

 itemscontainerelement.innerHTML=innerhtml;
}

 let addtobagelements=document.querySelectorAll('.bag_item_count');

 let bagitems;
 

 function addtobag(itemid){
        bagitems.push(itemid);
        localStorage.setItem('bagitems',JSON.stringify(bagitems),);

       bagcountelement(); 
 }
 
 function bagcountelement(){
   
    if(bagitems.length>0){
        addtobagelements.forEach(element => {
            element.innerHTML=bagitems.length;
            
        });

    }
    else{
        addtobagelements.forEach(element => {
            element.innerText=0;
        });
        
        };
        
    }

   
    function onload1(){

 let bagitemstr= localStorage.getItem('bagitems');
 bagitems=bagitemstr ? JSON.parse(bagitemstr):[];
  displayitemsonpage();
  bagcountelement();
 }
    onload1();

