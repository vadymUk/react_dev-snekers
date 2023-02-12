function Search({ changeSearch, value, onKeyDown }) {
    return (
        <div className='container'>
            <ul className='search__wrapper'>
                <li className='search__title'>Усі кросівки</li>
                <li className='search__input'>
                    <input
                        placeholder=' Пошук...'
                        className='search__input-item'
                        onChange={changeSearch}
                        value={value}
                        onKeyDown={onKeyDown}
                    ></input>
                </li>
            </ul>
        </div>
    );
}

export default Search;
