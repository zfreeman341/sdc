import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import StyleBtn from './StyleBtn'
import Form from './Form'
import RatingView from '../../../components/sharedComponents/RatingView'
import helpers from '../reqHelpers'
const getRatingById = helpers.getRatingById
const Selection = ({info, product, setStyle, sty }) => {

  const[imgs, setImgs] = useState([])
  const[rating, setRating] = useState([])
  const[selectedId, setSelectedId] = useState(0)
  const[rev, setRevCount] = useState(0)

  let handleStyleClick = (id) => {
    setStyle(product.results[id])
    setSelectedId(id)
  }

  useEffect(() => {
    if(product) {
      let productImgs = []
      product.results.forEach((result, index) => {
      productImgs.push({id: index, img: result.photos[0].url})
    })
    setImgs(productImgs)
    }
  }, [product])

  useEffect(() => {
    if(product) {
      getRatingById(product.product_id)
      .then((res) => {
        var count = 0
        var rating = 0
        res.results.forEach((review) => {
          count++
          rating += review.rating
        })
        setRating(rating/count)
        setRevCount(count)
      })
    }
  }, [product])


  return (
    <div className="w-[450px] ml-[0px]">
      <div className="flex flex-col">

        <div className="flex mb-[5px] items-center ml-[12px]">
          <RatingView width={80} numStars={5} rating={rating} />
          <a onClick={() => {window.scrollTo({
            top: 10000,
            behavior: 'smooth'
          })}} className="text-gray-400 underline ml-[20px] transition-all duration-1000 hover:cursor-pointer">Read all {rev} reviews</a>
        </div>
        <div className="ml-[20px]">
        <p className="text-gray-400">{info ? (info.category) : (<p></p>)}</p>
        <p className="text-4xl text-gray-500 mb-[5px]">{info ? (info.name) : (<p></p>)}</p>
        {sty.sale_price ? (
          <div className="flex">
            <p className="line-through">${sty.original_price}</p>  <p className="text-red-400">&nbsp; {sty.sale_price}</p>
          </div>
        ) : (
            <p>${sty.original_price}</p>
        )}
        </div>


      </div>
      <div>
        <div className="flex ml-[20px] mt-[10px]">
           <p className="font-bold">STYLE > </p>
           <p> {sty.name} </p>
        </div>
      </div>
      <div>

        {/*------STYLE BUTTONS------*/}
        <div>
        <div className="flex flex-row flex-wrap justify-start w-[250px] h-[full] ml-[20px]">
          {imgs.map((style, index) =>
            {
              return (
              <StyleBtn key={index} sty={style} selectedId={selectedId} handleStyleClick={handleStyleClick}/>
            )}
          )}
        </div>
        </div>

        {/*------FORM------*/}
        <div className="ml-[20px]">
        <Form sty={sty}/>
        </div>
      </div>
    </div>
  );
}

export default Selection;