import React from "react";
import "../css/Faq.css";

export const Faq = () => {
  return (
    <div className="faq-container">
      <div className="email-query">
        <div className="email-query-title">Prefer email instead?</div>
        <button><i className="fa fa-envelope-o"/>Write to us</button>
        <div className="email-query-text">We are super quick in responding to your queries.</div>
      </div>
      <div className="direct-query">
        <div className="direct-query-input">
          <i className="fa fa-search search-icon"/>
          <input type="text" placeholder="What can we help you with? Start typing your question..." autoFocus/>
        </div>
        <div className="direct-query-file-inputs">
          <div className="file-input-container">
            <i className="file-direct-icon fa fa-folder"/>
            <div className="file-input-text">Sharing Openings</div>
          </div>
          <div className="file-input-container">
            <i className="file-direct-icon fa fa-thumb-tack"/>
            <div className="file-input-text">Managing Openings</div>
          </div>
          <div className="file-input-container">
            <i className="file-direct-icon fa fa-user -o"/>
            <div className="file-input-text">Managing Candidates</div>
          </div>
        </div>
        <div className="direct-query-file-inputs">
          <div className="file-input-container">
            <i className="file-direct-icon fa fa-cog"/>
            <div className="file-input-text">Account Management</div>
          </div>
          <div className="file-input-container">
            <i className="file-direct-icon fa fa-folder"/>
            <div className="file-input-text">Sourcing Candidates</div>
          </div>
          <div className="file-input-container">
            <i className="file-direct-icon fa fa-folder"/>
            <div className="file-input-text">Reporting</div>
          </div>
        </div>
      </div>
    </div>
  )
};