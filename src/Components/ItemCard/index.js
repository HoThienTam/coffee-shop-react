import React from "react";
import Button from "../Button";
import { ContentWrapper, Price } from "./styles";
const ItemCard = () => {
  return (
    <ContentWrapper href="https://www.thecoffeehouse.com/products/tra-buoi-mat-ong">
      <img
        width="342px"
        height="342px"
        src="https://product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_master.jpg"
        alt="tra oolong buoi mat ong"
      />
      <h3>TRÀ OOLONG BƯỞI MẬT ONG</h3>
      <Price>50,000 đ</Price>
      <Button>MUA NGAY</Button>
      <Button right>TÌM HIỂU THÊM</Button>
    </ContentWrapper>
  );
};

export default ItemCard;
