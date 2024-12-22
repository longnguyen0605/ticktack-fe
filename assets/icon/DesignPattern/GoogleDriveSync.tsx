import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GoogleDriveSync = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9.143 3.004 14.857 3m-5.714.004L2 15.004m7.143-12 4.902 9.496m.812-9.5L5.575 21m9.282-18 5.356 9M5.575 21 2 15.004M5.575 21h6.429M2 15.004h10.5M22.667 17.667C22.048 16.097 20.635 15 18.99 15c-1.759 0-3.253 1.255-3.794 3" />
        <Path d="M20.994 17.772H22.4a.6.6 0 0 0 .6-.6V15.55M15.333 20.333C15.952 21.903 17.365 23 19.01 23c1.759 0 3.253-1.255 3.794-3" />
        <Path d="M17.006 20.228H15.6a.6.6 0 0 0-.6.6v1.622" />
      </G>
    </Svg>
  );
};
