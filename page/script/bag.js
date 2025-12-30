let bagitemobject;
onload1();


function onload1(){
    loadbagitem();
    displaybagitems();
    displaybagsummary();
}

function displaybagsummary(){
  let bagsummaryelement=document.querySelector('.bag-summary');
  let totalitem=bagitemobject.length;
  let totalMRP=0;
  let totalDiscount=0;
  let finalAmount=0;

  bagitemobject.forEach(bagitem => {
    totalMRP+= bagitem.original_price;
    totalDiscount+= (bagitem.original_price - bagitem.current_price);
    finalAmount+= bagitem.current_price;
  });

  bagsummaryelement.innerHTML=`   <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalitem}) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalAmount}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
       `;
}

function loadbagitem(){
    console.log(bagitems);

bagitemobject=bagitems.map(itemid => {
        for(let i=0;i < items.length; i++){
            if(itemid==items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagitemobject);
}

 function displaybagitems() {
     
 
let containerelement=document.querySelector('.bag-items-container');


let innerhtml2='';
bagitemobject.forEach(bagitem => {
    innerhtml2 += generateitemshtml(bagitem);
    
});
 containerelement.innerHTML=innerhtml2;
 }

function removefrombag(itemid){
  bagitems= bagitems.filter((bagitemid=> bagitemid != itemid));
  localStorage.setItem('bagitems', JSON.stringify(bagitems)); 
  loadbagitem();
  displaybagitems();
  bagcountelement();
  displaybagsummary();
}


 function generateitemshtml(item){
  return  `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="page/images/${item.image}" alt="item_image">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company_name}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.dilvery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
          </div>
        `;
 }
