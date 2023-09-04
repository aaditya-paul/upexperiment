import React from "react";

function EmailNotification(
  customerName,
  customerEmail,
  customerMessage
) {
  return (
    <div>
      <h2>Customer Message Notification</h2>
      <p>Dear UpExperiment Team,</p>

      <p>
        <strong>
          <u>From,</u>
          <br />
        </strong>
        <strong>Customer Name:</strong> {customerName}
        <br />
        <strong>Customer Email:</strong> {customerEmail}
        <br />
        <strong>Customer Message:</strong>
        <br />
        <pre>{customerMessage}</pre>
      </p>
    </div>
  );
}

export default EmailNotification;
