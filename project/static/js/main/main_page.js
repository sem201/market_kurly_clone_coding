/* main page - JS */
/*초기화 버튼 눌렀을 때 체크 박스 삭제*/

console.log('연결?')
/* total product 변경*/
const total_product = document.getElementById('total_product');

const update_total_product=()=>{
    let total=0;
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='group']:checked");
    checkboxes.forEach((checkbox)=>{
        total += parseInt(checkbox.getAttribute('value'),10);
    })
    total_product.textContent=`총 ${total}건`;
}

const reset_btn= document.getElementById("reset");
const reset=()=>{
    const checkboxes=document.querySelectorAll("input[type='checkbox'][name='group']")
    checkboxes.forEach((checkbox)=>{
        checkbox.checked=false;
        }
    )
}
reset_btn.addEventListener('click',reset);
reset_btn.addEventListener('click',update_total_product);

/*카테고리 버튼 누를떄 필터 생성*/
const skin_care_checkbox=document.getElementById("skin_care");
const skin_care_filter_box=document.getElementById("skin_care_text");
const filter_box=document.getElementById("filter_lst_container");
const cre_skinfilter=()=>{
    const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
        if(skin_care_checkbox.checked){
            skin_care_filter_box.style.display='flex';
            skin_care_filter_box.style.alignItems='center';
            filter_box.style.display='flex';
            filter_box.style.alignItems='center';
        }   
        else{
            skin_care_filter_box.style.display='none';
        }
        if(ischecked.length==0){
            filter_box.style.display='none';
        } 
    }
skin_care_checkbox.addEventListener('change',cre_skinfilter);
skin_care_checkbox.addEventListener('change',update_total_product);

const luxury_checkbox=document.getElementById("luxury");
const luxury_filter_box=document.getElementById("luxury_text");
const cre_luxuryfilter=()=>{
    const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
        if(luxury_checkbox.checked){
            luxury_filter_box.style.display='flex';
            luxury_filter_box.style.alignItems='center';
            filter_box.style.display='flex';
            filter_box.style.alignItems='center';
        }  
        else{
            luxury_filter_box.style.display='none';
        }
        if(ischecked.length==0){
            filter_box.style.display='none';
        } 
    }
luxury_checkbox.addEventListener('change',cre_luxuryfilter);
luxury_checkbox.addEventListener('change',update_total_product);

const snack_checkbox=document.getElementById("snack");
const snack_filter_box=document.getElementById("snack_text");
const cre_snackfilter=()=>{
    const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
        if(snack_checkbox.checked){
            snack_filter_box.style.display='flex';
            snack_filter_box.style.alignItems='center';
            filter_box.style.display='flex';
            filter_box.style.alignItems='center';
        }   
        else{
            snack_filter_box.style.display='none';
        }
        if(ischecked.length==0){
            console.log("이거 되는거임?")
            filter_box.style.display='none';
        } 
    }
snack_checkbox.addEventListener('change',cre_snackfilter);
snack_checkbox.addEventListener('change',update_total_product);

/*x버튼 눌렀을 떄 카테고리 지우기*/
const filter_skincarebtn=document.getElementById("skin_care_delbtn");
const category_skincare_delete=document.getElementById("skin_care")
const delete_skincarefilter=()=>{
    category_skincare_delete.checked=false;
}
filter_skincarebtn.addEventListener('click',delete_skincarefilter);
filter_skincarebtn.addEventListener('click',cre_skinfilter);
filter_skincarebtn.addEventListener('click',update_total_product);

const filter_luxurybtn=document.getElementById("luxury_delbtn");
const category_luxury_delete=document.getElementById("luxury")
const delete_luxuryfilter=()=>{
    category_luxury_delete.checked=false;
}
filter_luxurybtn.addEventListener('click',delete_luxuryfilter);
filter_luxurybtn.addEventListener('click',cre_luxuryfilter);
filter_luxurybtn.addEventListener('click',update_total_product);

const filter_snackbtn=document.getElementById("snack_delbtn");
const category_snack_delete=document.getElementById("snack")
const delete_snackfilter=()=>{
    category_snack_delete.checked=false;
}
filter_snackbtn.addEventListener('click',delete_snackfilter);
filter_snackbtn.addEventListener('click',cre_snackfilter);
filter_snackbtn.addEventListener('click',update_total_product);



