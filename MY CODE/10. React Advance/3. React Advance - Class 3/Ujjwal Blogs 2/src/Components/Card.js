import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = ({details, key}) => {
 
  const {title, author, date, category, tags, content, img} = details;
  console.log(key);
//   const tagPath = 

  return (
    <div>
        <h2 className=" font-bold text-lg hover:underline">
            <NavLink to={`/blog/${key}`}>
                {title}
            </NavLink>
        </h2>

        <div className=" text-sm my-1">
            <p className="my-1">
                By <span className="italic">{author}</span> On <span className=" font-bold underline">{category}</span>
            </p>
            <p className="my-1">
                Posted On {date}
            </p>
        </div>

        <p className="mt-4">
            {content}
        </p>

        <p className="flex gap-2 flex-wrap py-[10px]">
            {
                tags.map((tag, index)=>(
                    <span key={index} className=" text-blue-800 text-sm">
                        #{tag}
                    </span>
                ))
            }
        </p>
    </div>
  )
}

export default Card