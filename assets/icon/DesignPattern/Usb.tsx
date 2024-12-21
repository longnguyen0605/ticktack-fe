import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Usb = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12.5 2v15M12.5 14l5.5-2V8.5M12.5 16 7 14.5v-3M12.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M16.5 5.5v3h3v-3zM10.5 4l2-2 2 2M7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </G>
    </Svg>
  );
};
