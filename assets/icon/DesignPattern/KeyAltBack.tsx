import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const KeyAltBack = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M14 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m0 0H2v3M6 12v3" />
      </G>
    </Svg>
  );
};
