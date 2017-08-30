import React from 'react';

export default class DashboardTabs extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className="col-lg-12" id="dashboard-tabs">
      
        <ul className="nav nav-tabs nav-justified" role="tablist">
          <li id="history-tab" role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">History</a></li>
          <li id="reminders-tab" role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reminders</a></li>
          <li id="appointments-tab" role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Appointments</a></li>
          <li id="summary-tab" role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Summary</a></li>
        </ul>
      
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            This is the history content.
          </div>
          <div role="tabpanel" className="tab-pane" id="profile">
            This is the reminders content.
          </div>
          <div role="tabpanel" className="tab-pane" id="messages">
            This is the appointments content.
          </div>
          <div role="tabpanel" className="tab-pane" id="settings">
            This is the summary content.
          </div>
        </div>
      
      </div> 
    );
  }
}