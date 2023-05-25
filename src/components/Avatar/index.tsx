import { Container } from "./styles";

import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  url: string | StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  border?: "regular" | "x2";
}

export function Avatar({
  url,
  width = 40,
  height = 40,
  alt = "Imagem de avatar",
  border = "regular",
}: AvatarProps) {
  return (
    <Container border={border}>
      <Image src={url} width={width} height={height} alt={alt} />
    </Container>
  );
}
