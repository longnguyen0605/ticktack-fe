import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ForwardMessage = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="m7 8 5 3 5-3" strokeLinejoin="round" />
        <Path d="M10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6.857" />
        <Path
          d="M22 17.111h-6.3c-3.6 0-3.6 4.889 0 4.889m6.3-4.889L18.85 14M22 17.111l-3.15 3.111"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
