import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Slider from "react-animated-slider";
import StarRatings from "react-star-ratings";

const ReviewsContainer = styled.div``;

const ReviewsSlider = styled.div`
  .slider {
    position: relative;
    width: 90%;
    height: 600px;
    margin: 0 auto;
    overflow: hidden;
  }

  .slider a.previousButton,
  .slider a.nextButton {
    font-size: 22px;
    line-height: 0;
    display: block;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    z-index: 1;
    color: #fafafa;
    padding: 10px;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    /* prevent jump effect when scaling */
  }

  .slider a.previousButton:not(.disabled):hover,
  .slider a.nextButton:not(.disabled):hover {
    -webkit-transform: translateY(-50%) scale(1.25);
    transform: translateY(-50%) scale(1.25);
    cursor: pointer;
  }

  .slider a.previousButton {
    left: 20px;
  }

  .slider a.nextButton {
    right: 20px;
  }

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }

  .slide.hidden {
    visibility: hidden;
  }

  .slide.previous {
    left: -100%;
    top: 0;
  }

  .slide.current {
    left: 0;
    top: 0;
  }

  .slide.next {
    left: 100%;
    top: 0;
  }

  .slide.animateIn,
  .slide.animateOut {
    -webkit-transition: all 2s ease;
    transition: all 2s ease;
  }

  .slide.animateIn.previous,
  .slide.animateIn.next {
    left: 0;
    visibility: visible;
  }

  .slide.animateOut.previous {
    left: 100%;
  }

  .slide.animateOut.next {
    left: -100%;
  }
  p {
    font-size: 14px;
  }
`;

const ReviewWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  p:nth-of-type(1) {
    font-size: 15px;
    font-weight: 900;
    padding: 0 0 20px 0;
  }

  p:nth-of-type(2) {
    padding: 0 0 20px 0;
  }
`;

const ImgWrapper = styled.div`
  width: 60px;
  height: 80px;
  padding: 0 0 20px 0;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StarsWrapper = styled.div`
  margin: 0 auto;
`;

const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = "AIzaSyBuhiuCXHoOFwduOOLN9PXiSKBRv8kCCLA";
const PLACE_ID = process.env.REACT_APP_PLACE_ID;
// const PLACE_ID = "ChIJH7IdKdjNHkcR2PAeasiTBv0";
const HEROKU_URL = "https://cors-anywhere.herokuapp.com/";
const urlOK = `${HEROKU_URL}https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,reviews&key=${API_KEY}`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await fetch(urlOK, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          //   "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      });
      const data = await response.json();
      //   console.log(data.result.reviews);
      console.log(API_KEY);
      setReviews(data.result.reviews);
      setLoading(false);
      console.log(reviews);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  //   console.log(reviews.result.reviews);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ReviewsContainer>
      <h1>Reviews</h1>
      <ReviewsSlider>
        <Slider direction="vertical" autoplay={3000} previousButton nextButton>
          {reviews.map((item) => (
            <ReviewWrapper key={item.time}>
              <ImgWrapper>
                <img src={item.profile_photo_url} alt="avatar" />
              </ImgWrapper>
              <p>{item.author_name}</p>
              <p>{item.text}</p>
              <StarsWrapper>
                <StarRatings
                  rating={item.rating}
                  starRatedColor="gold"
                  starDimension="20px"
                  starSpacing="2px"
                  //   changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                />
              </StarsWrapper>
            </ReviewWrapper>
          ))}
        </Slider>
      </ReviewsSlider>
    </ReviewsContainer>
  );
};

export default Reviews;
