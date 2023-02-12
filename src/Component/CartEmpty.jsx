import { Link } from "react-router-dom";
function CartEmpty() {
    return (
        <div className='cart__container'>
            <h2 className='cart__title'>Вибрані товари</h2>

            <div className='cart__wrapper-cartempty'>
                <img
                    src='./img/Cartbox.png'
                    alt='cartempty'
                    className='cart__img-cartempty'
                />
                <h2 className='cart__title-cartempty'>У вас товарів не має</h2>
                <p className='cart__descr-cartempty'>
                    Щоб зробити замовлення <br /> зробіть свій вибір товару
                </p>
                <Link to='/'>
                    <button className='cart__btn'>На головну</button>
                </Link>
            </div>
        </div>
    );
}

export default CartEmpty;
