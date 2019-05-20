import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField  from 'material-ui/TextField';
import Raisedbutton from 'material-ui/RadioButton';
import { RaisedButton } from 'material-ui';



export class FormUserDetails extends Component {
   continue = e => {
     e.preventDefault();
     this.props.nextStep();
   };


     render() {
    const { values,handleChange } = this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
              <AppBar title= "ユーザー情報を入力" />
          <TextField
              hintText="名字を入力してください"
              floatingLabelText="名字"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              />
              <br/>
              <TextField
              hintText="名前を入力してください"
              floatingLabelText="名前"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              />
              <br/>
              <TextField
              hintText="メールアドレスを入力してください"
              floatingLabelText="メールアドレス"
              onChange={handleChange('email')}
              defaultValue={values.email}
              />
              <br/>
              <RaisedButton
              label="次へ"
              primary={true}
              styles={styles.button}
              onClick={this.continue}

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

export default FormUserDetails;
