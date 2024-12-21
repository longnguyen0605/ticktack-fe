import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GreenBus1 = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="m7 16.01.01-.011M21 12H3v7a1 1 0 0 0 1 1h9M17 23s.9-3.118 3-5"
          strokeLinejoin="round"
        />
        <Path
          d="m19.802 21.425-.134.012a3.094 3.094 0 0 1-3.366-2.774 3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.497M21 8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M7 8h10"
          strokeLinejoin="round"
        />
        <Path d="M4.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20" />
      </G>
    </Svg>
  );
};