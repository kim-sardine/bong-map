import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import { Container } from 'components/common';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Wrapper, ReportWrapper, ReportColumn, Fieldset } from './styles';
import 'bootstrap/dist/css/bootstrap.css';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export const Report = () => (
  <Wrapper id="report">
    <ReportWrapper as={Container}>
      <ReportColumn>
        <div style={{ textAlign: 'center' }}>
          <h3>제보하기</h3>
        </div>
        <MyForm />
      </ReportColumn>
    </ReportWrapper>
  </Wrapper>
);

const MyForm = () => {
  const [state, setState] = useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <Form
      name="report"
      method="post"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={{ marginBottom: 0 }}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="report" />
      <p hidden>
        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
      </p>
      <Form.Group as={Row} controlId="formLocation">
        <Form.Label column sm={3}>
          좌표
        </Form.Label>
        <Col sm={9}>
          <Form.Control name="location" type="text" placeholder="37.47452, 127.0384" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formAddress">
        <Form.Label column sm={3}>
          상세 주소
        </Form.Label>
        <Col sm={9}>
          <Form.Control name="address" type="text" placeholder="영동 1교 밑 스케이트장" required />
        </Col>
      </Form.Group>

      <Fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={3}>
            종류
          </Form.Label>
          <Col sm={9}>
            <Form.Check type="radio" label="철봉" name="bong_type" value="철봉" id="bong_type_1" checked />
            <Form.Check type="radio" label="평행봉" name="bong_type" value="평행봉" id="bong_type_2" />
          </Col>
        </Form.Group>
      </Fieldset>

      <Form.Group as={Row} controlId="formDescription">
        <Form.Label column sm={3}>
          개수, 높이
        </Form.Label>
        <Col sm={9}>
          <Form.Control name="description" type="text" placeholder="3개 (180~200cm)" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formNickname">
        <Form.Label column sm={3}>
          닉네임(옵션)
        </Form.Label>
        <Col sm={9}>
          <Form.Control name="nickname" type="text" placeholder="정어리" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} style={{ marginBottom: 0 }}>
        <Col sm={{ span: 10, offset: 2 }} style={{ textAlign: 'right' }}>
          <Button type="submit">제보</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
