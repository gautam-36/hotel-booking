import React from 'react'
import './featured.css'
const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://www.usnews.com/object/image/00000163-8da0-d398-ad7f-8dec46820000/43-taj-mahal-getty.jpg?update-time=1527090234453&size=responsive970" className="featuredImg" />
        <div className="featuredTitles">
          <h1>India</h1>
          <h1>1066 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.usnews.com/object/image/00000163-8d5c-d398-ad7f-8dfc202b0000/9-tower-of-london-getty.jpg?update-time=1527086302993&size=responsive970" alt="featured Image" className="featuredImg" />
        <div className="featuredTitles">
          <h1>England</h1>
          <h1>7874 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dffc5de0000/17-matterhorn-getty.jpg?update-time=1527086920352&size=responsive970" alt="featured Image" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Switzerland</h1>
          <h1>690 properties</h1>
        </div>
      </div>
    </div>
  )
}

export default Featured