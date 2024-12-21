import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Finder = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 15V9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6" />
        <Path d="M15 3s-4.5 0-4.5 9H13c0 9 2 9 2 9" />
        <Path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2M7 9v2M17 9v2" />
      </G>
    </Svg>
  );
};
