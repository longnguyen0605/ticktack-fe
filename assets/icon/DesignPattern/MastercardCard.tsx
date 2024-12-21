import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MastercardCard = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 9v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm0 0H6" />
        <Path d="M16.5 13.382a1.5 1.5 0 1 1 0 2.236M16.5 13.382a1.5 1.5 0 1 0 0 2.236" />
      </G>
    </Svg>
  );
};
