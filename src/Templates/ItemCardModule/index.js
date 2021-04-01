import React from "react";
import ItemCard from "../../Components/ItemCard";
import Section from "../Section";

const ItemCardModule = (props) => {
  return (
    <Section title="Menu" btn="xem thêm tất cả sản phẩm">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </Section>
  );
};

export default ItemCardModule;
