import React, { useState, useEffect, useCallback } from "react";
import Button from "../../shared/Button";
import Item from "../../shared/Item";
import SideFilter from "./SideFilter";
import DeliveryInfo from "./DeliveryInfo";
import { useQuery } from "@apollo/react-hooks";
import { productsQuery } from "./queries";
import NoPhoto from "../../assets/image/no_photo.png";
import Spinner from "../../shared/Spinner";
import PageHeader from "../../shared/PageHeader";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";

import * as Styled from "./styled";

export default () => {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { loading, error, data } = useQuery(productsQuery);

  useEffect(() => {
    if (loading) {
      setItems([]);
    } else {
      console.log("still loading ?", loading);
      setItems(data.items);
    }
  }, [loading, data]);

  useEffect(() => {
    filter === "all"
      ? setFilteredItems(items)
      : setFilteredItems(items.filter(({ kind }) => kind === filter));
  }, [filter, items]);

  const handleFilter = useCallback((e) => {
    e.preventDefault();
    setFilter(e.target.name);
  }, [setFilter]);

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.PageTitle>
          <PageHeader title="Каталог" />
        </Styled.PageTitle>
        <Styled.Filter>
          <Button
            type="select"
            name="all"
            clicked={handleFilter}
            isActive={filter === "all"}
          >
            Все товары
          </Button>
          <Button
            type="select"
            name="boy"
            clicked={handleFilter}
            isActive={filter === "boy"}
          >
            Мальчикам
          </Button>
          <Button
            type="select"
            name="girl"
            clicked={handleFilter}
            isActive={filter === "girl"}
          >
            Девочкам
          </Button>
          <Button
            type="select"
            name="shoes"
            clicked={handleFilter}
            isActive={filter === "shoes"}
          >
            Обувь
          </Button>
          <Button
            type="select"
            name="other"
            clicked={handleFilter}
            isActive={filter === "other"}
          >
            Разное
          </Button>
        </Styled.Filter>
        <DeliveryInfo />

        <Styled.Display>
          {loading ? (
            <Spinner />
          ) : (
            filteredItems.map(
              ({ id, image, description, size, manufacturer }) => {
                return (
                  <Item
                    key={id}
                    src={image ? image : NoPhoto}
                    description={description}
                    size={size}
                    manufacturer={manufacturer}
                  />
                );
              }
            )
          )}
        </Styled.Display>
        <SideFilter clicked={handleFilter} selected={filter} />
      </Styled.Container>
      <Footer />
    </>
  );
};
