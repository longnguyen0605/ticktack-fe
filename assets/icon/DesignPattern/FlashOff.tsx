import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FlashOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8.795 8.782 5 14h6v7l4-5.5m2.182-3L19 10h-6V3l-2.182 3M4 4l16 16" />
      </G>
    </Svg>
  );
};
