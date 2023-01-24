import { useState } from "react";

export type Food = {
    name: string,
    macros: {
        protein: number,
        carbs: number,
        fat: number
    }
    _id: string
}

const useFoods = () => {
    const [foods, setFoods] = useState<Food[]>([]);

    const addFood = (food: Food) => {
        setFoods([...foods, food]);
    }

    const removeFood = (food: Food) => {
        setFoods(foods.filter((f) => f._id !== food._id));
    }

    return {
        foods,
    }
}


const Foods = () => {

    return (
        <div id='FOODS_CONTAINER' className='w-full flex flex-col items-center'>

            <div id='FOODS_MAP_CONTAINER' className='w-full flex justify-center'>

                foods in here
            </div>
        </div>
    )
}

export default Foods;
