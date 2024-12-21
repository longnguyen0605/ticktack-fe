import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PerspectiveView = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M1 21 4.143 3h15.714L23 21zM2 16.5h20M3 12h18M4 7.5h16M12 3v18M8 3.5l-1.5 17M16 3.5l1.5 17" />
      </G>
    </Svg>
  );
};
