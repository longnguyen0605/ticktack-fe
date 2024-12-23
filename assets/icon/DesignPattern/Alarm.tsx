import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Alarm = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 13h-5V8M5 3.5 7 2M19 3.5 17 2" />
        <Path d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
      </G>
    </Svg>
  );
};
