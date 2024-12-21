import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BusStop = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="m16 16.01.01-.011M6 16.01l.01-.011M20 22V8m0 0h-2V2h4v6zM16 20H2.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H16M14 8H6m8-6H6a4 4 0 0 0-4 4v2"
          strokeLinejoin="round"
        />
        <Path d="M3.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20M14.5 20v1.9a.6.6 0 0 0 .6.6h.9" />
      </G>
    </Svg>
  );
};
