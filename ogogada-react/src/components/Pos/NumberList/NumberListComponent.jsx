import React from "react";
import { Subscribe } from "unstated";
import NumberItem from "./NumberItemComponent.jsx";
import { NumberStore } from "../../../stores";
import { MenuStore } from "../../../stores"
import "../../../stylesheets/NumberList.css";

var divStyle = {
  background: "#EAD1D1",
  padding: "1px"
};

const NumberListComponent = props => {
  return (
    <div className="number-list__container">
      <Subscribe to={[NumberStore, MenuStore]}>
        {(number, menu) => (
          <div className="number-list">
            {number.state.numbers.map((numberItem) => (
              <NumberItem
                number={numberItem}
                currentMenuID={menu.state.currentMenuID}
                changeNumberbyPad = {menu.changeNumberbyPad.bind(menu)}
                numbersByPad = {menu.state.numbersByPad}
              />
            ))}
          </div>
        )}
      </Subscribe>
    </div>
  );
};

export default NumberListComponent;
