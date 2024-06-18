/* product detail page - JS */
const price =document.getElementById('discount_price').textContent;

console.log(parseInt(price.replace(/[^0-9]/g,''),10));
let num_product=0;
const decrease_num_product=()=>{
    if (num_product>0){
        num_product -= 1;
    }
    document.getElementById('ss').textContent=`${num_product}`;
}
const increase_num_product=()=>{
    num_product += 1;
    document.getElementById('ss').textContent=`${num_product}`;
}
const update_total_price=()=>{
    let total_price = parseInt(price.replace(/[^0-9]/g,''),10)*num_product;
    document.getElementById('product_total_price').innerHTML=`${total_price}원`;
}

const increase_btn= document.getElementById('increase_btn')
const decrease_btn= document.getElementById('decrease_btn')

increase_btn.addEventListener('click',increase_num_product);
increase_btn.addEventListener('click',update_total_price);
decrease_btn.addEventListener('click',decrease_num_product);
decrease_btn.addEventListener('click',update_total_price);


