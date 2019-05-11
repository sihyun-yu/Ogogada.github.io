import React from "react";
import Button from "@material-ui/core/Button";
import "../../../stylesheets/SummaryTable.css";

var deleteButtonStyle = {
  width: "20%",
  "min-width": "0px"
}

const SummaryTableComponent = props => {
  const getTotalValue = (menu, count) => menu[1] * count;
  return (
    <div className="summary-menu-item">
      <div className="summary-menu-item__name">
        <p>{props.menu[0]}</p>
      </div>
      <div className="summary-menu-item__count">
        <div className="count__value">
          <p>{props.count}</p>
        </div>
        <div className="count__adjust">
          <div className="count__adjust-up" onClick={props.handleIncrement}>
            <p>+</p>
          </div>
          <div className="count__adjust-down" onClick={props.handleDecrement}>
            <p>-</p>
          </div>
        </div>
      </div>
      <div className="summary-menu-item__total">
        <p>{getTotalValue(props.menu, props.count)} ₩</p>
      </div>
      <div className="summary-menu-item__actual">
        <div className="summary-menu-item__actual2">
        {/* 여기에 actual value 가져오는 함수 만들고 적용시켜야함 */}
        <p>{getTotalValue(props.menu, props.count)} ₩</p>
        </div>
        <div className="summary-menu-item__delete">
          <Button
            className="summary-menu-item__delete-button"
            variant="contained"
            color="secondary"
            style={deleteButtonStyle}
            onClick={() => {
              props.handleDelete(props.id);
            }}
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SummaryTableComponent;
