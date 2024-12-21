import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Radius = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M19 12l-3-3m3 3-3 3m3-3h-7" />
        <Path fill="#131927" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </G>
    </Svg>
  );
};
