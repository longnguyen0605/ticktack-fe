import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GitPullRequest = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 7v10M18 17V7s0-2-2-2h-3" />
        <Path d="M15 7.5 12.5 5 15 2.5" />
      </G>
    </Svg>
  );
};
