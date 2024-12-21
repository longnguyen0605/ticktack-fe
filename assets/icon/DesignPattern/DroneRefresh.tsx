import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DroneRefresh = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="m14.5 12.5.426-3.834A.6.6 0 0 0 14.33 8H9.67a.6.6 0 0 0-.596.666l.867 7.8a.6.6 0 0 0 .596.534H11" />
        <Path
          d="M4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path
          d="M4.5 4.5 9 8M4.5 19.5l5-4M19.5 4.5 15 8"
          strokeLinejoin="round"
        />
        <Path
          d="M4.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M19.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        />
        <Path
          d="M21.667 16.667C21.048 15.097 19.635 14 17.99 14c-1.759 0-3.253 1.255-3.794 3"
          strokeLinejoin="round"
        />
        <Path
          d="M19.996 16.772h1.405a.6.6 0 0 0 .6-.6V14.55M14.333 19.333C14.952 20.903 16.365 22 18.01 22c1.759 0 3.253-1.255 3.794-3"
          strokeLinejoin="round"
        />
        <Path
          d="M16.006 19.228H14.6a.6.6 0 0 0-.6.6v1.622"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
