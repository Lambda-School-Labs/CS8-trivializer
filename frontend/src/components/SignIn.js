import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { signIn, getThree } from "../actions/index";
import { connect } from "react-redux";
import {
  SigninWrapper,
  Label,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Title
} from "./primitives/SignIn";


//#TODO: ADD FORMAT VERIFICATION FOR EMAIL AND PASSWORD FIELDS
class SignIn extends Component {
  onSubmit = formProps => {
    this.props.signIn(formProps, () => {
      this.props.history.push("/games");
    });
  };

  getRound = () => {
    this.props.getThree();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <SigninWrapper>
        <Title>SIGN IN PAGE</Title>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <LabelWrapper><Label>Email</Label></LabelWrapper>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
          <LabelWrapper><Label>Password</Label></LabelWrapper>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <ButtonWrapper><Button>Sign In</Button></ButtonWrapper>
          <ButtonWrapper onClick={()=> {this.getRound()}}><div >Get Round</div></ButtonWrapper>
          <ButtonWrapper><Button
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            {" "}
            Home{" "}
          </Button></ButtonWrapper>
        </form>
        {console.log("checking round", this.props.round)}
      </SigninWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { 
    round : state.round.round,
    errorMessage: state.auth.errorMessage 
  };
}
export default compose(
  connect(
    mapStateToProps,
    { signIn, getThree }
  ),
  reduxForm({ form: "signin" })
)(SignIn);
