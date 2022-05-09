import React from 'react';
import styled from 'styled-components';
import i18next from 'i18next';

import ptLogo from '../images/locales/brazil.png';
import enLogo from '../images/locales/eua.png';

const Container = styled.div`
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 6px;

  button#active {
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 0;
    border-radius: 30px;

    &:hover {
      background: transparent;
      outline: 0;
    }

    img {
      border-radius: 30px;
      object-fit: cover;
      width: 20px;
      height: 20px;
    }
  }

  button#no-active {
    background-color: var(--green);
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 0;
    border-radius: 30px;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    img {
      border-radius: 30px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(80%);
      object-fit: cover;
      width: 20px;
      height: 20px;
    }
  }
`;

const LanguageMenu = () => {
  const changeLanguage = lng => {
    i18next.changeLanguage(lng);
  };

  return (
    <Container>
      <button
        id={i18next.language === 'pt-BR' ? 'active' : 'no-active'}
        onClick={() => changeLanguage('pt-BR')}>
        <img src={ptLogo} alt="PT" />
      </button>
      <button
        id={i18next.language === 'pt-BR' ? 'no-active' : 'active'}
        onClick={() => changeLanguage('en-US')}>
        <img src={enLogo} alt="EN" />
      </button>
    </Container>
  );
};

export default LanguageMenu;
