import React, {useState} from 'react';
import "./theme.css";
import Header from "./Header";
import SideBar from "./Sidebar";
import moment from 'moment';

const CreateBill = () => {

    const [code, setCode] = useState('001')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [pacName, setPacName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [amount, setAmount] = useState('')
    const [isShow, setIsShow] = useState(false)
    const [error, setError] = useState('')
    const [discount, setDiscount] = useState('')
    const [upgrade, setUpgrade] = useState(false)
    const [upPlan, setUpPlan] = useState('')
    const [upAmount, setUpAmount] = useState('')
    const plan = [
        {
            name:"monthly",
            amt: "1000"
        },
        {
            name: "quarterly",
            amt: "4000"
        },
        {
            name: "halfyearly",
            amt: "7000"
        },
        {
            name: "yearly",
            amt: "13500"
        }
    ]

    const handleSelectChange = (e) => {
        let packName =  e.target.value;
        let packAmt = plan.filter(val => val.name === packName);
        setPacName(packName);
        setAmount(packAmt[0]? packAmt[0].amt : 0);
    }

    const handlePlanUpgrade = (e) => {
        let upPackName = e.target.value;
        let upPackAmt = plan.filter(val => val.name === upPackName);
        setUpPlan(upPackName);
        setUpAmount(upPackAmt[0]? Number(upPackAmt[0].amt) : 0);
    }

    const handleTrainerSelect = (e) => {
        let option = e.target.value;
        setAmount(option === 'option' ? 0 : option === 'yes' ? Number(amount) + 2000 : Number(amount) - 2000);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        let isValid = validFormInput;
        setIsShow(isValid);
    }

    const handleDiscount = (e) => {
        e.preventDefault();
        let discnt = e.target.value;
        setDiscount(discnt)
    }

    const handleClickUpgrade = (e) => {
        console.log(e.target.checked)
        setUpgrade(e.target.checked)
    }

    const validFormInput = () => {
        let error = {};
        let isValid = true;

        if(!code){
            isValid= false;
            error['code'] = `please check the code.`
        }

        if(!name){
            isValid = false;
            error['name'] = `Please enter the name`
        }

        if(!phone) {
            isValid = false;
            error['phone'] = `Please enter the phone`
        }

        if(!startDate) {
            isValid = false;
            error['startDate'] = `Please enter the startDate`
        }

        if(!endDate) {
            isValid = false;
            error['endDate'] = `Please enter the endDate`
        }

        if(!amount && Number(amount) === 0) {
            isValid = false;
            error['amount'] = `Please enter the amount`
        }

        setError(error);
        return isValid;
    }

    const FormContent = () => {
        return(
            <div>
                <div className="card bill_card">
                          <div className="card-body" style={{maxWidth:"100%"}}>
                              <form onSubmit={handleAdd}>
                                  <div className="d-flex justify-content-start flex-wrap">
                                        <div className="form-group align_form" style={{width: "147px"}}>
                                            <label>Bill Id</label>
                                            <input 
                                                className="au-input au-input--full" 
                                                type="tel"
                                                value={code} 
                                                onChange = {e => setCode(e.target.value)}
                                            />
                                        </div>
        
                                        <div className="form-group align_form"  style={{width: "222px"}}>
                                            <label>Today's Date</label>
                                            <input 
                                                placeholder="Today Date"
                                                className="au-input au-input--full" 
                                                type="text" 
                                                value = {moment().format("DD/MM/YYYY hh:mm:ss")}
                                            />
                                        </div>

                                        <div className="form-group align_form" style={{width: "322px"}}>
                                                <label>Enter Name/ Code</label>
                                                <input 
                                                    className="au-input au-input--full" 
                                                    type="text" 
                                                    placeholder="Please Enter your Name/Code ..."
                                                    onChange = {e => setName(e.target.value)}
                                                />
                                        </div>

                                        <div className="form-group align_form mr_align" style={{width: "222px"}}>
                                                <label>Joining Date</label>
                                                <input 
                                                    className="au-input au-input--full" 
                                                    type="date" 
                                                    placeholder="Please Enter your Name/Code ..."
                                                    onChange = {e => setStartDate(e.target.value)}
                                                />
                                        </div>

                                        <div className="form-group align_form mr_align" style={{width: "222px"}}>
                                                <label>Ending Date</label>
                                                <input 
                                                    className="au-input au-input--full" 
                                                    type="date" 
                                                    placeholder="Please Enter your Name/Code ..."
                                                    onChange = {e => setEndDate(e.target.value)}
                                                />
                                        </div>

                                        <div className="form-group align_form mr_align">
                                            <label>Package Name</label>
                                            <select className="au-input au-input--full"  
                                                style={{position:"relative", height:"45px"}}  name="package_name"
                                                onChange = {e => handleSelectChange(e)} 
                                            >
                                                    <option value="select" selected>---Select your plan---</option>
                                                    <option value="monthly">Monthly Plan</option>
                                                    <option value="quarterly">Quarterly Plan</option>
                                                    <option value="halfyearly">Half yearly Plan</option>
                                                    <option value="yearly">Yearly Plan</option>
                                            </select>
                                        </div>

                                        <div className="form-group align_form mr_align" style={{width: "222px"}}>
                                            <label>Amount</label>
                                            <input 
                                                    className="au-input au-input--full" 
                                                    type="text" 
                                                    placeholder="Please Enter Amount ..."
                                                    value={amount}
                                                />
                                        </div>

                                        <div className="form-group align_form mr_align" style={{width: "252px"}}>
                                            <label>Trainer Needed</label>
                                            <select className="au-input au-input--full"  
                                                style={{position:"relative", height:"45px"}}  name="package_name"
                                                onChange = {e => handleTrainerSelect(e)} 
                                            >
                                                    <option value="option" selected>---Do you wanna trainer ?---</option>
                                                    <option value="yes">yes</option>
                                                    <option value="no">No</option>
                                            </select>
                                        </div>

                                        <div className="form-group align_form mr_align">
                                            <label>Phone No</label>
                                            <input 
                                                    className="au-input au-input--full" 
                                                    type="text" 
                                                    placeholder="Please Enter Phone No ..."
                                                    onChange = {e => setPhone(e.target.value)}
                                                />
                                        </div>

                                        <div className="row d-flex justify-content-between">
                                            <button 
                                                className="au-btn au-btn--green enq_btn btn_mem" 
                                                type="submit"
                                                >Add 
                                            </button>
                                        </div>
                                  </div>
                              </form>
                          </div>
                 </div>

                <div class="table-responsive table--no-card m-b-40 bill_card">
                    <table class="table table-bordered  table-earning">
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Bill ID</th>
                                <th>name</th>
                                <th class="text-center">price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { isShow &&
                                <tr>
                                    <td>{1}</td>
                                    <td>{code}</td>
                                    <td>{name}</td>
                                    <td class="text-right">
                                        <input  className="au-input au-input--full"  type="text" value={amount} style={{width:"105px"}} />
                                    </td>
                                    <td className="text-center"><i className="fa fa-trash" style={{color: "red"}} aria-hidden="true"></i></td>
                                </tr>
                            }

                            <tr>
                                <td class="text-right" colSpan="3"> Discount </td>
                                <td class="text-center">
                                    <input  
                                        type="text" class="form-control" id="exampleFormControlInput1"
                                        onChange = {e => handleDiscount(e)}
                                    />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="text-right" colSpan="3">Total Amount</td>
                                <td class="text-center">
                                    <input  
                                       type="text" class="form-control" id="exampleFormControlInput1"
                                        value={isShow ? amount : 0}
                                        />
                                </td>
                                <td></td>
                            </tr>
                           
                            <tr>
                                <td class="text-right" colSpan="3">Payment Type</td>
                                <td class="text-center" colSpan="1">
                                        <select class="form-control" 
                                            style={{height:"45px"}}  name="package_name"
                                        >
                                                <option value="select" selected>---Select Payment Type---</option>
                                                <option value="cash">Cash</option>
                                                <option value="card">Card</option>
                                                <option value="upi">UPI</option>
                                        </select>
                                    </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="text-right" colSpan="3">Do you wanna upgrage a plan ?</td>
                                <td class="text-center">
                                    <div class="custom-control custom-checkbox">
                                        <input 
                                            type="checkbox" 
                                            class="custom-control-input" 
                                            id="customCheck1" 
                                            onChange = {e => handleClickUpgrade(e)}
                                            />
                                        <label class="custom-control-label" for="customCheck1"></label>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            { upgrade &&
                                <tr>
                                    <td class="text-right" colSpan="3">Update Plan</td>
                                    <td class="text-center" colSpan="1">
                                        <select class="form-control"  
                                            style={{height:"45px"}} 
                                            onChange={e=> handlePlanUpgrade(e)}
                                        >
                                                <option value="select" selected>---Select your plan---</option>
                                                <option value="monthly">Monthly Plan</option>
                                                <option value="quarterly">Quarterly Plan</option>
                                                <option value="halfyearly">Half yearly Plan</option>
                                                <option value="yearly">Yearly Plan</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                            }

                            <tr>
                                <td class="text-right" colSpan="3">Paid Amount</td>
                                <td class="text-center">
                                     <input  
                                        className="form-control" 
                                        type="text" 
                                        value={discount ? 
                                            upgrade ? (((Number(amount) + Number(upAmount)) - ((Number(discount)/100)*(Number(amount)+Number(upAmount)))))  : 
                                            (((Number(amount) - ((Number(discount)/100)*(Number(amount)))))) 
                                            : 
                                            upgrade ? (Number(amount) + Number(upAmount)) : Number(amount) }
                                        />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="text-right"  style={{border: "none"}} colSpan="5">
                                    <button 
                                        className="au-btn au-btn--green enq_btn" 
                                        type="submit"
                                        >Place Order 
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
  
  
      return (
          <div>
              <div>
                  <Header  name="Create Bill"/>
                  <div className="bill_form">
                      {FormContent()}
                  </div>  
              </div>
          </div>
      )
}

export default CreateBill;
