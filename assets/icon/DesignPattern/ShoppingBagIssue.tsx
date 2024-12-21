import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShoppingBagIssue = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m20 14.5-.74-4.804A2 2 0 0 0 17.285 8H6.716a2 2 0 0 0-1.977 1.696l-1.385 9A2 2 0 0 0 5.331 21H12M17.5 17v2M17.5 22.01l.01-.011M14 5a2 2 0 1 0-4 0" />
      </G>
    </Svg>
  );
};
