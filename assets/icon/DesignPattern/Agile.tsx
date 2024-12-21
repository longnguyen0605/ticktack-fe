import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Agile = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17.5 19H22m0 0-2.5-2.5M22 19l-2.5 2.5M12 2 9.5 4.5 12 7" />
        <Path d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2" />
        <Path d="M6.756 5.5A7.5 7.5 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5" />
      </G>
    </Svg>
  );
};
