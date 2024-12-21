import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlignRightBox = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m8.006 20.005.01-.01M4.006 20.005l.01-.01M4.006 16.005l.01-.01M4.006 12.005l.01-.01M4.006 8.005l.01-.01M4.006 4.005l.01-.01M8.006 4.005l.01-.01M12.006 20.005h8v-16h-8z" />
      </G>
    </Svg>
  );
};
