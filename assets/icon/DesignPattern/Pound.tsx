import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Pound = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10.666 13.6c-1.111 2.667-2.778 5.333-5 6.4h10.556s1.666 0 2.777-1.067M15.111 13.6H4M17.334 8.8c0-2.651-2.239-4.8-5-4.8s-5 2.149-5 4.8 2.239 4.8 5 4.8" />
      </G>
    </Svg>
  );
};
