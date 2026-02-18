import React from 'react';
import { useContactUsDialog } from './ContactUsDialog';
import styles from './Footer.module.css';
import Stats from './Stats';

export default function Footer({ toggle, markHolucost, nodes }) {
  const { openContactUs } = useContactUsDialog();
  return (
    <footer className={styles.footer}>
      <div className={styles.help}>
        <div>
          Zoom in or out of the tree using the mouse wheel.
          <br />
          Clicking on a square will open the documents window.
          <br />
          Clicking the "Mark Holocaust Victims" button will mark those who did
          not survive the Holocaust.
          <br />
          To examine Grandpa Prince's branch, click on the small square to the
          right of his name.
        </div>

        <div />

        <div>
          <button
            onClick={toggle}
            style={{
              width: 160,
              height: 60,
              color: 'blue',
              backgroundColor: 'lightgray',
              fontSize: 20
            }}
          >
            {markHolucost ? 'הצג רגיל' : 'סמן נספים בשואה'}
          </button>

          <Stats nodes={nodes} />
        </div>
      </div>
      <div className={styles.contact}>
        David Diamant 2020-
        <button
          onClick={openContactUs}
          style={{
            color: '#404040',
            border: 'none',
            background: 'none',
            fontSize: 16
          }}
        >
          Contact us
        </button>
      </div>
    </footer>
  );
}
