import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PharmacyCrossSquare = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M13.9 18h-3.8a.6.6 0 0 1-.6-.6v-2.3a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 1-.6-.6v-3.8a.6.6 0 0 1 .6-.6h2.3a.6.6 0 0 0 .6-.6V6.6a.6.6 0 0 1 .6-.6h3.8a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 0 .6.6h2.3a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-2.3a.6.6 0 0 0-.6.6v2.3a.6.6 0 0 1-.6.6Z" />
      </G>
    </Svg>
  );
};
