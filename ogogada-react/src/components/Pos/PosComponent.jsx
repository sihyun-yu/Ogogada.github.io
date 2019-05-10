import React from "react";
import { Subscribe } from "unstated";
import { HomeStore } from "../../stores";
import "../../stylesheets/Pos.css";
import MenuList from "./MenuList/MenuListComponent.jsx";
import NumberList from "./NumberList/NumberListComponent.jsx";
import Description from "./Description/DescriptionComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Payment/PaymentComponent.jsx";

import SummaryCoupon from "./SummaryTable/SummaryCouponComponent.jsx";
import SummaryPaymentMethod from "./SummaryTable/SummaryPaymentMethodComponent.jsx";



const PosComponent = props => {
    return (
        <div className="pos">
          <div className="left-content">
            <MenuList />
            <div className="left-below__container">
              <div className="left-below-left__contatiner">
                <NumberList/>
              </div>
              <div className="left-below-right__container">
                <SummaryCoupon />
                <SummaryPaymentMethod />
                <Payment />  
              </div>
               
            </div>
          </div>
          <div className="right-content">
            <Description />
            <SummaryTable />
          </div>
        </div>
    );
};

export default PosComponent;