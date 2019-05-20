import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm.js';
import Success from './Success';


export class UserForm extends Component {
    state = {
        step: 1,
        
        lastName: '',   //名字
        firstName: '',  //名前//
        email: '',
        occupation: '',
        city: '',
        bio: ''
      };
  
  // Proceed to next step 次のステップに進む
  nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
  }
 
    // Go back to prev step 前のステップに戻る 
    prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
    }
   
     //Handle fields Change  入力フォームの変更
      handleChange = input => e => {
        this.setState({ [input]: e.target.value});
      }; 


    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, 
         bio } = this.state;
           const values =  {firstName, lastName, email, occupation, city, bio}

       switch(step) {
           case 1:
           return (
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
              );
            case 2:
             return (
             <FormPersonalDetails
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
              values={values}
             />
             );

            case 3 :
            return <h1>COnfirm</h1>
            case 4 :
             return <h1>Succsess</h1>
        }
  }
}




export default UserForm;
