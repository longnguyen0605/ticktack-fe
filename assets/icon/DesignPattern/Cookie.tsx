import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Cookie = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
        <Path d="M7.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M13 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2M11 7.01l.01-.011M8 16.01l.01-.011M16 9.01l.01-.011M17 14.01l.01-.011M13 12.01l.01-.011" />
      </G>
    </Svg>
  );
};
