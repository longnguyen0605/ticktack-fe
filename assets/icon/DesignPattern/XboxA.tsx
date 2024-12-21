import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const XboxA = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
        <Path d="m15 16-3-8-3 8M14 14h-4" />
      </G>
    </Svg>
  );
};
