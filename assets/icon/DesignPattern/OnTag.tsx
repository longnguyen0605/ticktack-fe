import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OnTag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z" />
        <Path d="M9 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
        <Path d="M14 15V9l4 6V9" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
