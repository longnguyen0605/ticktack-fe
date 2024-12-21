import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Pacman = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m16 12 .01.01M19 12l.01.01M22 12l.01.01M2 12c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8-3.999L12 12l8-6.001A9.99 9.99 0 0 0 12 2C6.477 2 2 6.477 2 12" />
      </G>
    </Svg>
  );
};
