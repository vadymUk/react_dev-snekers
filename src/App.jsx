import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CartContext from "./Component/Context";
import MainPage from "./Component/MainPage";
import CartPage from "./Component/CartPage";
import ShopingPage from "./Component/ShopingPage";
import BookmarksPage from "./Component/BookmarksPage";
import EmptyOrder from "./Component/EmptyOrder";
import EmptyBookmarks from "./Component/EmptyBookmarks";
import CartOrder from "./Component/CartOrder";

function App() {
    const [snekers, setSnekers] = useState([]);
    const [marks, setMarks] = useState([]);
    const [add, setAdd] = useState([]);
    const [addShoping, setAddShoping] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const counting = add.reduce((sum, obj) => obj.price + sum, 0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://637cfd3b9c2635df8f7f0355.mockapi.io/sneker"
                );

                const json = await response.json();

                setSnekers(json);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    const onAddToMarks = (obj) => {
        if (marks.find((item) => item.id === obj.id)) {
            setMarks((prev) => prev.filter((i) => i.id !== obj.id));
        } else {
            setMarks((prev) => [...prev, obj]);
        }
    };

    const onAdd = (obj) => {
        if (add.find((item) => item.id === obj.id)) {
            setAdd((prev) => prev.filter((i) => i.id !== obj.id));
        } else {
            setAdd((prev) => [...prev, obj]);
        }
    };

    const removeItemCart = (id) => {
        setAdd((prev) => prev.filter((item) => item.id !== id));
    };

    const onClickOrders = () => {
        setAddShoping(add);
        setAdd([]);
    };
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <CartContext.Provider value={{ add }}>
                                <MainPage
                                    item={snekers}
                                    onAddToMarks={onAddToMarks}
                                    marks={marks}
                                    isLoading={isLoading}
                                    onAdd={onAdd}
                                    add={add}
                                />
                            </CartContext.Provider>
                        }
                    />
                    <Route
                        path='/shoping'
                        element={
                            <ShopingPage
                                addShoping={addShoping}
                                counting={counting}
                            />
                        }
                    />
                    <Route
                        path='/bookmarks'
                        element={
                            <CartContext.Provider
                                value={{ counting, add, setAdd }}
                            >
                                {marks.length ? (
                                    <BookmarksPage
                                        marks={marks}
                                        setMarks={setMarks}
                                    />
                                ) : (
                                    <EmptyBookmarks />
                                )}
                            </CartContext.Provider>
                        }
                    />
                    <Route
                        path='/order'
                        element={<EmptyOrder />}
                    />
                    <Route
                        path='/orderprocessed'
                        element={<CartOrder />}
                    />
                    <Route
                        path='/marks'
                        element={
                            <CartContext.Provider value={{ counting }}>
                                <EmptyBookmarks />
                            </CartContext.Provider>
                        }
                    />
                    <Route
                        path='/cart'
                        element={
                            <CartPage
                                add={add}
                                removeItemCart={removeItemCart}
                                onClickOrders={onClickOrders}
                            />
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
