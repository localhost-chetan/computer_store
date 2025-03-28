import React from "react";

type EmailTemplateProps = {
  firstName: string;
  message: string;
};

const EmailTemplate = ({ firstName, message }: EmailTemplateProps) => {
  return (
    <div>
      <h1 className={`text-2xl font-bold`}>Hello {firstName}</h1>

      <p className={``}>{message}</p>
    </div>
  );
};

export default EmailTemplate;
