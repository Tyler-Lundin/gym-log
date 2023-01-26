import { useState } from "react"

const FoodPage = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">

            <h1 className="text-6xl font-bold">Food Page</h1>

            <div className="flex flex-col items-center justify-center h-64 bg-gray-600 w-full">
                input
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-700 w-full h-full overflow-y-auto">
                output
            </div>

        </div>
    )
}

export default FoodPage;
