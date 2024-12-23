import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EvStation = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M21 5v4" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 19V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
        <Path d="M5 10V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5" />
        <Path
          d="M11.167 11 9.5 14h4l-1.667 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
