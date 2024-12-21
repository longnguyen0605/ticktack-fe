import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShopAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M20.486 3h-3.992l.5 5s1 1 2.5 1c1.077 0 1.81-.516 2.138-.806a.5.5 0 0 0 .15-.465L21.078 3.5A.6.6 0 0 0 20.486 3Z" />
        <Path d="m16.494 3 .5 5s-1 1-2.5 1-2.5-1-2.5-1V3zM11.994 3v5s-1 1-2.5 1-2.5-1-2.5-1l.5-5zM7.493 3H3.502a.6.6 0 0 0-.592.501L2.205 7.73c-.028.172.02.349.15.465.328.29 1.061.806 2.138.806 1.5 0 2.5-1 2.5-1z" />
        <Path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
        <Path
          d="M14.834 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"
          strokeMiterlimit="16"
        />
      </G>
    </Svg>
  );
};
