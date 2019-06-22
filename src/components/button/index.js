import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';
import PropTypes from 'prop-types';

export const TYPES = {
  PRIMARY: 'btnprimary',
  WARNING: 'btnwarning',
  DANGER: 'btndanger',
  SUCCESS: 'btnsuccess',
  DEFAULT:'btndefault'
};

export const SIZES = {
  SMALL: 'btnsmall',
  MEDIUM: 'btnmedium',
  LARGE: 'btnlarge'
};

const BaseButton = ({ 
  text, 
  onClick, 
  type, 
  disabled, 
  buttonType,
  buttonSize
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={classnames(styles.btn, styles[buttonType],styles[buttonSize || SIZES.MEDIUM ])}
  >
    {text}
  </button>
);

BaseButton.propTypes = {
  text:PropTypes.string.isRequired,
  onClick:PropTypes.func,
  type:PropTypes.string,
  disabled:PropTypes.bool,
  buttonType:PropTypes.string,
  buttonSize:PropTypes.string
};

export const Primary = props => (
  <BaseButton { ...props } buttonType={TYPES.PRIMARY} />
);
export const Warning = props => (
  <BaseButton { ...props } buttonType={TYPES.WARNING} />
);
export const Danger = props => (
  <BaseButton { ...props } buttonType={TYPES.DANGER} />
);
export const Success = props => (
  <BaseButton { ...props } buttonType={TYPES.SUCCESS} />
);
export const Default = props => (
  <BaseButton { ...props } buttonType={TYPES.DEFAULT} />
);