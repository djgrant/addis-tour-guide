import { css as emotionCss } from '@emotion/core';
import cx from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';

const parseStyles = styles => props => {
  if (typeof styles === 'function') {
    const boundThemeGet = (...args) => themeGet(...args)(props);
    return parseStyles(styles(props, boundThemeGet));
  }
  if (typeof styles === 'object') return cx(styles);
  if (typeof styles === 'string') return styles;
  return;
};

export const raw = styles => props => {
  if (typeof styles === 'function') {
    const boundThemeGet = (...args) => themeGet(...args)(props);
    return raw(styles(props, boundThemeGet));
  }
  return emotionCss(styles);
};

export const switchProp = (propKey, switchMap, scaleKeyFallback) => props => {
  const scaleKey = props[propKey];
  if (!scaleKey) return;
  if (typeof switchMap === 'object') {
    const styles = switchMap[scaleKey] || switchMap[scaleKeyFallback];
    return parseStyles(styles);
  }
};

export const ifProp = (propKey, styles) => props => {
  const scaleKey = props[propKey];
  if (scaleKey === false || scaleKey === undefined) return;
  return parseStyles(styles);
};

export const inline = props => cx(props.css);

export const css = parseStyles;