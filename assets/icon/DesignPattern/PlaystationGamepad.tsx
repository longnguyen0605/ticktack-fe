import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PlaystationGamepad = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17.5 17.5c2.5 3.5 6.449.915 5.5-2.5-1.425-5.129-2.2-7.984-2.603-9.492A2.03 2.03 0 0 0 18.439 4H5.562c-.918 0-1.718.625-1.941 1.515C2.78 8.863 2.033 11.802 1.144 15c-.948 3.415 3 6 5.5 2.5" />
        <Path d="M16 4v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4M8 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </G>
    </Svg>
  );
};
