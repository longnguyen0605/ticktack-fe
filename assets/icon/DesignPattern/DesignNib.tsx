import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DesignNib = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m17.675 11.408-1.905 5.715a.6.6 0 0 1-.399.386L3.694 20.98a.6.6 0 0 1-.74-.765L6.745 8.841a.6.6 0 0 1 .34-.365l5.388-2.218a.6.6 0 0 1 .652.13l4.405 4.406a.6.6 0 0 1 .145.614M3.297 20.602l6.364-6.364" />
        <Path d="m17.791 11.056 2.828-2.829a2 2 0 0 0 0-2.828L18.5 3.277a2 2 0 0 0-2.83 0l-2.828 2.829M11.781 12.116a1.5 1.5 0 1 0-2.121 2.122 1.5 1.5 0 0 0 2.121-2.122" />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
