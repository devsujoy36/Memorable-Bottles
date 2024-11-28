
const Watch = ({ watch }) => {
    const { id, name, price, img } = watch;

    console.log(id);

    return (
        <div key={id} className="p-2 rounded-md shadow-lg flex flex-col gap-3 transition hover:-translate-y-2 border bg-emerald-500 text-white font-semibold">
            <figure className="w-full h-56 bg-black rounded-md">
                <img src={img} alt="" />
            </figure>
            <h1>Name: {name}</h1>
            <h1>Price: ${price}</h1>
            <button className="border shadow-lg px-4 py-2 rounded-lg hover:bg-emerald-400 active:scale-95 transition-all"> Add to Cart</button>
        </div>
    );
};

export default Watch;