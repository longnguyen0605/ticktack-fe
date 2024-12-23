import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Megaphone = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M14 14V6m0 8 6.102 3.487a.6.6 0 0 0 .898-.52V3.033a.6.6 0 0 0-.898-.521L14 6m0 8H7a4 4 0 1 1 0-8h7M7.757 19.3 7 14h4l.677 4.74a1.98 1.98 0 0 1-3.92.56Z" />
      </G>
    </Svg>
  );
};
