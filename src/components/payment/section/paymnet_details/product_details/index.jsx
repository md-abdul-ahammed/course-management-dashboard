import React from "react";
import './style.css'

const XyzCard = () => {
    return (
        <div className="XYz shadow-xl text-gray-600 px-7 py-4">
            <div className="XYZ-title font-normal">XYZ Design Academy</div>
            <h3 className="bg-white text-2xl font-medium capitalize mt-3">the complete digital marketing course</h3>
            <div className="flex justify-between mt-6">
                <div className="XYZ-duration">3 Months</div>
                <div className="XYZ-duration">Starting from 12/03/22</div>
            </div>
        </div>
    )
}

export default XyzCard