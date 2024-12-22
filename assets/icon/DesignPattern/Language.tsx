import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Language = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" />
        <Path d="M13 2.05S16 6 16 12s-3 9.95-3 9.95M11 21.95S8 18 8 12s3-9.95 3-9.95M2.629 15.5h18.74M2.629 8.5h18.74" />
      </G>
    </Svg>
  );
};
