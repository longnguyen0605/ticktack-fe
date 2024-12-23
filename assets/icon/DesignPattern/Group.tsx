import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Group = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1" />
        <Path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5" />
        <Path
          d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
