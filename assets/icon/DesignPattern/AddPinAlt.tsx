import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AddPinAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2Z" />
        <Path
          fill="#131927"
          d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 19h3m3 0h-3m0 0v-3m0 3v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
