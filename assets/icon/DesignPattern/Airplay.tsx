import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Airplay = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M6 17H3V4h18v13h-3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M8.622 19.067 11.5 14.75a.6.6 0 0 1 .998 0l2.88 4.318a.6.6 0 0 1-.5.933H9.12a.6.6 0 0 1-.5-.933Z" />
      </G>
    </Svg>
  );
};
