import React, { useRef, useEffect } from "react";
import {useSelector} from 'react-redux'



function RelatedCompare({compare}) {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

  return (
    <>
    <div className="stats w-full">

    <div className="stat place-items-center">
      <div className="stat-title font-bold">Overview</div>
      <div>✓</div>
      <div>✓</div>
      <div>✓</div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>{selectedProduct.features[0].value || '✓'}</div>
      <div>{selectedProduct.features[1].value || '✓'}</div>

    </div>

    <div className="stat place-items-center">
      <div className="stat-title">ㅤ</div>
      <div className="stat-title">GMO and Pesticide-free</div>
      <div className="stat-title">Made with 100% Love</div>
      <div className="stat-title">Made with 100% Care</div>
      <div className="stat-title">{compare.extra.features ? compare.extra.features[0].feature : ㅤ}</div>
      <div className="stat-title">{compare.extra.features ? compare.extra.features[1].feature : ㅤ}</div>
      <div className="stat-title">{selectedProduct.features ? selectedProduct.features[0].feature : ㅤ}</div>
      <div className="stat-title">{selectedProduct.features ? selectedProduct.features[1].feature : ㅤ}</div>
    </div>

    <div className="stat place-items-center">
      <div className="stat-title font-bold">Hoodie</div>
      <div>✓</div>
      <div>✓</div>
      <div>✓</div>
      <div>{compare.extra.features[0].value || '✓'}</div>
      <div>{compare.extra.features[1].value || '✓'}</div>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>


</div>
</>
  );
}

export default RelatedCompare;