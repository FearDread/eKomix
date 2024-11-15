import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { cart } from "@feardread/crud-service";
import defaultProdImg from "../../../assets/images/abstract_banner_1.jpg";
import "./LimitedCard.css";

const LimitedCard = ( {product} ) => {
    const dispatch = useDispatch();
  const cartItems = 0;
  const [wishList, setWishList] = useState({});

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productID === product.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error("Product limit reached");
    } else {
      dispatch(cart.add(product));
      toast.success(`Added to cart!`);
    }
  };

    return (
        <div className="lpContainer">
        <div className="lpImageContainer">
          <Link to={`/product/${product._id}`}>
            <img
              src={product.images && product.images[0] ? product.images[0].url : defaultProdImg}
              alt={product.images && product.images[1] ? product.images[1].url : defaultProdImg}
              className="lpImage"
            />
          </Link>
          <h4 onClick={() => handleAddToCart(product)}>
            Add to Cart
          </h4>
        </div>
        <div
          className="lpProductImagesCart"
          onClick={() => handleAddToCart(product)}
        >
          <FaCartPlus />
        </div>
        <div className="limitedProductInfo">
          <div className="lpCategoryWishlist">
            <p>{product.category}</p>
            <FiHeart
              onClick={() => handleWishlistClick(product._id)}
              style={{
                color: wishList[product._id]
                  ? "red"
                  : "#767676",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="productNameInfo">
            <Link to="/Product" onClick={scrollToTop}>
              <h5>{product.title}</h5>
            </Link>
            <p>${product.price}</p>
            <div className="productRatingReviews">
              <div className="productRatingStar">
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
              </div>

              <span>{product.reviews}</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LimitedCard;