import { Container } from "./style"

interface AvatarProps{
    src: string;
    hasBorder: boolean;
}

export function Avatar({src, hasBorder}: AvatarProps){
    return(
        <Container src={src} hasBorder={hasBorder} alt="" />
    )
}