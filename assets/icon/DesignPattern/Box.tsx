import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Box = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10 12h4M3 3h18M21 7v13.4a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V7" />
      </G>
    </Svg>
  );
};
