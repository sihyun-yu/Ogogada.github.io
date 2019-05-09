import React from "react";
import { Image, Button } from 'semantic-ui-react'

var divStyle = {
  
  padding: "1px"
};

const MenuItemComponent = props => {
  return (
      <Button
        style={divStyle}
        className="menu-item"
        onClick={() => {
          props.handleAddSelectedMenu(props.id);
        }}
      >
        <div className="menu-item__image">
          <Image className="menu-item__image__image" src='/images/americano_ice.png' size='tiny' />
        </div>
        <div className="menu-item__name">{props.menu[0]}</div>
        <div className="menu-item__price">
          <span className="price__value">{props.menu[1]}</span>
          <span className="price__unit">won</span>
        </div>
      </Button>
  );
};

export default MenuItemComponent;
