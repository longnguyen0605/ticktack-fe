import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SmallLampAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m6.872 3.428-2.64 8.8a.6.6 0 0 0 .574.772h14.388a.6.6 0 0 0 .574-.772l-2.64-8.8A.6.6 0 0 0 16.554 3H7.446a.6.6 0 0 0-.574.428M8 15v-2M8 21h8m-4-6v6" />
      </G>
    </Svg>
  );
};
