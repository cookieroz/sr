import React from "react";
import PropTypes from "prop-types";

export const StarRating = ({ rating }) => {
	// {
	// 	"star-rating": 0.8,
	// 	"publish_date": "2016-09-05T23:25:47.642350Z",
	// 	"id": "9783221620868",
	// 	"body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
	// 	"author": "Kaley Schiller"
	// },
	return (
		<div>
			{`rating is ${rating}`}
		</div>
	);
};

StarRating.propTypes = {
	rating: PropTypes.number,
};
