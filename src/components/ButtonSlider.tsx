import {
  noop,
  useClickPreventionOnDoubleClick,
} from "../hooks/useClickPreventionOnDoubleClick";

interface CustomArrowProps {
  onDoubleClick?: any;
  onClick?: any;
  key?: number | string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
}
const ButtonSlider: React.FC<CustomArrowProps> = (props) => {
  const { onClick, onDoubleClick, className, style, disabled } = props;

  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    onClick,
    onDoubleClick
  );
  return (
    <button
      disabled={disabled}
      className={className}
      style={{ ...style }}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};
ButtonSlider.defaultProps = {
  onDoubleClick: noop,
  onClick: noop,
};

export default ButtonSlider;
