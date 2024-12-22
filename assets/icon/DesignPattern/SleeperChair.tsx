import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SleeperChair = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M4 18v3M5 10V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
        <Path d="M19.5 10a2.5 2.5 0 0 0-2.5 2.5V14H7v-1.5a2.5 2.5 0 1 0-3 2.45V18h16v-3.05a2.5 2.5 0 0 0-.5-4.95M20 18v3" />
      </G>
    </Svg>
  );
};
