import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";

interface InteractionsProps {
    likes: number;
    comments: number;
    shares: number;
    }

const Interactions = (Interactions:InteractionsProps) => {
  return (
    <div className='flex flex-row space-x-6 mt-4'>
        <div className="text-gray-500">
         <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            <span className="ml-2">{Interactions.likes}</span>
        </div>
        <div className="text-gray-500">
            <FontAwesomeIcon icon={faComment} className="text-blue-500" />
            <span className="ml-2">{Interactions.comments}</span>
        </div>
        <div className="text-gray-500">
            <FontAwesomeIcon icon={faShare} className="text-green-500" />
            <span className="ml-2">{Interactions.shares}</span>
        </div>
    </div>
  )
}

export default Interactions