import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Cut = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 12h1M22 12h1M6.236 7a3 3 0 1 0-4.472-4 3 3 0 0 0 4.472 4m0 0L19 18M6.236 17a3 3 0 1 1-4.472 4 3 3 0 0 1 4.472-4m0 0L19 6" />
      </G>
    </Svg>
  );
};
