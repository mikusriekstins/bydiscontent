
// Column component

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps {
  xs?: ColSize,
  sm?: ColSize,
  md?: ColSize,
  lg?: ColSize,
  xl?: ColSize,
  order: number
};

const Col = (props: any) => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    order,
    children
  } = props;

  return (
    <div className="col">
      { children }
    </div>
  );
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
};

const Grid = (props: any) => {

  const {
    alignItems,
    justifyItems,
    expanded,
    children
  } = props;

  return (
    <div>{ children }</div>
  );
};

export { Col, Grid };

