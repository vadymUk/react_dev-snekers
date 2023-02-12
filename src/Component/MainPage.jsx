import { useState } from "react";
import Header from "./Header";
import Carusel from "./Slider";
import Search from "./Search";
import Card from "./Card";
import Skeleton from "./Skeleton";

const MainPage = ({ item, onAddToMarks, marks, isLoading, add, onAdd }) => {
    const [search, setSearch] = useState("");
    const handleKey = (e) => {
        if (e.key === "Enter") {
            setSearch("");
        }
    };

    return (
        <>
            <Header marks={marks} />
            <Carusel />
            <Search
                changeSearch={(e) => setSearch(e.target.value)}
                value={search}
                onKeyDown={handleKey}
            />
            {isLoading ? (
                <div className='container'>
                    <Skeleton />
                </div>
            ) : (
                <div className='container'>
                    <div className='card__wrapper'>
                        {item
                            .filter((item) =>
                                item.title
                                    .toLowerCase()
                                    .includes(search.toLocaleLowerCase())
                            )
                            .map((obj) => (
                                <Card
                                    key={obj.id}
                                    id={obj.id}
                                    title={obj.title}
                                    price={obj.price}
                                    imageUrl={obj.imageUrl}
                                    onHeart={(item) => onAddToMarks(item)}
                                    isLoading={isLoading}
                                    onAdd={onAdd}
                                    add={add}
                                    added={add.some((i) => i.id === obj.id)}
                                    mark={marks.some((e) => e.id === obj.id)}
                                />
                            ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MainPage;
