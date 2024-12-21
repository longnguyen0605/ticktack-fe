import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ClipboardCheck = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M8.5 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M15.5 4H18a2 2 0 0 1 2 2v9" />
        <Path d="M8 6.4V4.5a.5.5 0 0 1 .5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 0 1 .5.5v1.9a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6Z" />
        <Path d="m15.5 20.5 2 2 5-5" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
