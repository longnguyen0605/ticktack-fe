import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FastArrowUpBox = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M15.5 16.5 12 13l-3.5 3.5M15.5 10.5 12 7l-3.5 3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};
