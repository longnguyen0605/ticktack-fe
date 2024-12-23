import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TriangleFlag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M8 21v-5m0 0V3.577a.6.6 0 0 1 .916-.51l8.79 5.442a.6.6 0 0 1 .017 1.009z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
