import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NoLock = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11.5 12H6.6a.6.6 0 0 0-.6.6v6.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6v-.9M16 12V8c0-1.333-.8-4-4-4-.747 0-1.363.145-1.87.385M16 12h1.4a.6.6 0 0 1 .6.6v.4M8 8v4M3 3l18 18" />
      </G>
    </Svg>
  );
};
