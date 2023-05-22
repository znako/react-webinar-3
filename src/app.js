import React, { useCallback, useState } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import { plural, priceFormat } from "./utils";
import Modal from "./components/modal";
import Cart from "./components/cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cartList = store.getState().cart.cartList;
  const cartCost = store.getState().cart.cartCost;

  const [modalVisible, setModalVisible] = useState(false);

  const callbacks = {
    onAddItemToCart: useCallback(
      (code) => {
        store.addItemToCart(code);
      },
      [store]
    ),
    onDeleteItemFromCart: useCallback(
      (code) => {
        store.deleteItemFromCart(code);
      },
      [store]
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls onClick={() => setModalVisible(true)}>
        <>
          В корзине:{" "}
          <span className="Controls-quantity">
            {cartList.length !== 0
              ? `${cartList.length} ${plural(cartList.length, {
                  one: "товар",
                  few: "товара",
                  many: "товаров",
                })} / ${priceFormat(cartCost)}`
              : "пусто"}
          </span>
        </>
      </Controls>
      <List
        list={list}
        onClick={callbacks.onAddItemToCart}
        btnTitle="Добавить"
      />
      <Modal
        isVisible={modalVisible}
        setVisible={setModalVisible}
        title="Корзина"
      >
        <Cart
          cartList={cartList}
          onDeleteItemFromCart={callbacks.onDeleteItemFromCart}
          cartCost={cartCost}
        />
      </Modal>
    </PageLayout>
  );
}

export default App;
