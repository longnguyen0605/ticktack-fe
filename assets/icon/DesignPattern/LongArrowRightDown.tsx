import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LongArrowRightDown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M19 13.5 15.5 17 12 13.5" />
        <Path d="M15.5 17v-6a4 4 0 0 0-4-4h-7" />
      </G>
    </Svg>
  );
};
