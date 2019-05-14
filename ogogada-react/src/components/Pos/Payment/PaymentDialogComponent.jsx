import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, Image } from 'semantic-ui-react'

import src2 from "../../../assets/unlock2.png";
import src3 from "../../../assets/unlock3.png";
import src4 from "../../../assets/unlock4.png";
import src5 from "../../../assets/unlock5.png";

class PaymentDialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange = (level) => {
    // console.log ("routeChange in PaymentDialog: "+this.props.history)
    // console.log ("routeChange userName "+this.props.userName)
    this.props.history.push({
      pathname : '../../../ranking/' + level,
    });
  }

  render () {
    {
      // console.log("[history check] in paymentdialogcomponent: ", this.props.history)
      // console.log("paymentdialogcomponent ", this.props);
      if (this.props.levelUp == false){
        return (
          <Dialog open={this.props.open} >
            <DialogTitle>Payment Check</DialogTitle>
            <div className="payment-dialog__details">
              {/* {props.selectedMenus.map((menu, index) => (
                <div className="payment-dialog__detail-container" key={index}>
                  <div className="payment-dialog__detail">{menu[0]}</div>
                  <div className="payment-dialog__detail">{menu[2]}</div>
                  <div className="payment-dialog__detail">{menu[1] * menu[2] + " ₩"}</div>
                </div>
              ))} */}
            </div>
            <div className="payment-dialog__total">
              Total {this.props.price}₩ {this.props.pendingCardPayment ? "in CARD" : "in CASH"}
            </div>
            {/* {props.pendingCardPayment && (
              <div className="payment-dialog__pending">
                <div className="lds-ring">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            )} */}
            <div className="payment-dialog__buttons">
              <Button
                className="payment-dialog__button"
                style={{ marginLeft: "50px", marginRight: "10px" }}
                variant="contained"
                color="primary"
                size="massive"
                // disabled={props.pendingCardPayment}
                onClick={() => {
                  this.props.flagFlip(); 
                  this.props.handleLevelUp();
                  this.props.resetPaymentMethod();
                  this.props.resetMenuDisplay();
                  }}
              >
                Submit
              </Button>
              <Button
                className="payment-dialog__button"
                style={{ marginLeft: "10px", marginRight: "50px" }}
                variant="contained"
                color="secondary"
                size="massive"
                onClick= { () => {
                  this.props.handleCancelPayment();
                  }}
              >
                Cancel
              </Button>
            </div>
          </Dialog>
        );
      }
      else {
        // console.log("enter~!!!!!!!", this.props)
        
        return (
          <Dialog open={this.props.levelUp} onClose={this.props.handleClose}>
            <DialogTitle>Level Up!</DialogTitle>
            <div className="payment-dialog__details">
              {/* {props.selectedMenus.map((menu, index) => (
                <div className="payment-dialog__detail-container" key={index}>
                  <div className="payment-dialog__detail">{menu[0]}</div>
                  <div className="payment-dialog__detail">{menu[2]}</div>
                  <div className="payment-dialog__detail">{menu[1] * menu[2] + " ₩"}</div>
                </div>
              ))} */}
            </div>
            <div className="payment-dialog__total">
              You leveled up from {this.props.curLevel} to {Number(this.props.curLevel) + 1 + "!\n"}
              
            </div>
            <div className="payment-dialog__total">
              New button
               {this.props.curLevel == 1 && <Image src={src2} size="small" centered="true"/> ||
              this.props.curLevel == 2 && <Image src={src3} size="small" centered="true"/> ||
              this.props.curLevel == 3 && <Image src={src4} size="small" centered="true"/> ||
              this.props.curLevel == 4 && <Image src={src5} size="small" centered="true"/> 
              }
            </div>
            <div className="payment-dialog__total">
              is unlocked!
            </div>
            {/* {props.pendingCardPayment && (
              <div className="payment-dialog__pending">
                <div className="lds-ring">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            )} */}
            <div className="payment-dialog__buttons">
              <Button
                className="payment-dialog__button"
                style={{ marginLeft: "10px", marginRight: "50px" }}
                variant="contained"
                color="secondary"
                size="massive"
                onClick={() => {
                  this.props.handleCompletePayment();
                  this.routeChange(this.props.curLevel);
                  this.props.flagFlip();
                  // props.goBackHistory.goBack();
                  this.props.openQuestion();
                }}
              >
                Got it!
              </Button>
            </div>
          </Dialog>
        )
      }
  }
}

// const PaymentDialogComponent = props => {
//   console.log("paymentdialogcomponent ", props);
//   if (props.levelUp == false){
//     return (
//       <Dialog open={props.open} >
//         <DialogTitle>Payment Check</DialogTitle>
//         <div className="payment-dialog__details">
//           {/* {props.selectedMenus.map((menu, index) => (
//             <div className="payment-dialog__detail-container" key={index}>
//               <div className="payment-dialog__detail">{menu[0]}</div>
//               <div className="payment-dialog__detail">{menu[2]}</div>
//               <div className="payment-dialog__detail">{menu[1] * menu[2] + " ₩"}</div>
//             </div>
//           ))} */}
//         </div>
//         <div className="payment-dialog__total">
//           Total {props.price}₩ {props.pendingCardPayment ? "in CARD" : "in CASH"}
//         </div>
//         {/* {props.pendingCardPayment && (
//           <div className="payment-dialog__pending">
//             <div className="lds-ring">
//               <div />
//               <div />
//               <div />
//               <div />
//             </div>
//           </div>
//         )} */}
//         <div className="payment-dialog__buttons">
//           <Button
//             className="payment-dialog__button"
//             style={{ marginLeft: "50px", marginRight: "10px" }}
//             variant="contained"
//             color="primary"
//             size="massive"
//             // disabled={props.pendingCardPayment}
//             onClick={() => {
//               props.flagFlip(); 
//               props.handleLevelUp();
//               props.resetPaymentMethod();
//               props.resetMenuDisplay();
//               }}
//           >
//             Submit
//           </Button>
//           <Button
//             className="payment-dialog__button"
//             style={{ marginLeft: "10px", marginRight: "50px" }}
//             variant="contained"
//             color="secondary"
//             size="massive"
//             onClick= { () => {
//               props.handleCancelPayment();
//               }}
//           >
//             Cancel
//           </Button>
//         </div>
//       </Dialog>
//     );
//   }
//   else {
//     console.log("enter~!!!!!!!", props)
    
//     return (
//       <Dialog open={props.levelUp} onClose={props.handleClose}>
//         <DialogTitle>Level Up!</DialogTitle>
//         <div className="payment-dialog__details">
//           {/* {props.selectedMenus.map((menu, index) => (
//             <div className="payment-dialog__detail-container" key={index}>
//               <div className="payment-dialog__detail">{menu[0]}</div>
//               <div className="payment-dialog__detail">{menu[2]}</div>
//               <div className="payment-dialog__detail">{menu[1] * menu[2] + " ₩"}</div>
//             </div>
//           ))} */}
//         </div>
//         <div className="payment-dialog__total">
//           You leveled up from {props.curLevel} to {Number(props.curLevel) + 1 + "!\n"}
          
//         </div>
//         <div className="payment-dialog__total">
//           New button
//            {props.curLevel == 1 && <Image src={src2} size="small" centered="true"/> ||
//           props.curLevel == 2 && <Image src={src3} size="small" centered="true"/> ||
//           props.curLevel == 3 && <Image src={src4} size="small" centered="true"/> ||
//           props.curLevel == 4 && <Image src={src5} size="small" centered="true"/> 
//           }
//         </div>
//         <div className="payment-dialog__total">
//           is unlocked!
//         </div>
//         {/* {props.pendingCardPayment && (
//           <div className="payment-dialog__pending">
//             <div className="lds-ring">
//               <div />
//               <div />
//               <div />
//               <div />
//             </div>
//           </div>
//         )} */}
//         <div className="payment-dialog__buttons">
//           <Button
//             className="payment-dialog__button"
//             style={{ marginLeft: "10px", marginRight: "50px" }}
//             variant="contained"
//             color="secondary"
//             size="massive"
//             onClick={() => {
//               props.handleCompletePayment();
//               props.history.push({
//                 pathname : '../../../home',
//                 state: {
//                     id: props.userName,
//                 }
//             });
//               // props.goBackHistory.goBack();

//             }}
//           >
//             Got it!
//           </Button>
//         </div>
//       </Dialog>
//     )
//   }

};

export default PaymentDialogComponent;
