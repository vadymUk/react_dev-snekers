import { useState } from "react";
import { Image } from "antd";

const Card = ({
    title,
    price,
    imageUrl,
    onHeart,
    id,
    onAdd,
    added = false,
    mark = false,
}) => {
    const [visible, setVisible] = useState(false);
    const [isActive, setActive] = useState(mark);
    const [isActiveAdd, setActiveAdd] = useState(added);

    const heartButtActive = () => {
        setActive(!isActive);
        onHeart({ title, price, imageUrl, id });
    };
    const addButtActive = () => {
        setActiveAdd(!isActiveAdd);
        onAdd({ title, price, imageUrl, id });
    };

    return (
        <>
            <div className='card'>
                <button
                    className='card__butt-heart'
                    onClick={heartButtActive}
                >
                    <img
                        className='card__butt-img'
                        src={
                            isActive
                                ? "/react_dev-snekers/img/heart_active.png"
                                : "/react_dev-snekers/img/heart_butt.svg"
                        }
                        alt='heart'
                    />
                </button>
                <div className='card__img'>
                    <Image
                        preview={{
                            visible: false,
                        }}
                        src={imageUrl}
                        onClick={() => setVisible(true)}
                    />
                </div>
                <p className='card__title'>{title}</p>
                <div className='card__wrapper-item'>
                    <div>
                        <div className='card__price'>Ціна:</div>
                        <div className='card__summ'>
                            {price.toLocaleString()} грн
                        </div>
                    </div>

                    <button
                        className='card__butt-add'
                        onClick={addButtActive}
                    >
                        <img
                            src={
                                isActiveAdd
                                    ? "/react_dev-snekers/img/add_active.svg"
                                    : "/react_dev-snekers/img/add.svg"
                            }
                            alt='add'
                        />
                    </button>
                </div>
            </div>
            <div
                style={{
                    display: "none",
                }}
            >
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    <Image src={imageUrl} />
                    <Image src='/react_dev-snekers/img/image_2.jpg' />
                    <Image src='/react_dev-snekers/img/image_3.jpg' />
                </Image.PreviewGroup>
            </div>
        </>
    );
};
export default Card;
