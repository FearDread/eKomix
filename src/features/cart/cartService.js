import { cruds } from "@feardread/crud-service";

export const addToCart = (cart, product) => async(dispatch) => {
        const existingItem = state.items.find(
          (item) => item.productID === product.productID
        );
        if (existingItem) {
          if (existingItem.quantity < MAX_QUANTITY) {
            existingItem.quantity += 1;
            state.totalAmount += product.price;
          }
        } else {
          state.items.push({ ...product, quantity: 1 });
          state.totalAmount += product.price;
        }
        dispatch(cruds.update('cart', product.cart._id))
      },
      updateQuantity(cart, product) {
        const { productID, quantity } = action.payload;
        const itemToUpdate = state.items.find(
          (item) => item.productID === productID
        );
        if (itemToUpdate) {
          const difference = quantity - itemToUpdate.quantity;
          if (quantity <= MAX_QUANTITY) {
            itemToUpdate.quantity = quantity;
            state.totalAmount += difference * itemToUpdate.productPrice;
          } else {
            itemToUpdate.quantity = MAX_QUANTITY;
            state.totalAmount +=
              (MAX_QUANTITY - itemToUpdate.quantity) * itemToUpdate.productPrice;
          }
        }
      },
      removeFromCart(state, action) {
        const productId = action.payload;
        const itemToRemove = state.items.find(
          (item) => item.productID === productId
        );
        if (itemToRemove) {
          state.totalAmount -= itemToRemove.productPrice * itemToRemove.quantity;
          state.items = state.items.filter(
            (item) => item.productID !== productId
          );
        }
      },
}