import PropTypes from 'prop-types'


const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2 className="text-center font-semibold text-2xl mb-5">Cart Here: {cart.length}</h2>
            <div id="cart-container" className="flex justify-center items-center gap-2 m-6 p-2 flex-wrap">
                {
                    cart.map(bottle => <div key={bottle.id} className='relative border'>
                        <img className="w-[100px]" src={bottle.img}></img>
                        <button className='absolute top-0 right-0 bg-red-500 text-xs px-2 py-1 rounded-md hover:bg-red-400 active:scale-95 transition -m-2' onClick={() => { handleRemoveFromCart(bottle.id) }}>Remove</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;