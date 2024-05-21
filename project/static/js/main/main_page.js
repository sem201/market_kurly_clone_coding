/* main page - JS */

/* total product 변경*/
const total_product = document.getElementById('total_product');

const update_total_product=()=>{
    let total=0;
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='group']:checked");
    checkboxes.forEach((checkbox)=>{
        total += parseInt(checkbox.getAttribute('value'),10);
    })
    if(total !== 0){
        total_product.textContent=`총 ${total}건`;
    }
    else{
        total_product.textContent='총 136건';
    }
}

// /*카테고리 버튼 누를떄 필터 생성*/
// const skin_care_checkbox=document.getElementById("skin_care");
// const skin_care_filter_box=document.getElementById("skin_care_text");
// const filter_box=document.getElementById("filter_lst_container");
// const cre_skinfilter=()=>{
//     const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
//         if(skin_care_checkbox.checked){
//             skin_care_filter_box.style.display='flex';
//             skin_care_filter_box.style.alignItems='center';
//             filter_box.style.display='flex';
//             filter_box.style.alignItems='center';
//         }   
//         else{
//             skin_care_filter_box.style.display='none';
//         }
//         if(ischecked.length==0){
//             filter_box.style.display='none';
//         } 
//     }
// skin_care_checkbox.addEventListener('change',cre_skinfilter);
// skin_care_checkbox.addEventListener('change',update_total_product);

// const luxury_checkbox=document.getElementById("luxury");
// const luxury_filter_box=document.getElementById("luxury_text");
// const cre_luxuryfilter=()=>{
//     const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
//         if(luxury_checkbox.checked){
//             luxury_filter_box.style.display='flex';
//             luxury_filter_box.style.alignItems='center';
//             filter_box.style.display='flex';
//             filter_box.style.alignItems='center';
//         }  
//         else{
//             luxury_filter_box.style.display='none';
//         }
//         if(ischecked.length==0){
//             filter_box.style.display='none';
//         } 
//     }
// luxury_checkbox.addEventListener('change',cre_luxuryfilter);
// luxury_checkbox.addEventListener('change',update_total_product);

// const snack_checkbox=document.getElementById("snack");
// const snack_filter_box=document.getElementById("snack_text");
// const cre_snackfilter=()=>{
//     const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
//         if(snack_checkbox.checked){
//             snack_filter_box.style.display='flex';
//             snack_filter_box.style.alignItems='center';
//             filter_box.style.display='flex';
//             filter_box.style.alignItems='center';
//         }   
//         else{
//             snack_filter_box.style.display='none';
//         }
//         if(ischecked.length==0){
//             filter_box.style.display='none';
//         } 
//     }
// snack_checkbox.addEventListener('change',cre_snackfilter);
// snack_checkbox.addEventListener('change',update_total_product);

const filter_box = document.getElementById("filter_lst_container");
const skin_care_checkbox = document.getElementById("skin_care");
const skin_care_filter_box = document.getElementById("skin_care_text");
const luxury_checkbox = document.getElementById("luxury");
const luxury_filter_box = document.getElementById("luxury_text");
const snack_checkbox = document.getElementById("snack");
const snack_filter_box = document.getElementById("snack_text");




let arr = [];

const updateFilterBox = () => {
    filter_box.innerHTML = ''; 
    arr.forEach(filter => {
        filter_box.appendChild(filter.element);
        filter.element.style.display = 'flex';
        filter.element.style.alignItems = 'center';
    });

    if (arr.length === 0) {
        filter_box.style.display = 'none';
    } else {
        filter_box.style.display = 'flex';
        filter_box.style.alignItems = 'center';
    }
};

const insert_arr = (checkbox, filter_box_element) => {
    if (checkbox.checked) {
        arr.push({ checkbox, element: filter_box_element });
    } else {
        arr = arr.filter(filter => filter.checkbox !== checkbox);
        filter_box_element.style.display = 'none';
    }
    updateFilterBox();
    update_total_product();
};

/*초기화 버튼 눌렀을 때 체크 박스 삭제*/
const reset_btn= document.getElementById("reset");
const reset=()=>{
    const checkboxes=document.querySelectorAll("input[type='checkbox'][name='group']")
    checkboxes.forEach((checkbox)=>{
        checkbox.checked=false;
        }
    )
}
reset_btn.addEventListener('click',reset);
reset_btn.addEventListener('click',()=>insert_arr(skin_care_checkbox, skin_care_filter_box))
reset_btn.addEventListener('click',()=>insert_arr(luxury_checkbox, luxury_filter_box))
reset_btn.addEventListener('click',()=>insert_arr(snack_checkbox, snack_filter_box))
reset_btn.addEventListener('click',update_total_product);

/*x버튼 눌렀을 떄 카테고리 지우기*/
skin_care_checkbox.addEventListener('change', () => insert_arr(skin_care_checkbox, skin_care_filter_box));
luxury_checkbox.addEventListener('change', () => insert_arr(luxury_checkbox, luxury_filter_box));
snack_checkbox.addEventListener('change', () => insert_arr(snack_checkbox, snack_filter_box));

const del_skincare_btn = document.getElementById('skin_care_delbtn');
const category_skincare_check=document.getElementById("skin_care")
const delete_skincare_category=()=>{
    category_skincare_check.checked=false;
}
del_skincare_btn.addEventListener('click',delete_skincare_category);
del_skincare_btn.addEventListener('click',()=> insert_arr(skin_care_checkbox,skin_care_filter_box));

const del_luxury_btn = document.getElementById('luxury_delbtn');
const category_luxury_check=document.getElementById("luxury")
const delete_luxury_category=()=>{
    category_luxury_check.checked=false;
}
del_luxury_btn.addEventListener('click',delete_luxury_category);
del_luxury_btn.addEventListener('click',()=> insert_arr(luxury_checkbox,luxury_filter_box));

const del_snackbtn = document.getElementById('snack_delbtn');
const category_snack_check=document.getElementById("snack")
const delete_snack_category=()=>{
    category_snack_check.checked=false;
}
del_snackbtn.addEventListener('click',delete_snack_category);
del_snackbtn.addEventListener('click',()=> insert_arr(snack_checkbox,snack_filter_box));

