import styles from '../styles/Button.module.scss'

interface ButtonProps {
  url?: string,
  primary?: boolean,
  children?: any,
  style?: ElementCSSInlineStyle
};

const Button = (props: ButtonProps) => {
  const {
    url,
    children,
    style,
    primary
  } = props;

  return (
    <a href={ url } className={ styles.button }>{ children }</a>
  )
};

export default Button;
