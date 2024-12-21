import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Behance = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8.197 11.217c5.07 0 5.07 6.783 0 6.783H2v-6.783m6.197 0H2m6.197 0c5.07 0 5.07-6.217 0-6.217H2v6.217M18 9c-2.21 0-4 2.015-4 4.5h8c0-2.485-1.79-4.5-4-4.5M14 13.5c0 2.485 1.79 4.5 4 4.5 2.755 0 3.5-2 3.5-2M20.5 6h-5" />
      </G>
    </Svg>
  );
};
