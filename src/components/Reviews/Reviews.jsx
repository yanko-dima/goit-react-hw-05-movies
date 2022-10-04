// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovieReviews } from 'servises/films-api';
import css from './Reviews.module.css';
import ReviewsItem from 'components/ReviewsItem';
import Loader from 'components/Loader';
import { useReviews } from 'hooks/useReviews';

export default function Reviews() {
  const { reviews, status } = useReviews();

  return (
    <>
      {status === 'loading' && <Loader />}
      {status === 'rejected' && <p>We don`t have any reviews for this movie</p>}
      {status === 'responsed' && (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author_details, content }) => (
            <ReviewsItem key={id} author={author_details} content={content} />
          ))}
        </ul>
      )}
    </>
  );
}
