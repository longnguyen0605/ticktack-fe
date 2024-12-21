import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MouseButtonLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M20 10v4a8 8 0 1 1-16 0V9a7 7 0 0 1 7-7h1a8 8 0 0 1 8 8Z" />
        <Path d="M12 2v6.4a.6.6 0 0 1-.6.6H4" />
      </G>
    </Svg>
  );
};
