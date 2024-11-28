import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./bottle";
import { addToLS, getStoredCart, removeFromLS } from "../../assets/utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    // load cart from localStorage 
    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart()
            const savedCart = [];
            // console.log(storedCart);

            for (const id of storedCart) {
                // console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
                setCart(savedCart)
            }
        }
    }, [bottles])



    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle.id]
        setCart(newCart)
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLS(id)
    }

    return (
        <div className="m-5">
            <h2 className="text-center font-semibold text-2xl mt-5">Bottles Here: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 mx-4">
                {bottles.map(bottle => (
                    <Bottle bottle={bottle} key={bottle.id} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default Bottles;