import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ElectronicsChip = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 19.4V4.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6M14 20v2.5M10 20v2.5M14 4V1.5M10 4V1.5M7 12H4.5M19.5 12H17M7 6.5H4.5M19.5 6.5H17M7 17.5H4.5M19.5 17.5H17" />
      </G>
    </Svg>
  );
};
