import React, { useState } from 'react'
import { IoStarSharp } from 'react-icons/io5'

const Review = ({ review }) => {
    const stars = Array(5).fill(0);
    const colors={
        blue: "#EFAD15",
        gray: "#a9a9a9"
    }


  return (
    <div className="review">
        <div className="reviewImageSection">
            <div className="reviewImageWrapper">
                <img src={review.img} alt='boss stoner' />
            </div>
        </div>
        <div className="reviewTextSection">
            <div className="reviewerName">boss stoner</div>
            <p className="reviewText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, temporibus.</p>
            <div className="reviewRating">
            {stars.map((_, index)=>(
                    <IoStarSharp className="star"
                        key = {index} 
                        color={(5) > index ? colors.blue: colors.gray}
                    />
                ))}
            </div>
        </div>
        <div className="reviewDate">21th June 2021</div>
    </div>
  )
}

export default Review