import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Gift = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20 12v9.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V12M21.4 7H2.6a.6.6 0 0 0-.6.6v3.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6M12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7" />
      </G>
    </Svg>
  );
};
