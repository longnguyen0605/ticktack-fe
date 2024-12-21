import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TShirt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 4h3s0 3 3 3 3-3 3-3h3m0 7v8.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V11M18 4l4.443 1.777a.6.6 0 0 1 .334.78l-1.626 4.066a.6.6 0 0 1-.557.377H18M6 4 1.557 5.777a.6.6 0 0 0-.334.78l1.626 4.066a.6.6 0 0 0 .557.377H6" />
      </G>
    </Svg>
  );
};
