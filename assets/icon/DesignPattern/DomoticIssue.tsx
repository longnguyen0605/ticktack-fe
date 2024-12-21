import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DomoticIssue = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 9v3M12 16.01l.01-.011M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      </G>
    </Svg>
  );
};
