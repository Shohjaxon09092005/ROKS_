import React from 'react'
import { FaCalendarAlt, FaEye } from 'react-icons/fa';
import '../styles/newsCard.css'
function NewsCard({image,sana,views,title,desc}) {
    return (
        <div className='news_card'>
            <img src={image} alt="" />
            <div className="newsCard_content">
                <div className="newsCard_views">
                    <div className="newsCard_Calendar">
                        <FaCalendarAlt />
                        <span>{sana}</span>
                    </div>
                    <div className="newsCard_view">
                        <FaEye />
                        <span>{views}</span>
                    </div>

                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>



        </div>
    )
}

export default NewsCard
