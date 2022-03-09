const displayLocalStorageCart=()=>{
    const cart=getCart();
    for(const name in cart){
        displayProduct(name);
    }
}


const addItem=()=>{
    const nameField=document.getElementById('product-name');
    const name=nameField.value;

    if(!name){
    return;
    }
    //display in the ui
     displayProduct(name)


    //add to local storage

    addProductToCart(name)


   //clear
    nameField.value='';
}
const displayProduct=name=>{
    const ul=document.getElementById('products');
    const li=document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}
const getCart=()=>{
    const cart=localStorage.getItem('card');
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart);
    }
    else{
        cartObj={}
    }return cartObj;
}
const addProductToCart=name=>{
    const cart=getCart();
    cart [name]=1;
    const cartStringfied=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied);
}


displayLocalStorageCart()
