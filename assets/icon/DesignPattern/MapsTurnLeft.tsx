import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MapsTurnLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m4.365 19.787 7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.5.5 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865M5 6.5h3q0 0 0 0s4 0 4 4" />
        <Path d="M8.5 9 5 6.5 8.5 4" />
      </G>
    </Svg>
  );
};
