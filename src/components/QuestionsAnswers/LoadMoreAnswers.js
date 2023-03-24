import React, {useState, useEffect} from 'react';

const LoadMoreAnswers = ({handleLoadMoreAnswers, loadMoreVisible, loadMore}) => {

  return (
    <span className='font-bold px-4'>
      {loadMore ? <a onClick={handleLoadMoreAnswers} href=''>See Less Answers</a> : <a onClick={handleLoadMoreAnswers} href=''>See More Answers</a>}
    </span>
  );
};

export default LoadMoreAnswers;