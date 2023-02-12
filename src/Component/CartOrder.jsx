import { Link } from "react-router-dom";
function CartOrder() {
    return (
        <div className='cart__container'>
            <h2 className='cart__title'>Вибрані товари</h2>

            <div className='cart__wrapper-cartempty'>
                <img
                    src='./img/order.jpg'
                    alt='order'
                    className='cart__img-order'
                />
                <h2 className='cart__title-order'>Замовлення оформлено</h2>
                <p className='cart__descr-order'>
                    Ваше замовлення в коротший термін буде передане у службу
                    доставки! Дякую за замовлення в нашому інтернет магазині!
                </p>
                <Link to='/'>
                    <button className='cart__btn'>На головну</button>
                </Link>
            </div>
        </div>
    );
}

export default CartOrder;
