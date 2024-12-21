import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MailOut = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="m5 9 4.5 3L14 9" strokeLinejoin="round" />
        <Path d="M17 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2" />
        <Path d="M17 14h6m0 0-3-3m3 3-3 3" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
