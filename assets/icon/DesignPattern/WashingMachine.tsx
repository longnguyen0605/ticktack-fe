import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const WashingMachine = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 4v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M18 5.01l.01-.011" />
        <Path d="M12 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
        <Path d="M12 16a3 3 0 0 1-3-3" />
      </G>
    </Svg>
  );
};
