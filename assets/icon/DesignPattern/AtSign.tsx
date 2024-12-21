import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AtSign = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17.5 19.125A9 9 0 1 1 21 12c0 5.5-6 5.5-6 2V8" />
        <Path d="M15 12v-1.5C15 9.12 13.657 8 12 8s-3 1.12-3 2.5V12M15 12v1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5V12" />
      </G>
    </Svg>
  );
};
