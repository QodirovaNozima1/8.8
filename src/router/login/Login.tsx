import React from 'react';
import type { FormProps } from 'antd';
import { Button,Form, Input } from 'antd';
import { request } from '../../api';


type FieldType = {
  email?: string;
  password?: string;
};



const Login: React.FC = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
       request
       .post(`/admin/auth/signin`,values)
       .then((res)=>{
        console.log(res?.data?.data?.access_token);
        
       })
      };
      
      return(
        <div className='container mx-auto mt-10'>
          <h1 className='text-2xl text-green-950 font-bold'>Log in </h1>
<Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
}


export default Login;