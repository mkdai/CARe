import React from "react";
import { FormGroup, ControlLabel, FormControl, Col } from "react-bootstrap";

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <Col componentClass={ControlLabel} xs={3}>
        {label}
      </Col>
      <Col xs={9}>
        <FormControl {...props} />
      </Col>
    </FormGroup>
  );
};

export default FieldGroup;
