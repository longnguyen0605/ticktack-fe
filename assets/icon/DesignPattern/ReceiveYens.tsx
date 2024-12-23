import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ReceiveYens = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 12h-8m0 0 3.84-4M13 12l3.84 4M3 13h8M3 7l4 5.5M11 7l-4 5.5m0 0V18M3 15h8" />
      </G>
    </Svg>
  );
};
