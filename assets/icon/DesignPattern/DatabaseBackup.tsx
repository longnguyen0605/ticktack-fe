import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DatabaseBackup = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4 6v6s0 3 7 3q.888 0 1.631-.06M18 6v6" />
        <Path d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3M11 21c-7 0-7-3-7-3v-6M22.667 17.667C22.048 16.097 20.635 15 18.99 15c-1.759 0-3.253 1.255-3.794 3" />
        <Path d="M20.996 17.667h1.671v0c.185 0 .334-.15.334-.334v-1.888M15.333 20.333C15.952 21.903 17.365 23 19.01 23c1.759 0 3.253-1.255 3.794-3" />
        <Path d="M17.004 20.333h-1.671v0a.334.334 0 0 0-.334.334v1.888" />
      </G>
    </Svg>
  );
};
