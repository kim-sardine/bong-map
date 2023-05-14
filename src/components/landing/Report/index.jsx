/* eslint no-console: ["error", { allow: ["log"] }] */

import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiCurrentLocation } from 'react-icons/bi';
import { Container } from 'components/common';
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
  const [formValues, setFormValues] = useState({
    bong_type: 'pullup',
  });

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formValues,
      }),
    })
      .then(() => {
        navigate(form.getAttribute('action'));
        alert('제보 완료! 금방 반영하겠습니다.');
      })
      .catch(error => alert(error));
  };

  const setCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude.toFixed(6);
          const lng = position.coords.longitude.toFixed(6);

          const currentPosition = `${lat}, ${lng}`;
          setFormValues({ ...formValues, location: currentPosition });
          console.log(formValues);
        },
        () => {
          alert('위치 확인 권한 획득에 실패하여 좌표 정보를 읽어오지 못했습니다.');
        }
      );
    }
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
        <input name="bot-field" onChange={handleChange} />
      </p>
      <Form.Group as={Row} controlId="formLocation">
        <Form.Label column sm={3}>
          위치 좌표
        </Form.Label>
        <Col sm={9}>
          <InputGroup>
            <Form.Control
              name="location"
              type="text"
              value={formValues.location}
              placeholder="36.14220, 126.11494"
              required
              onChange={handleChange}
            />
            <InputGroup.Append>
              <Button variant="outline-dark" onClick={setCurrentPosition}>
                <BiCurrentLocation />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formAddress">
        <Form.Label column sm={3}>
          상세 주소
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            name="address"
            type="text"
            placeholder="영동 1교 밑 스케이트장"
            required
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={3}>
            종류
          </Form.Label>
          <Col sm={9}>
            <Form.Check
              type="radio"
              label="철봉"
              name="bong_type"
              value="pullup"
              onChange={handleChange}
              checked={formValues.bong_type === 'pullup'}
            />
            <Form.Check
              type="radio"
              label="평행봉"
              name="bong_type"
              value="parallel"
              onChange={handleChange}
              checked={formValues.bong_type === 'parallel'}
            />
          </Col>
        </Form.Group>
      </Fieldset>

      <Form.Group as={Row} controlId="formDescription">
        <Form.Label column sm={3}>
          개수, 높이
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            name="description"
            type="text"
            placeholder="2개(210cm, 180cm)"
            required
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formNickname">
        <Form.Label column sm={3}>
          닉네임(옵션)
        </Form.Label>
        <Col sm={9}>
          <Form.Control name="nickname" type="text" placeholder="정어리" onChange={handleChange} />
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
