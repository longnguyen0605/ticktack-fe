import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PcNoEntry = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M7 22h10" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M2 17V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        <Path
          d="M14.857 7.7a4 4 0 1 0-5.713 5.6m5.713-5.6a4 4 0 0 1-5.713 5.6m5.713-5.6-5.714 5.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
