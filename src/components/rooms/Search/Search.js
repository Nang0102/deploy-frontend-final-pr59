import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./Search.css";
import CloseIcon from "@mui/icons-material/Close";

export const Search = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search-title">
      <div className="search">
        <strong>Tìm kiếm</strong>

        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice().map((value, key) => {
              console.log(value.image);
              return (
                <div>
                  <a
                    className="dataItem"
                    // href={`${window.location.origin.toString()}/san-pham/${
                    //   value.id
                    // }`}
                    href={"http://127.0.0.1:5000/user/login"}
                    rel="noopener"
                  >
                    <p> {value.name}</p>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
