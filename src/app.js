import React, { useCallback, useState } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import { plural } from "./utils";
import Modal from "./components/modal";

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
      <Head title="Приложение на чистом JS" />
      <Controls onClick={() => setModalVisible(true)}>
        <p>
          В корзине:{" "}
          <strong>
            {cartList.length !== 0
              ? `${cartList.length} ${plural(cartList.length, {
                  one: "товар",
                  few: "товара",
                  many: "товаров",
                })} / ${new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 0,
                }).format(cartCost)}`
              : "пусто"}
          </strong>
        </p>
      </Controls>
      <List
        list={list}
        onClick={callbacks.onAddItemToCart}
        btnTitle="Добавить"
      />
      <Modal isVisible={modalVisible} setVisible={setModalVisible}>
        <Head title="Корзина" />
        <List
          list={cartList}
          btnTitle="Удалить"
          onClick={callbacks.onDeleteItemFromCart}
        />
      </Modal>
    </PageLayout>
  );
}

export default App;
