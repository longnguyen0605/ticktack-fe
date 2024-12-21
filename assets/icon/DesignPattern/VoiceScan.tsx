import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VoiceScan = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 6v12M9 9v6M18 11v2M6 11v2M15 7v10M6 3H3v3M18 3h3v3M6 21H3v-3M18 21h3v-3" />
      </G>
    </Svg>
  );
};
