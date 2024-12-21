import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Html5 = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m4 3 1.778 17.09L12 22l6.222-1.91L20 3z" />
        <Path d="M17 7H7.5l.5 4.5h8l-.5 5.5-3.5 1-3.5-1-.25-2.5" />
      </G>
    </Svg>
  );
};
