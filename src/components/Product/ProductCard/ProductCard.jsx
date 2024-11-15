import React, { useState  } from "react";
import { useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { addToCart } from "../../../Features/Cart/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import defaultProdImg from "../../../Assets/Images/abstract_banner_1.jpg";

const ProductCard = ( props ) => {
  const { type, product, options } = props;
  const dispatch = useDispatch();
  const sortByPrice = (a, b) => a.productPrice - b.productPrice;
  const [ wishList, setWishList ] = useState({});
  const cartItems = 0;
  const cards = {
    "limited": { "classes": ["lpContainer", "lpImageContainer"],

      },
    "trendy" : {classes: ["trendyProductContainer", "trendyProductImages", "trendyProductImagesCart", "trendyProductInfo"]},
    "shop" : {
      classes: ["sdContainer", ]
    }
  }

  const component = cards[type];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productID === product.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error("Product limit reached", {
        duration: 2000,
        style: {
          backgroundColor: "#ff4b4b",
          color: "white",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#ff4b4b",
        },
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`Added to cart!`, {
        duration: 2000,
        style: {
          backgroundColor: "#07bc0c",
          color: "white",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#07bc0c",
        },
      });
    }
  };

    return (
        <>
        <div className={component.classes[0]}>
        <div className={component.classes[1]}>
        <Link to="/Product" onClick={scrollToTop}>
          <img 
            src={product.images ? product.images[0].url : defaultProdImg}
            alt=""
            className="trendyProduct_front"
            />
          <img
            src={product.images[1] ? product.images[1].url : defaultProdImg}
            alt=""
            className="trendyProduct_back"
          />
          </Link>
         <h4 onClick={() => handleAddToCart(product)}>
            Add to Cart
         </h4>
        </div>
        <div
          className="sdProductImagesCart"
          onClick={() => handleAddToCart(product)}
        >
          <FaCartPlus />
        </div>
        <div className="sdProductInfo">
          <div className="sdProductCategoryWishlist">
            <p>Dresses</p>
            <FiHeart
              onClick={() => handleWishlistClick(product.productID)}
              style={{
                color: wishList[product.productID]
                  ? "red"
                  : "#767676",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="sdProductNameInfo">
            <Link to="/product" onClick={scrollToTop}>
              <h5>{product.productName}</h5>
            </Link>

            <p>${product.productPrice}</p>
            <div className="sdProductRatingReviews">
              <div className="sdProductRatingStar">
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
                <FaStar color="#FEC78A" size={10} />
              </div>
              <span>{product.productReviews}</span>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default ProductCard;