import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { createTask } from "../../actions";
import TODO_SCHEMA from "../../utils/validationShema";

function TaskForm(props) {
  const { createTaskAction } = props;

  const initialTaskValues = {
    body: "",
  };
  const submitHandler = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialTaskValues}
      onSubmit={submitHandler}
      validationSchema={TODO_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form>
            <Field name="body" placeholder="new task" />
            <button type="submit">Add Task</button>
            <br />
            <ErrorMessage name="body" component="span" />
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTaskAction: (data) => {
      dispatch(createTask(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
