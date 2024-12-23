import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DroneChargeFull = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m14.25 14.75.25-2.25.426-3.834A.6.6 0 0 0 14.33 8H9.67a.6.6 0 0 0-.596.666l.867 7.8a.6.6 0 0 0 .596.534H11"
          strokeLinecap="round"
        />
        <Path
          d="M4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path
          d="M4.5 4.5 9 8M4.5 19.5l5-4M19.5 4.5 15 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M19.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path
          d="M23 19v2M15 19v2M17 19v2M19 19v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M13 22.4v-4.8a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-6.8a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};
