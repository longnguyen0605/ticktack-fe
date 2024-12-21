import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TennisBallAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20.66 7c2.761 4.783 1.123 10.899-3.66 13.66S6.1 21.783 3.34 17C.577 12.217 2.216 6.101 7 3.34S17.898 2.217 20.66 7" />
        <Path d="M21.46 15.242c-4.986-3.302-7.582-7.8-7.538-13.056M10.077 21.814c-.367-5.97-2.964-10.467-7.538-13.056" />
      </G>
    </Svg>
  );
};
