import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Wash = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m22 5-1.954 12.314A2 2 0 0 1 18.07 19H5.93a2 2 0 0 1-1.975-1.686L2 5" />
        <Path d="M21 11c-2 0-4.5-3-4.5-3s-2.149 3-4.5 3-4.5-3-4.5-3S5 11 3 11" />
      </G>
    </Svg>
  );
};
