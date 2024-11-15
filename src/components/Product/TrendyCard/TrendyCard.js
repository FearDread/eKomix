import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cart } from "@feardread/crud-service";
import toast from "react-hot-toast";
import defaultProdImg from "../../../assets/images/abstract_banner_1.jpg";
import "./TrendyCard.css";

const TrendyCard = (props) => {
  const { key, id, product } = props;

  const dispatch = useDispatch();
  const sortByPrice = (a, b) => a.productPrice - b.productPrice;
  const [ wishList, setWishList ] = useState({});
  const cartItems = 0;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productId === product.productId
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error("Product limit reached");
    } else {
      dispatch(cart.add(product));
      //dispatch(addToCart(product));
      toast.success(`Added to cart!`);
    }
  };

  useEffect(() => {

  },[]);

    return (
      <>
        <div className="col-3 trendy-card" key={key}>
        <div className="trendyProductContainer" key={product._id}>
        <div className="trendyProductImages">
          <Link to={`/product/${product._id}`}>
            <img
              src={product.images && product.images[0] ? product.images[0].url : defaultProdImg}
              alt="product-img"
              className="trendyProduct_front"
            />
            <img
              src={product.images && product.images[1] ? product.images[1].url : defaultProdImg}
              alt="product-img"
              className="trendyProduct_back"
            />
          </Link>
          <h4 onClick={() => handleAddToCart(product)}>
            Add to Cart
          </h4>
        </div>
        <div
          className="trendyProductImagesCart"
          onClick={() => handleAddToCart(product)}
        >
          <FaCartPlus />
        </div>
        <div className="trendyProductInfo">
          <div className="trendyProductCategoryWishlist">
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
          <div className="trendyProductNameInfo">
            <Link to="product" onClick={scrollToTop}>
              <h5>{product.title}</h5>
            </Link>

            <p>${product.price}</p>
            <div className="trendyProductRatingReviews">
              <div className="trendyProductRatingStar">
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
      </div>
      </>
    )
}

export default TrendyCard;