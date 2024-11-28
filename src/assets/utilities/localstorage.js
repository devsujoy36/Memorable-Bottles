// local storage e cart nam e kono data ache kina ta cheak korte hbe 
// jodi thake tahole setake json.parse er sahajje parse korte hobe 
// ar na thakle emty array [] return korte hobe
const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

// cart ke localstorage e save korte hobe
const saveCartToLS = (cart) =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}


//erpor localstorage e add korar jonno id push kora
//ebong localstorage e cart ti save kora
const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLS(cart)
}



const removeFromLS = (id) =>{
    const cart = getStoredCart();
    // removing evry id 
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining)
}


export {addToLS , getStoredCart, removeFromLS}