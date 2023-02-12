import CartEmpty from "./CartEmpty";

import CartFull from "./CartFull";
const CartPage = ({
    add,
    setIsCart,
    removeItemCart,
    onClickOrders,
    addShoping,
}) => {
    return (
        <div className='overlay'>
            {!add.length ? (
                <CartEmpty />
            ) : (
                <CartFull
                    add={add}
                    setIsCart={setIsCart}
                    removeItemCart={removeItemCart}
                    onClickOrders={onClickOrders}
                />
            )}
        </div>
    );
};
export default CartPage;
