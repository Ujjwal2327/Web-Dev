import React from 'react'

const Card = ({details, key}) => {
 
  const {title, author, date, category, tags, content, img} = details;

  return (
    <div>
        <h2 className=" font-bold text-lg">
            {title}
        </h2>

        <div className=" text-sm my-1">
            <p className="my-1">
                By <span className="italic">{author}</span> on <span className=" font-bold underline">{category}</span>
            </p>
            <p className="my-1">
                Posted on {date}
            </p>
        </div>

        <p className="mt-4">
            {content}
        </p>

        <p className="flex gap-2 flex-wrap py-[6px]">
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