import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SmallLamp = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m6.872 3.428-2.64 8.8a.6.6 0 0 0 .574.772h14.388a.6.6 0 0 0 .574-.772l-2.64-8.8A.6.6 0 0 0 16.554 3H7.446a.6.6 0 0 0-.574.428M12 17v-2M8.6 21h6.8c.331 0 .595-.268.542-.596C15.763 19.29 15.026 17 12 17s-3.763 2.29-3.942 3.404c-.053.328.21.596.542.596" />
      </G>
    </Svg>
  );
};