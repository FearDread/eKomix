import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { PiShareNetworkLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { cruds, cart } from "@feardread/crud-service";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
import defaultProdImg from "../../../assets/images/abstract_banner_1.jpg";
import "./Product.css";


const Product = ( {product} ) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentImg, setCurrentImg] = useState(0);
  const [quantity, setQuantity] = useState(null);
  const [previewImg, setPreviewImg] = useState("");
  const [clicked, setClicked] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { loading, result } = useSelector((state) => state.crud.read);
  const cartItems = useSelector((state) => state.cart.items);

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? result.images.length - 1 : currentImg - 1);
  };
  const nextImg = () => { setCurrentImg(currentImg === result.images.length - 1 ? 0 : currentImg + 1); };
  const increment = () => { setQuantity(quantity + 1); };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleWishClick = () => { setClicked(!clicked); };
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    const data = {
      userId: user._id,
      productId: result._id,
      image: result.images[0].url,
      title: result.title,
      price: result.price,
      quantity: result.quantity
    };

    const productInCart = cartItems.find(
      (item) => item.productId === data.productId
    );
    console.log('product add = ', data)

    if (productInCart) {
      toast("Product already");
    } else {
      toast("Added Item to Cart.");
      dispatch(cart.create(data));

    }
  };

  useEffect(() => {
    console.log('user cart = ', cartItems);

  }, [cartItems])

  return (
    <>
    {loading ? (
      <>
        <Loader />
      </>
    ) : (
    <>
      <div className="productSection">
        <div className="productShowCase">
          <div className="productGallery">
            <div className="productThumb">
              {result.images && result.images.map((item) => {
                <img src={item.url ? item.url : defaultProdImg} alt="product_thumg" />
              })}
               <img src={result.images ? result.images[currentImg].url : defaultProdImg} alt="product_thumg" />
            </div>
            <div className="productFullImg">
              <img src={result.images ? result.images[currentImg].url : ""} alt="" />
              <div className="buttonsGroup">
                <button onClick={prevImg} className="directionBtn">
                  <GoChevronLeft size={18} />
                </button>
                <button onClick={nextImg} className="directionBtn">
                  <GoChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="productDetails">
            <div className="productBreadcrumb">
              <div className="breadcrumbLink">
                <Link to="/">Home</Link>&nbsp;/&nbsp;
                <Link to="/shop">The Shop</Link>
              </div>
              <div className="prevNextLink">
                <Link to="/product">
                  <GoChevronLeft />
                  <p>Prev</p>
                </Link>
                <Link to="/product">
                  <p>Next</p>
                  <GoChevronRight />
                </Link>
              </div>
            </div>
            <div className="productName">
              <h1>{result.title}</h1>
            </div>
            <div className="productRating">
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <p>{result.reviews} reviews</p>
            </div>
            <div className="productPrice">
              <h3>{result.price}</h3>
            </div>
            <div className="productDescription">
              <p>
                {result.description}
              </p>
            </div>
            <div className="productCartQuantity">
              <div className="productQuantity">
                <button onClick={decrement}>-</button>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleInputChange}
                />
                <button onClick={increment}>+</button>
              </div>
              <div className="productCartBtn">
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="productWishShare">
              <div className="productWishList">
                <button onClick={handleWishClick}>
                  <FiHeart color={clicked ? "red" : ""} size={17} />
                  <p>Add to Wishlist</p>
                </button>
              </div>
              <div className="productShare">
                <PiShareNetworkLight size={22} />
                <p>Share</p>
              </div>
            </div>
            <div className="productTags">
              <p>
                <span>SKU: {result._id} </span>N/A
              </p>
              <p>
                <span>CATEGORY: </span>{result.category}
              </p>
              <p>
                <span>TAGS: </span>comics, collectibles
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )};
  </>
 )
};

export default Product;
