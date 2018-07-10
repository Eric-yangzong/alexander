import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function IndexPage() {
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
          htmlType="submit">
          Log in
      </Button>
      </FormItem>
    </Form>
  </div>
  );
}


IndexPage.propTypes = {
};

export default connect()(IndexPage);
