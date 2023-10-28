interface Props {
  widthClass?: string;
  heightClass?: string;
}

export function WidthSpacer({ widthClass }: Props) {
  return <div className={widthClass}></div>;
}

export function HeightSpacer({ heightClass }: Props) {
  return <div className={heightClass}></div>;
}
