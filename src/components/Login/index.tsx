import useSWR from 'swr';
import {Spinner} from '@components/Spinner';
import {FunctionComponent, useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export const LoginPage: FunctionComponent = () => {
  const count = useState(0);

  // const {data: stories} = useSWR('stories', () => ProgramService.getStories());

  useEffect(() => {});

  // if () return <Spinner />;

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-container">
            {/* // eslint-disable-line */}
            <img src="/assets/zapata.png" alt="logo-zapata" />
          </div>
          <br />
        </div>
        <div className="field-container">
          <input type="textbox" className=""></input>
          <br />
          <input type="textbox"></input>
          <br />
          <button>Iniciar sesión</button>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-image: url('/assets/mcqueen.png');
        }
        .header-container {
          padding-left: 32px;
          padding-top: 50px;
          width: 30%;
          height: 30%;
        }
        .field-container {
          display: flex;
          justify-content: center;
        }
        h2 {
          font-style: normal;
          font-weight: 300;
          font-size: 40px;
          line-height: 48px;
          margin-bottom: 3.2rem;
          color: var(--gray5);
        }
      `}</style>
    </>
  );
};
