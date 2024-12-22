import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DroneError = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z" />
        <Path
          d="M4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path
          d="M4.5 4.5 9 8M4.5 19.5l5-4M19.5 4.5 15 8M14.5 15.5l1.25 1"
          strokeLinejoin="round"
        />
        <Path
          d="M4.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M19.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path
          d="m18 22.243 2.121-2.122m0 0L22.243 18m-2.122 2.121L18 18m2.121 2.121 2.122 2.122"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
