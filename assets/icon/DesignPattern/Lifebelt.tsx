import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Lifebelt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
        <Path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0M9.235 14.89 5 19M14.766 14.89 19 19M14.766 9.11 19 5M9.235 9.11 5 5" />
      </G>
    </Svg>
  );
};
