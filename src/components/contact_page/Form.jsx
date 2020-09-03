import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import './Form.css';
import { connect } from "react-redux";
import { func } from 'prop-types';


class Form1 extends Component {
  // state = {
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // }

  handleSubmit(e) {
    e.preventDefault()
    const name = this.props.name;
    const email = this.props.email;
    const message = this.props.message;
    const subject = this.props.subject;

    console.log(this.props.name)
    console.log(this.props.email)
    console.log(message)
    let fullMail = {
      from_email: email,
      from_name: name,
      to_name: 'jules.pochynok@gmail.com',
      subject: subject,
      message_html: message,
     }

     emailjs.send(
      'gmail',
      'meet_exo',
      fullMail,
      'user_ytmBCVKpDoubj7IIcjuip',
      '3efc58fb474fdcd379ea7c6c6f87bc4c'
     )
     this.resetForm()
  }  

  resetForm() {
    // this.setState({
    //   name: '',
    //   email: '',
    //   subject: '',
    //   message: '',
    // })
    this.props.dispatch({ type: "RESET"});
  }

  handleChangeName = (param, e) => {
    this.props.dispatch({ type: "NAME", arg: e.target.value});
    }

  handleChangeEmail(param, e) {
    this.props.dispatch({ type: "EMAIL", arg: e.target.value});
    }

  handleChangeSubject = (param, e) => {
    this.props.dispatch({ type: "SUBJECT", arg: e.target.value});
    }

  handleChangeMess = (param, e) => {
    this.props.dispatch({ type: "MESS", arg: e.target.value});
    }



  render() {
    return (
        <div className="form-and-desc">

          <h1 className="header1">Contact Us</h1>
          <h1 className="header2">We’d love to hear from you</h1>
          <h2 className="description">Whether you have questions about MEET EXO, suggestions, complaints, offers or anything else, our team will be happy to communicate!</h2>

          <Form className="form-full" onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="Email">
              {/* <Label className="text-muted">Your email address</Label> */}
              <Input
                type="text"
                name="email"
                value={this.props.email}
                className="text"
                onChange={this.handleChangeEmail.bind(this, "email")}
                placeholder="Enter email"
              />
            </FormGroup>

            <FormGroup controlId="Name">
              {/* <Label className="text-muted">Your name</Label> */}
              <Input
                type="text"
                name="name"
                value={this.props.name}
                className="text"
                onChange={this.handleChangeName.bind(this, 'name')}
                placeholder="Enter full name"
              />
            </FormGroup>

            <FormGroup controlId="Subject">
              {/* <Label className="text-muted">Subject</Label> */}
              <Input
                type="text"
                name="subject"
                className="text"
                value={this.props.subject}
                onChange={this.handleChangeSubject.bind(this, "subject")}
                placeholder="Enter subject"
              />
            </FormGroup>

            <FormGroup controlId="Message">
              {/* <Label className="text-muted">Message</Label> */}
              <Input
                type="textarea"
                name="message"
                className="text"
                value={this.props.message}
                onChange={this.handleChangeMess.bind(this, "message")}
                placeholder="Enter message"
              />
            </FormGroup>

            
            <Button className="Submit" variant="primary" type="submit">
            <svg><g>
                <line x2="227.62" y1="31.28" y2="31.28"></line>
                <polyline points="222.62 25.78 228.12 31.28 222.62 36.78"></polyline>
                <circle cx="224.67" cy="30.94" r="30.5" transform="rotate(180 224.67 30.94) scale(1, -1) translate(0, -61)"></circle>
            </g></svg>
            <h1 className="but-text">Submit</h1>
            </Button>
          </Form>
  </div>
    )
  }
}


const mapStateToProps = state => {
  return {
  name: state.name,
  email: state.email,
  subject: state.subject,
  message: state.message,
  };
}

export default connect( mapStateToProps)(Form1); 