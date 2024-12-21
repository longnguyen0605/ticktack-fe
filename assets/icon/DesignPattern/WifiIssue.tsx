import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const WifiIssue = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M2.126 8.324c-.2-.262-.155-.605.086-.79Q6.829 4 11.999 4t9.788 3.535c.252.212.28.558.085.789l-9.455 11.173a.548.548 0 0 1-.836 0z" />
        <Path
          d="M12 8v2M12 14.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
