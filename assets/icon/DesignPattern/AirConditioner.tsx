import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AirConditioner = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 3.6V11H2V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6M18 7h1M2 11l.79 2.584A2 2 0 0 0 4.702 15H6M22 11l-.79 2.584A2 2 0 0 1 19.298 15H18M9.5 14.5s0 7-3.5 7M14.5 14.5s0 7 3.5 7M12 14.5v7" />
      </G>
    </Svg>
  );
};
