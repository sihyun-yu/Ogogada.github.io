import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import MenuChangeItem from "./MenuChangeComponent.jsx"
import RefundItem from "./RefundComponent.jsx"
import GifticonItem from "./GifticonComponent.jsx"

import { MenuStore } from "../../../stores";
import { NumberStore } from "../../../stores";
import { HistoryStore } from "../../../stores";

import { Store } from "../../../stores";
import GifticonDialog from "./GifticonDialogComponent.jsx"
import RefundDialog from "./RefundDialogComponent.jsx"

import "../../../stylesheets/MenuList.css";

var menuchangebutton_style = {
  background: "#E0E0E0",
}

const MenuListComponent = props => {
  console.log(props.level);
  return (
    <div className="menus__container">
      <Subscribe to={[MenuStore, NumberStore, HistoryStore]}>
        {(menu, number, history) => (
          <div className="allcomponent-container">
          <div className="menus">
            {menu.state.menus.map((menuItem, index) => (
              <MenuItem 
                key={index + menuItem[3] * 8}
                id={index + menuItem[3] * 8}
                menu={menuItem}
                handleAddSelectedMenu={menu.addSelectedMenu.bind(menu)}
                level={props.level}
                refreshValues={menu.refreshValues.bind(menu)}
                historyCheck={history.increaseIndex.bind(history)}
                historyList={history.state.historyList[props.level]}
                historyIndex={history.state.historyIndex}
              />
            ))}
            <RefundItem
            level={props.level}
            handleRefundDialog = {menu.openRefund.bind(menu)}
            id={0}
            historyCheck={history.increaseIndex.bind(history)}
            historyList={history.state.historyList[props.level]}
            historyIndex={history.state.historyIndex}
            />
            <GifticonItem
            level={props.level}
            handleGifticonDialog={menu.openGifticon.bind(menu)}
            id={0}
            historyCheck={history.increaseIndex.bind(history)}
            historyList={history.state.historyList[props.level]}
            historyIndex={history.state.historyIndex}
            />
            <MenuChangeItem
            status={"left"}
            style={menuchangebutton_style}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            id={0}
            level={props.level}
            historyCheck={history.increaseIndex.bind(history)}
            historyList={history.state.historyList[props.level]}
            historyIndex={history.state.historyIndex}
            />
            <MenuChangeItem
            status={"right"}
            style={menuchangebutton_style}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            id={1}
            level={props.level}
            historyCheck={history.increaseIndex.bind(history)}
            historyList={history.state.historyList[props.level]}
            historyIndex={history.state.historyIndex}

            />
          </div>
          <div>
            <GifticonDialog
            open={menu.state.gifticonOpen}
            display={menu.state.display}
            handleGifticonDialog={menu.closeGifticon.bind(menu)}
            cnt={menu.state.cnt}
            closeGifticon={menu.closeGifticon.bind(menu)}
            checkGifticonCode={menu.checkGifticonCode.bind(menu)}
            tryAgain={menu.state.tryAgain}
            />
          </div>
          <div>
            <RefundDialog
            open={menu.state.refundOpen}
            handleRefundDialog={menu.closeRefund.bind(menu)}
            closeRefund={menu.closeRefund.bind(menu)}
            selectRefund={menu.selectRefund.bind(menu)}
            confirm = {menu.confirm.bind(menu)}
            isConfirmed = {menu.state.isConfirmed}
            refundIdx = {menu.state.refundIdx}
            />
          </div>
        </div>
        )}
      </Subscribe>
    </div>
  );
};

export default MenuListComponent;
