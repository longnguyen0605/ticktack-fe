import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BoxIso = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinejoin="round" strokeWidth="1.5">
        <Path d="m3 6.5 9 4m9-4-9 4m0 11v-11" />
        <Path
          d="M3 17.11V6.89a.6.6 0 0 1 .356-.548l8.4-3.734a.6.6 0 0 1 .488 0l8.4 3.734A.6.6 0 0 1 21 6.89v10.22a.6.6 0 0 1-.356.548l-8.4 3.734a.6.6 0 0 1-.488 0l-8.4-3.734A.6.6 0 0 1 3 17.11"
          strokeLinecap="round"
        />
        <Path
          d="m7.5 4.5 8.644 3.842a.6.6 0 0 1 .356.548v3.61"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
