import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GitPullRequestClosed = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 11v6M18 17V7s0-2-2-2h-4M4 7.243 6.121 5.12m0 0L8.243 3M6.12 5.121 4 3m2.121 2.121 2.122 2.122" />
      </G>
    </Svg>
  );
};
