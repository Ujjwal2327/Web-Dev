import { useState } from "react";
import {FcLike} from "react-icons/fc"
import {FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props)=>{

    const course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    const clickHandler = ()=>{
        if(likedCourses.includes(course.id)){   // already like
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)) );
            toast.warning("Liked Removed");
        }
        else{
            if(likedCourses.length==0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=> [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="max-w-[300px] w-full bg-bgDark opacity-80 rounded-md overflow-hidden " >
            <div  className=" relative " >
                <img src={course.image.url} alt={course.image.alt}></img>
                <div  className=" w-[40px] h-[40px] bg-white absolute right-2 -bottom-5 rounded-full grid place-items-center " >
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            <div className=" text-white p-4 " >
                <p className=" font-semibold text-lg leading-6 mb-2 ">{course.title}</p>
                <p>
                    {
                        course.description.length>100 ? (course.description.substring(0,100) + ". . .") : (course.description)
                    }
                </p>
            </div>
        </div>
    );

}

export default Card;