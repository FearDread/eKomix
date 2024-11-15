import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdditionalInfo from "../components/Product/AdditonInfo/AdditionalInfo";
import Product from "../components/Product/ProductMain/Product";
import LimitedEdition from "../components/Home/Limited/LimitedEdition";
import RelatedProducts from "../components/Product/RelatedProducts/RelatedProducts";
import { cruds } from "@feardread/crud-service";
import Loader from "../components/Loader/Loader";


const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, result } = useSelector((state) => state.crud.read);

  useEffect(() => {

    dispatch(cruds.read('product', id));
    dispatch(cruds.list('product'));

  }, [dispatch, id])

  return (
    <>
      {loading ? (
      <>
        <Loader />
      </>
    ) : (
      <>
        <div className="product-details">
        <Product product={result} />
        <AdditionalInfo />
        <LimitedEdition products={result} />
        { /*<RelatedProducts /> */ }
        </div>
      </>
    )};
  </>
  )
};

export default ProductDetails;
