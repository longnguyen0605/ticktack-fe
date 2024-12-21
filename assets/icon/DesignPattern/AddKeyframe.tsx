import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AddKeyframe = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M15 5h3m3 0h-3m0 0V2m0 3v3M14.848 13.317l-4.343 4.963a2 2 0 0 1-3.01 0l-4.343-4.963a2 2 0 0 1 0-2.634L7.495 5.72a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634" />
      </G>
    </Svg>
  );
};
