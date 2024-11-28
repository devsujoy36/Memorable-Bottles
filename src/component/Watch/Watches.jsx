import { useState } from "react";
import { useEffect } from "react";
import Watch from "./Watch";

const Watches = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json()
                .then(data => setWatches(data))
            )
    }, [])



    return (
        <div>
            <h1 className="text-center font-semibold text-3xl mb-10">Memorable Water Bottol</h1>
            <div className="grid grid-cols-3 gap-4 ">
                {
                    watches.map((watch) => (
                        <Watch  watch={watch} key={watch.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Watches;