import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BluetoothTag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m9 9.6 6 5.1-3.143 3.3V6L15 9.3l-6 5.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z" />
      </G>
    </Svg>
  );
};
