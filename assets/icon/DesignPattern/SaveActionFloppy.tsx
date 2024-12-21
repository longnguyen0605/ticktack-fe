import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SaveActionFloppy = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 7.5V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.5M6 21v-4" />
        <Path d="M18 21v-7.4a.6.6 0 0 0-.6-.6H15M16 3v5.4a.6.6 0 0 1-.6.6h-1.9M8 3v3M1 12h11m0 0L9 9m3 3-3 3" />
      </G>
    </Svg>
  );
};
