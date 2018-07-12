import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function IndexPage({ dispatch }) {
  function handleLogin(id) {
    dispatch({
      type: 'indexpage/login',
      payload: id,
    });
  }
  return (<div className={styles.divbg}>
    <Form layout="inline" className={styles.form_center} >
      <FormItem >
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      </FormItem>
      <FormItem>
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit" onClick={handleLogin} >
          Log in
      </Button>
      </FormItem>
    </Form>
  </div>
  );
}

export default connect(({ indexpage }) => ({
  indexpage,
}))(IndexPage);
