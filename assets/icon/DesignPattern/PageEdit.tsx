import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PageEdit = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3M17.953 16.94l1-1a1.12 1.12 0 0 1 1.586 0v0a1.12 1.12 0 0 1 0 1.585l-1 1m-1.586-1.586-2.99 2.991a1 1 0 0 0-.282.553l-.242 1.557 1.556-.243a1 1 0 0 0 .553-.28l2.991-2.992m-1.586-1.586 1.586 1.586" />
        <Path d="M16 2v3.4a.6.6 0 0 0 .6.6H20" />
      </G>
    </Svg>
  );
};
