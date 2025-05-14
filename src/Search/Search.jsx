import "./Search.scss";
import search from "../assets/searchImages/search.svg";
export default function Search(props) {
    
    const { inputText, setInputText } = props
    function changeInput(event){
        setInputText(event.target.value)
    }
    return (
        <section className="search centered container">
            <div className="search__field">
                <label htmlFor="search">
                    <img width={24} height={24} src={search} alt="search" />
                </label>
                <input
                    value={inputText}
                    className="search__input"
                    id="search"
                    type="text"
                    placeholder="Type to filter by Hero"
                    onChange={changeInput}
                />
            </div>
        </section>
    );
}
