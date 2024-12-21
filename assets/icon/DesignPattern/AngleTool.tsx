import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AngleTool = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M3 21V3h6v12h12v6z" strokeLinejoin="round" />
        <Path d="M13 19v2M9 19v2M3 7h2M3 11h2M3 15h2M17 19v2" />
      </G>
    </Svg>
  );
};
