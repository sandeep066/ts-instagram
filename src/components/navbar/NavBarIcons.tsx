import React, { useReducer } from "react";
import { HomeIcon } from "../../assets/icons/navbar/HomeIcon";
import { SearchIcon } from "../../assets/icons/navbar/SearchIcon";
import { CompassIcon } from "../../assets/icons/navbar/CompassIcon";

import "./styles/navbar-icons.scss";

interface NavBarIconsProps {
  className?: string;
}

type IconType = "home" | "search" | "explore";

interface IconState {
  [key: string]: boolean;
}

type Action = { type: "SELECT_ICON"; payload: IconType };

const initialState: IconState = {
  home: true, // Set the initial active icon
  search: false,
  explore: false,
};

const iconReducer = (state: IconState, action: Action): IconState => {
  switch (action.type) {
    case "SELECT_ICON":
      const newState: IconState = {};
      for (const key in state) {
        newState[key] = key === action.payload ? !state[key] : false;
      }
      return newState;
    default:
      return state;
  }
};

const NavBarIcons: React.FC<NavBarIconsProps> = ({ className }) => {
  const [iconState, dispatch] = useReducer(iconReducer, initialState);

  const handleIconClick = (icon: IconType) => {
    dispatch({ type: "SELECT_ICON", payload: icon });
  };

  return (
    <div className={`${className || ""}`}>
      <span
        className={`navbar-icons-text ${iconState.home ? "active" : ""}`}
        onClick={() => handleIconClick("home")}
      >
        <HomeIcon isHomeClicked={iconState.home} />
        <span className={`icon-text ${iconState.home ? "bold-text" : ""}`}>
          Home
        </span>
      </span>
      <span
        className={`navbar-icons-text ${iconState.search ? "active" : ""}`}
        onClick={() => handleIconClick("search")}
      >
        <SearchIcon isSearchClicked={iconState.search} />
        <span className={`icon-text ${iconState.search ? "bold-text" : ""}`}>
          Search
        </span>
      </span>
      <span
        className={`navbar-icons-text ${iconState.explore ? "active" : ""}`}
        onClick={() => handleIconClick("explore")}
      >
        <CompassIcon isCompassClicked={iconState.explore} />
        <span className={`icon-text ${iconState.explore ? "bold-text" : ""}`}>
          Explore
        </span>
      </span>
    </div>
  );
};

export default NavBarIcons;
