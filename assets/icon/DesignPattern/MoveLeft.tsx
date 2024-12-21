import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MoveLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 12H2m0 0 3-3m-3 3 3 3" />
      </G>
    </Svg>
  );
};
