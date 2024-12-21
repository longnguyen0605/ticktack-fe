import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BasketballAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17.735 20.192c4.524-3.168 5.624-9.404 2.456-13.928S10.788.641 6.264 3.81C1.74 6.976.64 13.212 3.808 17.736s9.403 5.623 13.927 2.456M17.735 20.192 6.264 3.809" />
        <Path d="M19.577 5.473c-3.77 5.896-8.508 9.214-16.302 11.415" />
        <Path d="M13.06 2.056c.414 5.24 3.392 9.494 8.647 12.35M2.293 9.595c4.782 2.18 7.761 6.434 8.647 12.349" />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
