import React from 'react';
import { TitleStyled } from './TemplateTitle.styled';
import propTypes from 'prop-types';

export default function Title({ title }) {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
    </>
  );
}

Title.propTypes = {
  title: propTypes.string.isRequired,
};
