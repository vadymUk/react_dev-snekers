import React from "react";
import { Link } from "react-router-dom";

function CartFull({ add, removeItemCart, onClickOrders }) {
    const counting = add.reduce((sum, obj) => obj.price + sum, 0);
    return (
        <div className='cart__container'>
            <h2 className='cart__title'>Вибрані товари</h2>
            <Link to='/'>
                <button className='cart__close'>
                    <img
                        src='./img/close.png'
                        alt='close'
                    />
                </button>
            </Link>

            <div className='cart__wrapper-content'>
                {add.map((obj) => (
                    <div
                        className='cart__wrapper'
                        key={obj.id}
                    >
                        <img
                            src={obj.imageUrl}
                            alt='snekers'
                            className='cart__img'
                        />
                        <div className='cart__descr'>
                            {obj.title}
                            <span>{obj.price.toLocaleString()} грн</span>
                        </div>
                        <button
                            className='cart__button'
                            onClick={() => removeItemCart(obj.id)}
                        >
                            <img
                                src='./img/close.png'
                                alt='close'
                            />
                        </button>
                    </div>
                ))}

                <div className='card__order'>
                    <div className='cart__price'>
                        Загальна сума придбаних товарів:{" "}
                        <span>{counting.toLocaleString()} грн</span>
                    </div>
                    <Link to='/orderprocessed'>
                        <button
                            className='cart__btn'
                            onClick={onClickOrders}
                        >
                            Оформити замовлення
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartFull;
