import * as React from 'react';
import { Field, ErrorMessage } from 'formik';

import styles from './ContactUsDialogForm.module.css';

console.log(styles);

export default function ContactUsDialogForm({ node }) {
  return (
    <div className={styles.dialog}>
      <h3>Contact us{node && node.name ? <>about{node.name}</> : null}</h3>

      <Field type="email" name="email" placeholder="Mile" />
      <ErrorMessage name="email" component="div" />

      <Field type="text" name="name" placeholder="Full Name" />
      <ErrorMessage name="name" component="div" />

      <Field
        type="text"
        name="message"
        component="textarea"
        rows={10}
        cols={30}
        placeholder="Message content"
      />
      <ErrorMessage name="message" component="div" />

      <div>
        <button type="submit">Send</button>
      </div>
    </div>
  );
}
