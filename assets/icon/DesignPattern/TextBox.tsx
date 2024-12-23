import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TextBox = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinejoin="round" strokeWidth="1.5">
        <Path d="M12 8v8m0-8H8m4 0h4" strokeLinecap="round" />
        <Path d="M21 13.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.5m18-3V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5.5M19.5 13.5v-3h3v3zM1.5 13.5v-3h3v3z" />
      </G>
    </Svg>
  );
};
