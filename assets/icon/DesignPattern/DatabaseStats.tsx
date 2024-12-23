import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DatabaseStats = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 6v6s0 3 7 3 7-3 7-3V6" strokeLinejoin="round" />
        <Path
          d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3M11 21c-7 0-7-3-7-3v-6"
          strokeLinejoin="round"
        />
        <Path d="M15 21v-2M18 21v-4M21 21v-6" />
      </G>
    </Svg>
  );
};
