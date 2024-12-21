import Svg, { Path, Rect, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MicWarning = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M21 14v4M21 22.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect width="6" height="12" x="7" y="2" rx="3" />
        <Path
          d="M3 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M10 18v4m0 0H7m3 0h3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
