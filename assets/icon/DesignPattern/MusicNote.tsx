import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MusicNote = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M12 16v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm0 0V8m0 0V4l5-1v4z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
