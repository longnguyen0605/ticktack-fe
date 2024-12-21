import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ReceivePounds = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 12h-8m0 0 3.84-4M13 12l3.84 4M7 13c-.667 1.667-1.667 3.333-3 4h6.333s1 0 1.667-.667M9.667 13H3M11 10a3 3 0 1 0-3 3" />
      </G>
    </Svg>
  );
};
