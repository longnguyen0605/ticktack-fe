import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AdobeIndesign = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M8.5 8v8" />
        <Path d="M15.5 12v3.4a.6.6 0 0 1-.6.6h-1.4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zm0 0V9" />
      </G>
    </Svg>
  );
};
