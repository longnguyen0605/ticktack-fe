import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BorderTr = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20.01 20V4h-16M4 8l.011-.01M4 12l.011-.01M4 16l.011-.01M4 20l.011-.01M16 20l.011-.01M12 20l.011-.01M8 20l.011-.01" />
      </G>
    </Svg>
  );
};
