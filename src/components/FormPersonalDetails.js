import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField  from 'material-ui/TextField';
import Raisedbutton from 'material-ui/RaisedButton';
import { RaisedButton } from 'material-ui';



export class FormPersonalDetails extends Component {
   continue = e => {
     e.preventDefault();
     this.props.nextStep();
   }

   back = e => {
       e.preventDefault();
       this.props.prevStep();
   };

  render() {
    const { values,handleChange } = this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
              <AppBar title= "ユーザーの詳細情報を入力" />
          <TextField
              hintText="職業を入力してください"
              floatingLabelText="職業"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              />
              <br/>
              <TextField
              hintText="住所を入力してください"
              floatingLabelText="住所"
              onChange={handleChange('city')}
              defaultValue={values.firstName}
              />
              <br/>
              <TextField
              hintText="経歴を入力してください"
              floatingLabelText="経歴"
              onChange={handleChange('bio')}
              defaultValue={values.email}
              />
              <br/>
              <RaisedButton
              label="前へ"
              primary={true}
              styles={styles.button}
              onClick={this.back}

               />

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormPersonalDetails;;
