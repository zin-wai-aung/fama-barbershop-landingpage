import {
  Star
} from "lucide-react";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} className="text-yellow-400 fill-yellow-400" />
    );
  }

  if (halfStar) {
    stars.push(
      <svg
        key="half"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-yellow-400"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01L12 2z"></path>
        <defs>
          <linearGradient id="half-star-gradient">
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="currentColor" />
          </linearGradient>
          <clipPath id="half-star-clip">
            <path d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77v6.75l-6.18-3.25 1.18-6.88-5-4.87 6.91-1.01L12 2z"
          clipPath="url(#half-star-clip)"
          fill="url(#half-star-gradient)"
        />
      </svg>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="text-yellow-400" />);
  }

  return stars;
};

export default renderStars;
