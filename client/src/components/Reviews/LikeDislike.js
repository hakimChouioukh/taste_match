import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { dislikeReview, likeReview, undoDislikeReview, unlikeReview } from '../../actions/reviews.actions';


const LikeDislike = ({review}) => {


    const userData = useSelector( state => state.userReducer);
    const dispatch = useDispatch();

    const like = () => {

        if (!review.likers.includes(userData._id) && !review.dislikers.includes(userData._id)) {
        
            dispatch(likeReview(review._id, userData._id));
        } else {

            dispatch(unlikeReview(review._id, userData._id));
        }
    };

    const dislike = () => {

        if (!review.dislikers.includes(userData._id) && !review.likers.includes(userData._id)) {
        
            dispatch(dislikeReview(review._id, userData._id));
        } else {

            dispatch(undoDislikeReview(review._id, userData._id));
        }
    };

    
    return (
        <>
        <Grid item>

            <ThumbUpIcon fontSize="large" onClick={like} />
            <Typography>
            <span>{review.likers.length}</span>
            </Typography>

        </Grid>
        <Grid item>


            <ThumbDownIcon  fontSize="large" onClick={dislike} />
            <Typography paragraph>
            <span>{review.dislikers.length}</span>
            </Typography>

        </Grid>
        </>
    );
};

export default LikeDislike;