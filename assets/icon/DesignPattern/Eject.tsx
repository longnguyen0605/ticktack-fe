import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Eject = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M19 14H5l6.21-7.985a1 1 0 0 1 1.58 0z"
          strokeLinejoin="round"
        />
        <Path d="M5 18h14" strokeLinecap="round" />
      </G>
    </Svg>
  );
};
