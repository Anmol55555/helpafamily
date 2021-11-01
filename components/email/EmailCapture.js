import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import EmailCaptureHelper from './EmailCaptureHelper';
import { useContextTheme } from '../ThemeContext';

export default function EmailCapture({ nextComponent, updateData }) {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    console.log(email);
    //backend todo
  };

  const handleSubmit = () => {
    updateData({ Email: email });
    handleEmailSubmit();
    nextComponent();
    setEmail('');
  };

  const { theme } = useContextTheme();
  return (
    <>
      <EmailCaptureHelper
        data={'Please submit your email to get on our email list'}
      >
        <div className="input-email">
          <input
            className="mx-5 py-2 border-2 text-black"
            onChange={(value) => {
              setEmail(value.target.value);
            }}
            placeholder="Enter Your Email"
            value={email}
          />
          <button
            className={`${theme === 'dark' ? 'bg-white' : ''} `}
            type="submit"
          >
            <div
              className="btn btn-accent"
              disabled={!email}
              onClick={handleSubmit}
            >
              <BsArrowRight className="inline-block w-7 h-10" />
            </div>
          </button>
        </div>
      </EmailCaptureHelper>

      <style jsx>{`
        .input-email {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}