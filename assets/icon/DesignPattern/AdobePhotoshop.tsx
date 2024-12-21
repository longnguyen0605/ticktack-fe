import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AdobePhotoshop = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4" />
        <Path d="M7 16v-4m0 0V8h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2zM17 11c-.306-.613-.933-1-1.618-1H15a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 15 13h.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-.382a1.81 1.81 0 0 1-1.618-1v0" />
      </G>
    </Svg>
  );
};
