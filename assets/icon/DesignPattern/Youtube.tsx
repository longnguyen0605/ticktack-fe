import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Youtube = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          fill="#131927"
          d="m14 12-3.5 2v-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 12.708v-1.415c0-2.896 0-4.343.905-5.275.906-.931 2.332-.972 5.183-1.052C9.438 4.927 10.818 4.9 12 4.9s2.561.027 3.912.066c2.851.08 4.277.12 5.182 1.052S22 8.398 22 11.293v1.415c0 2.895 0 4.343-.905 5.274-.906.931-2.331.972-5.183 1.053-1.35.038-2.73.065-3.912.065s-2.561-.027-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052C2 17.051 2 15.602 2 12.708Z" />
      </G>
    </Svg>
  );
};
