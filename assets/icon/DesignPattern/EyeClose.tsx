import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EyeClose = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m19.499 16-2.476-3.396M12 17.5V14M4.5 16l2.469-3.388M3 8c3.6 8 14.4 8 18 0" />
      </G>
    </Svg>
  );
};
