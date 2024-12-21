import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PcFirewall = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M7 22h10" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M2 17V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        <Path
          d="m12.485 6.121 3.06.765a.59.59 0 0 1 .449.586C15.818 14 12 15 12 15s-3.818-1-3.994-7.528a.59.59 0 0 1 .448-.586l3.06-.765a2 2 0 0 1 .971 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
