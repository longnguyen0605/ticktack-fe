import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OpenInWindow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8 21h12.4a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6V16M3.5 20.5 12 12m0 0v4m0-4H8" />
      </G>
    </Svg>
  );
};
