import React, {Component} from "react";
import "../css/MailUs.css";

export class MailUs extends Component {

  constructor() {
    super();
    this.state = {
      success: "",
      error: "",
      subject: "",
      message: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.showNotification = this.showNotification.bind(this);
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      subject: this.subject.value,
      message: this.message.value
    });
  }

  handleClick() {
    if (this.state.subject === "") {
      this.setState({error: "Subject is required"});
      this.showNotification(this.state.error);
    }
    else if (this.state.message === "") {
      this.setState({error: "Message can't be empty"});
      this.showNotification(this.state.error);
    }
    else {
      this.setState({
        success: "Message sent! Thanks for reaching out! Someone from our team will get back to you soon.",
        subject: "",
        message: ""
      });
      this.showNotification(this.state.success);
    }
  }

  showNotification(notification) {
    setTimeout(() => this.setState(
      {
        error: "",
        success: ""
      }), 3000);
  }

  render() {
    return (
      <div className="mailus-container">
        {this.state.success &&
        <div className="success common-style"><i className="fa fa-check"/>{this.state.success}</div>
        }
        {this.state.error &&
        <div className="error common-style"><i className="fa fa-times"/>{this.state.error}</div>
        }
        <div className="mail-to common-style"><span>To: </span>support@recruiterbox.com</div>
        <input className="subject common-style" type="text" placeholder="Subject" autoFocus value={this.state.subject}
               ref={(input) => this.subject = input} onChange={this.update}/>
        <textarea className="mail-message  common-style" placeholder="Message" rows={5} value={this.state.message}
                  ref={(messageText) => this.message = messageText} onChange={this.update}/>
        <div className="attach-send common-style">
          <div><i className="fa fa-paperclip attach-icon"/> <span>Attach files</span></div>
          <button onClick={this.handleClick} className="send">Send Mail</button>
        </div>
      </div>
    )
  }
}
