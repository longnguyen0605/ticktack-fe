import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Pocket = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 6v5a9 9 0 1 1-18 0V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
        <Path d="m8 10 4 4 4-4" />
      </G>
    </Svg>
  );
};
