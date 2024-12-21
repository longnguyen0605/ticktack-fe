import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DropletHalf = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="m4.5 16.5 14-6.5M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z" />
      </G>
    </Svg>
  );
};
