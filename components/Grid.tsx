import React from 'react'
import styles from '@/styles/Grid.module.scss'

// Column component

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps {
  xs?: ColSize,
  sm?: ColSize,
  md?: ColSize,
  lg?: ColSize,
  xl?: ColSize,
  children?: any
  style?: React.CSSProperties
};

const Col = (props: any) => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    children
  } = props;


  const classes = `col` +
                  (xs ? ` col--xs-${ xs }` : "") +
                  (sm ? ` col--sm-${ sm }` : "") +
                  (md ? ` col--md-${ md }` : "") +
                  (lg ? ` col--lg-${ lg }` : "") +
                  (xl ? ` col--xl-${ xl }` : "");

  return (<div className={ classes } style={ props.style }>{ children }</div>);
};

// Grid component

type GridItemAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

type GridItemJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface GridProps {
  alignItems?: GridItemAlignment,
  justifyItems?: GridItemJustification,
  expanded?: boolean,
  children?: React.ReactElement<ColProps>[] | React.ReactElement<ColProps>,
  style?: React.CSSProperties,
};

const Grid = (props: GridProps) => {

  const {
    alignItems,
    justifyItems,
    expanded,
    children,
    style,
  } = props;

  const classes = "grid" +
                  (expanded ? " grid--expanded" : "") +
                  (alignItems === "center" ? " grid--align-center" : "") +
                  (justifyItems === "center" ? " grid--center" : "") +
                  (justifyItems === "space-between" ? " grid--space-between" : "");

  return (
    <div className={ classes } style={ props.style }>{ children }</div>
  );
};

export { Col, Grid };

