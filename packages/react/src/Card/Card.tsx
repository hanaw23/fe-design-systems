import { Avatar, Card as AntCard } from "antd";
import type { CardProps as AntCardProps } from "antd";
import type { CSSProperties, ReactNode } from "react";

import { defaultTheme } from "../theme";

export type CardLayout = "vertical" | "horizontal";

export type CardMetaAvatarProps = {
  src?: string;
  alt?: string;
  size?: "small" | "default" | "large" | number;
};

export type CardMetaProps = {
  title?: ReactNode;
  description?: ReactNode;
  avatar?: CardMetaAvatarProps;
};

export type CardProps = AntCardProps & {
  width?: number | string;
  height?: number | string;
  layout?: CardLayout;
  meta?: CardMetaProps;
};

export function Card({ width, height, layout = "vertical", style, styles, meta, children, cover, ...props }: CardProps) {
  const isHorizontal = layout === "horizontal";

  const baseStyles = typeof styles === "function" ? styles({ props: props as AntCardProps }) : styles;

  const horizontalRootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };

  const cardStyles = {
    ...baseStyles,

    root: {
      ...baseStyles?.root,
      color: defaultTheme.color,
      borderColor: defaultTheme.borderColor,
      ...(isHorizontal ? horizontalRootStyle : {}),
    },

    ...(isHorizontal && {
      cover: {
        ...baseStyles?.cover,
        width: 180,
        flexShrink: 0,
        margin: 0,
      },

      body: {
        ...baseStyles?.body,
        flex: 1,
      },
    }),
  };

  return (
    <AntCard
      {...props}
      cover={cover}
      styles={cardStyles}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {meta && <AntCard.Meta avatar={meta.avatar ? <Avatar src={meta.avatar.src} alt={meta.avatar.alt} size={meta.avatar.size} /> : undefined} title={meta.title} description={meta.description} />}

      {children}
    </AntCard>
  );
}
