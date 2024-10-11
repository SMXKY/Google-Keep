import "./Header.styles.css";
import { HeaderElement } from "../HeaderElement/HeaderElement.component";
import { svgs } from "../../assets/svgs";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

export const Header = () => {
  const navInfo = useSelector((state) => state.navigation);
  const user = useSelector((state) => state.user);

  const [searchText, setSearchText] = useState("");
  const [isInputFocus, setInputFocus] = useState(false);

  const searchInputRef = useRef(null);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
    searchInputRef.current.focus();
  };

  const handleSearchFocus = () => {
    setInputFocus(!isInputFocus);
  };

  return (
    <div className="header">
      <div className="logo-and-nav-info">
        <HeaderElement
          viewBox={svgs.hambugerMenu.viewBox}
          path={svgs.hambugerMenu.path}
          title={"Main menu"}
          space={1.8}
        />
        <div className="nav-info">{navInfo}</div>
      </div>

      <div className="right-header">
        <div
          className={`search-bar ${isInputFocus ? "search-bar-focused" : ""}`}
        >
          <HeaderElement
            path={svgs.search.path}
            // secondPath={svgs.search.secondPath}
            title={"Search"}
            customHeight={2.5}
            customWidth={2.5}
            customClass={"search-icon-box"}
          />

          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchText}
            onFocus={handleSearchFocus}
            onBlur={handleSearchFocus}
            value={searchText}
            ref={searchInputRef}
          />

          <span onClick={handleClearSearch}>
            <HeaderElement
              path={svgs.close.path}
              // secondPath={svgs.search.secondPath}
              title={"Clear search"}
              customHeight={2.5}
              customWidth={2.5}
              customClass={"search-icon-box"}
            />
          </span>
        </div>

        <div className="app-options">
          <div className="app-options-settings">
            <HeaderElement
              path={svgs.refresh.path}
              title={"refresh"}
              customClass={"settings-element"}
            />

            <HeaderElement
              path={svgs.grid.path}
              title={"Grid"}
              customClass={"settings-element"}
            />

            <HeaderElement
              path={svgs.settings.path}
              title={"Settings"}
              customClass={"settings-element"}
            />
          </div>
          <div className="app-user-options">
            <HeaderElement
              path={svgs.googleApps.path}
              // secondPath={svgs.search.secondPath}
              title={"Google apps"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
