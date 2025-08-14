import styles from './Reviews.module.css'
import { FaStar, FaSchool, FaArrowRight } from 'react-icons/fa'
import { IoClose } from "react-icons/io5"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../config/firebase'
import { addDoc, collection, getDocs} from 'firebase/firestore'

const Reviews = () => {
    const [reviewList, setReviewList] = useState([])
    const [newComment, setNewComment] = useState('')
    const [newSchool, setNewSchool] = useState('')
    const [showFull, setShowFull] = useState(false)

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

    function displayForm(){
        setShowFull(prev => !prev)
    }

    function closeForm(){
        setShowFull(false)
    }

    return (
        <div className={styles.contForm}>
            
            {/* <h1>Reviews</h1>
            {reviewList.map((review, index) => (
                <div id={index} key={index}> 
                    <p>{review.Comment}</p>
                    <p>From{review.School}</p>
                </div>
            ))} */}
            <div className={styles.review}>
                <h1>Reviews</h1>
                {showFull ? '' : (
                    <button onClick={() => displayForm()}>Add Review here <FaArrowRight /></button>
                )}
            </div>
            {showFull ? (
                <div className={styles.addReview}>
                    <form onSubmit={submitReview}>
                        <div className={styles.up}>
                            <h2>Submit a review</h2>
                            <div className={styles.up2}>
                                <p></p>
                                <button className={styles.closeBtn} onClick={() => closeForm()}>
                                    <IoClose/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.formR}>
                            <div className={styles.field1}>
                                <div className={styles.set1}>
                                    <label htmlFor="name">First Name</label>
                                    <input required className={styles.in1} type="text" placeholder='Your First Name'/>
                                </div>
                                <div className={styles.set}>
                                    <label htmlFor="surname">Last Name</label>
                                    <input required className={styles.in2} type="text" placeholder='Your Last Name' />
                                </div>
                            </div>
                            <div className={styles.field2}>
                                <div className={styles.set1}>
                                    <label htmlFor="email">Email Address</label>
                                    <input required className={styles.in3} type="email" placeholder='Your Email Address'/>
                                </div>
                                <div className={styles.set}>
                                    <label htmlFor="school">School Name</label>
                                    <input className={styles.in4} required placeholder='School Name. Eg:xyz High School' type="text" value={newSchool} onChange={
                                        (e) => setNewSchool(e.target.value)
                                    }/>
                                </div>
                            </div>
                            <textarea maxLength='235' required placeholder='Type message here...' type="text" value={newComment} onChange={
                                (e) => setNewComment(e.target.value)
                            }/>
                        <button className={styles.revSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            ) : ''}
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
