import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Percentage = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4M7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19 5 5 19" />
      </G>
    </Svg>
  );
};
