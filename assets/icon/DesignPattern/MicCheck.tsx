import Svg, { Path, Rect, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MicCheck = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m15.5 20.5 2 2 5-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect width="6" height="12" x="5" y="2" rx="3" />
        <Path
          d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M8 18v4m0 0H5m3 0h3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
