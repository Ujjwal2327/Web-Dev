import { useState } from "react";
import Card from "./Card"

const Cards = ({courses, category})=>{

    // courses
    const getCourses = ()=>{
        let allCourses=[];
        if(category==="All"){
            Object.values(courses).forEach((courseCatagory)=>{
                courseCatagory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            console.log(allCourses)
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    const [likedCourses,setLikedCourses] = useState([]);

    return (
        <div>
            {
                courses.length==0 ?
                (
                    <div className=" flex flex-wrap justify-center gap-4 mb-4 align-middle " >
                        No Data Found
                    </div>
                )
                :
                (
                    <div className=" flex flex-wrap justify-center gap-4 mb-4 align-middle " >
                        {
                            getCourses().map((course)=>{
                                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}>hello</Card>
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Cards;