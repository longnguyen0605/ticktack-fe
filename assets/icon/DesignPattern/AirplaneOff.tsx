import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AirplaneOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m9.881 9.887-7.099 4.437a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l.458.115M10.5 7.5v-3A1.5 1.5 0 0 1 12 3v0a1.5 1.5 0 0 1 1.5 1.5v4.667a.6.6 0 0 0 .282.51l7.436 4.647a.6.6 0 0 1 .282.508v.9a.6.6 0 0 1-.745.582l-2.006-.502M3 3l18 18" />
      </G>
    </Svg>
  );
};
