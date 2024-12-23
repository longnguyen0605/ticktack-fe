import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EnlargeRoundArrow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M8.5 9.5 6 12l2.5 2.5M15.5 9.5 18 12l-2.5 2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 15V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z" />
      </G>
    </Svg>
  );
};
