import styles from './Reviews.module.css'
import { FaStar, FaSchool, FaArrowRight } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { addDoc, collection, getDocs} from 'firebase/firestore'

const Reviews = () => {
    const [reviewList, setReviewList] = useState([])
    const [newComment, setNewComment] = useState('')
    const [newSchool, setNewSchool] = useState('')

    const reviewsCollectionRef = collection(db, "reviews")

    useEffect(() => {
        const getReviewList = async () => {
            try{
                const data = await getDocs(reviewsCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(), id: doc.id}))
                setReviewList(filteredData)
            }catch(error){
                console.error("Error fetching reviews: ", error)
            }
        }
        getReviewList()
    }, [])

    async function submitReview(e){
        e.preventDefault();
        try{
            const newReview = {
                Comment: newComment,
                School: newSchool
            }
            await addDoc(reviewsCollectionRef, newReview)
            getReviewList()
        }catch(error){
            console.error("Error adding review: ", error)
        }

    }

    return (
        <div className={styles.contForm}>
            {/* <form onSubmit={submitReview} className={styles.form}>
                <input type="text" value={newComment} onChange={
                    (e) => setNewComment(e.target.value)
                }/>
                <input type="text" value={newSchool} onChange={
                    (e) => setNewSchool(e.target.value)
                }/>
                <button>Submit</button>
            </form> */}
            {/* <h1>Reviews</h1>
            {reviewList.map((review, index) => (
                <div id={index} key={index}> 
                    <p>{review.Comment}</p>
                    <p>From{review.School}</p>
                </div>
            ))} */}
            <div className={styles.review}>
                <h1>Reviews</h1>
                <button>Add Review here <FaArrowRight /></button>
            </div>
            <div className={styles.contComment}>
                <div className={styles.contInner}>
                    <div className={styles.stars}>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                    </div>
                    <div className={styles.comment}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores! Quidem unde cum, vitae aspernatur quas aperiam saepe cupiditate laborum maiores quos iure distinctio eaque exercitationem repellendus hic veniam voluptatibus?</p>
                    </div>
                    <div>
                        <div className={styles.school}>
                            <div className={styles.schoolInfo}>
                                <div className={styles.school}>
                                    <FaSchool className={styles.schoolIcon}/>
                                </div>
                                <div className={styles.schoolName}>
                                    <h3>From</h3>
                                    <p>New Era College</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contInner}>
                    <div className={styles.stars}>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                    </div>
                    <div className={styles.comment}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores! Quidem unde cum, vitae aspernatur quas aperiam saepe cupiditate laborum maiores quos iure distinctio eaque exercitationem repellendus hic veniam voluptatibus?</p>
                    </div>
                    <div>
                        <div className={styles.school}>
                            <div className={styles.schoolInfo}>
                                <div className={styles.school}>
                                    <FaSchool className={styles.schoolIcon}/>
                                </div>
                                <div className={styles.schoolName}>
                                    <h3>From</h3>
                                    <p>New Era College</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contInner}>
                    <div className={styles.stars}>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                        <p ><FaStar className={styles.star}/></p>
                    </div>
                    <div className={styles.comment}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores! Quidem unde cum, vitae aspernatur quas aperiam saepe cupiditate laborum maiores quos iure distinctio eaque exercitationem repellendus hic veniam voluptatibus?</p>
                    </div>
                    <div>
                        <div className={styles.school}>
                            <div className={styles.schoolInfo}>
                                <div className={styles.school}>
                                    <FaSchool className={styles.schoolIcon}/>
                                </div>
                                <div className={styles.schoolName}>
                                    <h3>From</h3>
                                    <p>New Era College</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
