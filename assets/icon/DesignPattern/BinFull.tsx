import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BinFull = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="m19.262 17.038 1.676-12.575a.6.6 0 0 0-.372-.636L16 2h-5.5l-.682 1.5L5 2 3.21 3.79a.6.6 0 0 0-.17.504l1.698 12.744a4 4 0 0 0 1.98 2.944l.32.183a10 10 0 0 0 9.923 0l.32-.183a4 4 0 0 0 1.98-2.944ZM16 2l-2 5M9 6.5l.818-3" />
        <Path d="M3 5c2.571 2.667 15.429 2.667 18 0" />
      </G>
    </Svg>
  );
};
