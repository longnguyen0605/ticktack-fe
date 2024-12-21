import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MultiMacOsWindow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M7 19v-8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z" />
        <Path
          d="m10 12.01.01-.011M12 12.01l.01-.011M14 12.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M6.5 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <Path
          d="m5 7.01.01-.011M7 7.01l.01-.011M9 7.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
