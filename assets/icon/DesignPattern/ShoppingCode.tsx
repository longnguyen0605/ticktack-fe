import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShoppingCode = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 5v2M10 5v6M18 5v1M6 10v6M6 18.5v.5M10 18.5v.5M14 18.5v.5M18 18.5v.5M10 14v2M14 13v3M14 5v5M18 9v7" />
      </G>
    </Svg>
  );
};
