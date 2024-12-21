import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BinHalf = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z" />
        <Path d="M3 5c2.571 2.667 15.429 2.667 18 0M11 18l3-3.5m0 0 5 2.5m-5-2.5 6-3M4.5 16l3.236-.462a.6.6 0 0 1 .469.133L11 18l3 3M8 15.5l2.615-3.05a.6.6 0 0 1 .84-.071L14 14.5" />
      </G>
    </Svg>
  );
};
