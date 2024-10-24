/*Card component*/
import React from 'react';
    
function Card({ movie }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover object-center" />
            <div className="p-4">
                <h2 className="font-bold text-xl text-gray-800">{movie.title}</h2>
                <p className="text-gray-700">{movie.plot}</p>
            </div>
        </div>
    )
}

export default Card
