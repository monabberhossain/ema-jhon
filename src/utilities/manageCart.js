const addToLS = id => {
    
    // get the shopping cart
    let shoppingCart = getCartStatus();

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = +quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
}

const getCartStatus = () => {

    let shoppingCart = {};

    // get the shopping cart
    const cartStatus = localStorage.getItem('shopping-cart');
    if(cartStatus){
        shoppingCart = JSON.parse(cartStatus);
    }

    return shoppingCart;
}

const removeFromLS = id => {
    const cartStatus = localStorage.getItem('shopping-cart');
    if(cartStatus){
        const shoppingCart = JSON.parse(cartStatus);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {addToLS, getCartStatus, removeFromLS};