import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AirplaneHelix45deg = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeWidth="1.5"
      >
        <Path d="M14.12 14.121A3 3 0 1 0 9.877 9.88a3 3 0 0 0 4.243 4.242" />
        <Path
          d="M9.878 9.879s-2.803.009-4.243-1.415c-1.408-1.41-2.864-2.793-1.414-4.242 1.378-1.377 2.81-.015 4.243 1.414 1.405 1.402 1.414 4.243 1.414 4.243M14.12 9.879s-.009-2.803 1.415-4.243c1.41-1.409 2.794-2.864 4.243-1.414 1.376 1.378.014 2.81-1.415 4.242-1.401 1.406-4.242 1.415-4.242 1.415M9.88 14.121s.009 2.803-1.415 4.243c-1.41 1.409-2.794 2.864-4.242 1.414-1.377-1.378-.015-2.81 1.414-4.242 1.401-1.406 4.242-1.415 4.242-1.415M14.122 14.121s2.803-.009 4.243 1.415c1.409 1.41 2.864 2.793 1.414 4.242-1.378 1.377-2.81.015-4.242-1.414-1.406-1.402-1.415-4.243-1.415-4.243"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
};
