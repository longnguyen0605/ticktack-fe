import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FolderAlert = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 3v4M18 11.01l.01-.011M22 7v12.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V11" />
        <Path d="M14 7h-1.278a.6.6 0 0 1-.39-.144L9.169 4.144A.6.6 0 0 0 8.778 4H2.6a.6.6 0 0 0-.6.6V11h12" />
      </G>
    </Svg>
  );
};
