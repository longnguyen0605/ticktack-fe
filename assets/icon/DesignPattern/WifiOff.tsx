import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const WifiOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m12 19.51.01-.011M3 3l18 18M2 8a17 17 0 0 1 3.757-2.14M22 8c-3.572-2.68-7.854-3.763-12-3.252M5 12c1.333-1 2.889-1.667 4.518-2M19 12c-1.269-.951-2.738-1.601-4.282-1.95M8.5 15.5c2.25-1.4 4.75-1.4 7 0" />
      </G>
    </Svg>
  );
};
