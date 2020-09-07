import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { TOKEN_KEY } from '../../GlobalConstants';
// import { login } from '../../actions/AuthAction';
import { setCookie } from '../../Utils/Helpers/';
import './LoginPage.scss';

const LoginPage = props => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onFinish = values => {
    setIsSubmiting(true)
    console.log('Success:', values);
    setCookie(TOKEN_KEY, 'user_token');
    props.history.push('/');
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    setIsSubmiting(false)
  };

  return (
    <div id="login-content">
      <div className="login-wrap">
        <h1>Login</h1>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="login-form"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button
            loading={isSubmiting}
            className="btn-primary login-form-button"
            htmlType="submit"
          >
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
