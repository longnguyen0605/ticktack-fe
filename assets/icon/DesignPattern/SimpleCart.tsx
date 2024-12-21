import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SimpleCart = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 6h19l-3 10H6zm0 0-.75-2.5M11 19.5a1.5 1.5 0 0 1-3 0M17 19.5a1.5 1.5 0 0 1-3 0" />
      </G>
    </Svg>
  );
};
