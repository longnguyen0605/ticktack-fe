import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Label = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M3 17.4V6.6a.6.6 0 0 1 .6-.6h13.079c.2 0 .388.1.5.267l3.6 5.4a.6.6 0 0 1 0 .666l-3.6 5.4a.6.6 0 0 1-.5.267H3.6a.6.6 0 0 1-.6-.6Z"
        strokeWidth="1.5"
      />
    </Svg>
  );
};