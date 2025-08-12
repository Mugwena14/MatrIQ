import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Reviews = () => {
    const [reviewList, setReviewList] = useState([])

    const reviewsCollectionRef = collection(db, "reviews")

    useEffect(() => {
        const getReviewList = async () => {
            try{
                const data = await getDocs(reviewsCollectionRef)
            }catch(error){
                console.error("Error fetching reviews: ", error)
            }
        }
        grtReviewList()
    }, [])

    return (
        <div>Reviews</div>
    )
}

export default Reviews
