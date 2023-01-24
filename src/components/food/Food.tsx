import { useState } from "react"

const Food = () => {
    const [food, setFood] = useState({ name: "Pizza", macros: { protein: 10, carbs: 50, fat: 30 } })
    const [foodNotes, setFoodNotes] = useState({ note: "This is a note" })

    return (
        <div>
            <h1 className='text-2xl font-bold'>{food.name}</h1>
            <p className='text-sm'>Protein: {food.macros.protein}</p>
            <p className='text-sm'>Carbs: {food.macros.carbs}</p>
            <p className='text-sm'>Fat: {food.macros.fat}</p>
        </div>
    )
}

export default Food;
