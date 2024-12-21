import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CrackedEgg = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22a8 8 0 0 0 8-8c0-4.418-3.582-12-8-12S4 9.582 4 14a8 8 0 0 0 8 8" />
        <Path d="M9.5 3.5 12 8l-2.5 3 2.5 3.5" />
      </G>
    </Svg>
  );
};
