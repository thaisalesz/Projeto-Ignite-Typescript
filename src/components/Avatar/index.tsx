import { Container } from "./style"

export function Avatar({src, hasBorder}){
    return(
        <Container src={src} hasBorder={hasBorder} alt="" />
    )
}