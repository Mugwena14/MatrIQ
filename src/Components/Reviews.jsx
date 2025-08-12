import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Reviews = () => {
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        const getReviewList = async () => {
    
        }

    }, [])

    return (
        <div>Reviews</div>
    )
}

export default Reviews
