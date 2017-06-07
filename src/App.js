import React, {Component} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {LiveChat} from "./components/LiveChat";
import {Faq} from "./components/Faq";
import {MailUs} from "./components/MailUs";
import "./css/App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Tabs>
          <TabList>
            <Tab>
              <i className="fa fa-comment"/>Live Chat
            </Tab>
            <Tab>
              <i className="fa fa-search"/>FAQ
            </Tab>
            <Tab>
              <i className="fa fa-envelope-o"/>Mail Us
            </Tab>
            <Tab>
              <i className="fa fa-times"/></Tab>
          </TabList>
          <TabPanel>
            <LiveChat/>
          </TabPanel>
          <TabPanel>
            <Faq/>
          </TabPanel>
          <TabPanel>
            <MailUs/>
          </TabPanel>
          <TabPanel/>
        </Tabs>
      </div>
    );
  }
}

export default App;
