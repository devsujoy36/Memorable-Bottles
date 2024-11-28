import PropTypes from "prop-types";

const Bottle = ({ bottle, handleAddToCart }) => {
    const { id, name, price, img, rating } = bottle;
    return (
        <div key={id} className="p-2 rounded-md hover:shadow-lg flex flex-col gap-2 transition hover:-translate-y-1 border font-semibold ">
            <figure className="  rounded-md border">
                <img className="w-full rounded-md" src={img} alt="" />
            </figure>
            <div className="p-2">
                <h1>Name: {name}</h1>
                <h1>Price: ${price}</h1>
                <h4>Ratting: {rating}</h4>
                <div className="mt-2 flex justify-center">
                    <button onClick={() => { handleAddToCart(bottle) }} className="border shadow-lg px-4 py-2 rounded-lg hover:bg-emerald-400 active:scale-95 transition-all"> Purchase</button>
                </div>
            </div>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;