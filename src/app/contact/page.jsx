'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './page.module.css';
import Image from 'next/image';

// export const metadata = {
//   title: 'Blog-Mania Contact Information',
//   description: 'This is Contact Page',
// };

const Contact = () => {
  // EmailJS
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        result => {
          // e.target.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt='contact'
            fill={true}
            className={styles.image}
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type='text'
            name='user_name'
            className={styles.input}
            placeholder='name'
          />
          <input
            type='email'
            name='user_email'
            className={styles.input}
            placeholder='email'
          />
          <textarea
            name='message'
            className={styles.textArea}
            placeholder='message'
            cols='30'
            rows='10'
          ></textarea>
          <button className={styles.button} onClick={sendEmail}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
