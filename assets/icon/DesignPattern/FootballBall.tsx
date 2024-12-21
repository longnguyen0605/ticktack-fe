import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FootballBall = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M4.116 14.015a22.3 22.3 0 0 0-.104 3.665 2.413 2.413 0 0 0 2.309 2.308c1.008.052 2.294.055 3.664-.103m-5.87-5.87c.28-2.411 1.055-5.084 2.936-6.965 1.88-1.88 4.553-2.656 6.964-2.935m-9.9 9.9 5.87 5.87m0 0c2.412-.279 5.085-1.055 6.965-2.935s2.657-4.554 2.935-6.965m-5.87-5.87a22.3 22.3 0 0 1 3.665-.103 2.413 2.413 0 0 1 2.308 2.309 22.3 22.3 0 0 1-.103 3.664m-5.87-5.87 5.87 5.87M9.172 14.828l1.414-1.414m0 0L9.172 12m1.414 1.414L12 14.828m-1.414-1.414 2.829-2.828m0 0 1.414-1.414m-1.414 1.414L12 9.172m1.415 1.414L14.829 12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
