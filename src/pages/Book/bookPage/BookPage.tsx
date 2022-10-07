/* eslint-disable react-hooks/exhaustive-deps */
import type { FC } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';

import { getBookById } from '../../../store/book/bookThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Authad from '../../../components/AuthAd/Authad';
import StyleButton from '../../../components/Button/StyledButton';
import { StyledBookContainer } from './BookPage.styles';
import star from '../../../assets/icons/Star.png';
import heart from '../../../assets/icons/Heart.png';
import filledHeart from '../../../assets/icons/filledHeart.png';
import { setRating } from '../../../http/ratingApi';
import { addToCart, getUserCart } from '../../../store/cart/cartThunk';
import PageIcons from '../../../components/pageIcons/PageIcons';
import { addToFavorite, deleteFromFavorite, getUserFavorite } from '../../../store/favorite/favoriteThunk';
import Comment from '../../../components/comment/Comment';
import type { CurrentBookType } from '../../../types/bookType';
import { getOneBook } from '../../../http/bookApi';
import type { CommentsInitialType } from '../../../types/commentTypes';
import { addComment, getComments } from '../../../http/comments';

const BookPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart.cart);
  const favorite = useAppSelector((state) => state.favorite.favorite);

  const [comments, setComments] = useState<CommentsInitialType>({ commentArray: [], count: 0 });
  const [commentInput, setCommentInput] = useState('');

  const [stateRating, setStateRating] = useState(0);

  const [currentBook, setCurrentBook] = useState<CurrentBookType>();

  const isInCart = useMemo(() => {
    if (cart?.some((item) => item.bookId === +id!)) {
      return true;
    }
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const isInFavorite = useMemo(() => {
    if (favorite?.some((item) => item.bookId === +id!)) {
      return true;
    }
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

  useEffect(() => {
    (async () => {
      if (user.id) {
        dispatch(getUserCart(user.id));
        dispatch(getUserFavorite(user.id));
      }

      const commentResponse = await getComments({ bookId: +id! });

      setComments(() => {
        return commentResponse;
      });

      await dispatch(getBookById(+id!));

      const book = await getOneBook(+id!);

      if (book) {
        setCurrentBook(() => {
          return book;
        });
      }

      setStateRating(() => {
        return ((currentBook?.book?.rating || 0) * 20);
      });
    })();
  }, []);

  const onAddToCart = () => {
    if (!user.email) {
      navigate('/login');
    }
    if (currentBook) {
      dispatch(addToCart(currentBook.book?.id || -1));
    }
  };

  const onAddFavorite = () => {
    if (!user.email) {
      navigate('/login');
    }

    if (isInFavorite) {
      dispatch(deleteFromFavorite({ userId: user.id, bookId: +id! }));
      return;
    }

    dispatch(addToFavorite(+id!));
  };

  const handleRating = async (rate: number) => {
    try {
      if (!user.email) {
        navigate('/login');
      }

      if (currentBook) {
        setStateRating(rate);

        if (currentBook.book) {
          const newRating = await setRating(
            {
              bookId: currentBook.book.id || -1,
              rate: (rate / 20),
            },
          );
          if (currentBook.book) {
            setCurrentBook((state) => {
              if (state?.book) {
                state.book.rating = newRating.rating;
              }
              return state;
            });
          }
        }
      }
    } catch (error) {
      const err = error as Error;
      toast(err.message);
    }
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentInput(e.target.value);
  };

  const onAddComment = async () => {
    if (!user.email) {
      navigate('/login');
    }
    try {
      const newComment = await addComment({ bookId: +id!, comment: commentInput });
      if (newComment) {
        setComments((state) => {
          state.commentArray.push(newComment.newComment);
          return state;
        });
      }
      setCommentInput('');
    } catch (error) {
      const err = error as Error;
      toast(err.message);
    }
  };

  return (
    <StyledBookContainer className="book-content">
      <div className="book-container">
        <div className="book-image-container">
          <img src={currentBook?.book?.image && `${process.env.REACT_APP_API_URL}${currentBook?.book?.image}`}
            className="book-picture"
            alt="cannot load picture"
          />
          <PageIcons
            className={`book-favorite ${isInFavorite ? 'in-favorite' : ''}`}
            picture={isInFavorite ? filledHeart : heart}
            onClick={onAddFavorite}
          />
        </div>
        <div className="contenet-container">
          <span className="book-name">{currentBook?.book?.name}</span>
          <span className="book-author">{currentBook?.book?.author}</span>
          <div className="rating-container">
            <div className="current-rating">
              <img src={star} alt="cannot load picture" className="rate-star" />
              <span className="book-rating">{(currentBook?.book?.rating || 0).toFixed(1)}</span>
            </div>
            <Rating
              ratingValue={stateRating}
              onClick={handleRating}
              emptyColor="#fff"
              fillColor="#BFCC94"
              size={28}
            />
          </div>
          <div className="description-container">
            <span className="book-description-title">Descrition</span>
            <span className="book-description">{currentBook?.book?.description}</span>
            <div className="button-container">
              <div className="hardcover-title">Hardcover</div>
              <StyleButton
                text={`${isInCart ? 'Added to cart' : `$${currentBook?.book?.price} USD`}`}
                type="button"
                onClick={onAddToCart}
                className={`price ${isInCart ? 'in-cart' : ''}`}
                disabled={isInCart}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="comments-container">
        <div className="comments-title">Comments</div>
        {comments?.commentArray.map((item) => {
          return (
            <Comment
              key={item.id}
              UserId={item.userId}
              date={item.dateOfPost}
              comment={item.comment}
            />
          );
        })}
        {user.email &&
          (
            <div className="add-comment-container">
              <div className="textarea-container">
                <textarea
                  className="add-comment"
                  placeholder="Share a comment"
                  value={commentInput}
                  onChange={handleChangeComment}
                />
              </div>
              <div className="add-button-container">
                <StyleButton
                  text="Post a comment"
                  type="button"
                  onClick={onAddComment}
                  className="add-comment-button"
                />
              </div>
            </div>
          )
        }
      </div>
      {!user.email && <Authad />}
    </StyledBookContainer>
  );
};

export default BookPage;
