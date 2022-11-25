import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {

  email: '',
  fullname: '',
  username: '',
  password: '',
  phonenumber: '',
};

export default function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleAlert = () => {
    setShow(false);
    alert(`${formik.values.fullname}
    \n${formik.values.username}
    \n${formik.values.password}
    \n${formik.values.phonenumber}
    \n${formik.values.email}`);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({

    fullname: Yup.string()
      .required('Required')
      .matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/, 'only contain character')
      .max(40),
    username: Yup.string()
      .required('Required')
      .matches(/^[A-Za-z0-9_-]*$/, 'only contain character and number')
      .max(25)
      .min(8),
    password: Yup.string()
      .required('Required')
      .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'must be one contain number and character and dont use special character')
      .min(8)
      .max(25),
    phonenumber: Yup.string()
      .required('Required')
      .matches(/^[0-9]{9,10}$/, 'phone numbers is not true'),
    email: Yup.string()
      .email('Invalid Email format')
      .required('Required!'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>

      <Button variant="primary" onClick={handleShow}>
        Validate Form
      </Button>

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={8}>
              {/* eslint-disable max-len */}

              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                    name="fullname"
                    type="text"
                    placeholder="Lê Tường Vinh"

                  />
                </Form.Group>
                {formik.touched.fullname && formik.errors.fullname ? <div className="text-danger">{formik.errors.fullname}</div> : null}

                {/* username */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    name="username"
                    type="text"
                    placeholder="pro_player_123"

                  />
                </Form.Group>
                {formik.touched.username && formik.errors.username ? <div className="text-danger">{formik.errors.username}</div> : null}

                {/* password */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name="password"
                    type="text"
                    placeholder=""

                  />
                </Form.Group>
                {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                    name="phonenumber"
                    type="text"
                    placeholder="0909080706"

                  />
                </Form.Group>
                {formik.touched.phonenumber && formik.errors.phonenumber ? <div className="text-danger">{formik.errors.phonenumber}</div> : null}

                {/* email */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name="email"
                    type="email"
                    placeholder="name@example.com"

                  />
                </Form.Group>
                {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}

              </Form>

            </Col>

          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {formik.values.email !== '' && !formik.errors.email && formik.values.fullname !== '' && !formik.errors.fullname && formik.values.username !== '' && !formik.errors.username
          && formik.values.password !== '' && !formik.errors.password && formik.values.phonenumber !== '' && !formik.errors.phonenumber ? (
            <Button variant="primary" onClick={handleAlert}>
              Save Changes
            </Button>
            ) : null}

        </Modal.Footer>
      </Modal>
    </>
  );
}
