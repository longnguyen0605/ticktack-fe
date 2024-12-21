import Svg, { Rect, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MicSpeaking = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Rect width="6" height="12" x="9" y="2" rx="3" />
        <Path
          d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M12 18v4m0 0H9m3 0h3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
