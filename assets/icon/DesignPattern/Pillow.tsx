import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Pillow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m21.04 12.283.599 4.19a2 2 0 0 1-2.179 2.273L12.2 18.02a2 2 0 0 0-.398 0l-7.261.726a2 2 0 0 1-2.179-2.273l.599-4.19a2 2 0 0 0 0-.566l-.599-4.19A2 2 0 0 1 4.54 5.254l7.261.726a2 2 0 0 0 .398 0l7.261-.726a2 2 0 0 1 2.179 2.273l-.599 4.19a2 2 0 0 0 0 .566M21 6l-4 3M7 15l-4 3" />
      </G>
    </Svg>
  );
};
