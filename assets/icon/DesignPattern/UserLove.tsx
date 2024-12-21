import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserLove = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinejoin="round" strokeWidth="1.5">
        <Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8" strokeLinecap="round" />
        <Path d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214 2.277 2.277 0 0 1 3.233 0l.106.107.106-.107A2.277 2.277 0 0 1 22 17.28Z" />
        <Path d="M5 20v-1a7 7 0 0 1 10-6.326" strokeLinecap="round" />
      </G>
    </Svg>
  );
};
