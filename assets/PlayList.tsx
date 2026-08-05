import { svgProps } from "@/types";

export function PlayList({ h, w, f }: svgProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" height={h ?? "24px"} viewBox="0 -960 960 960" width={w ?? "24px"} fill={f ?? "#5985E1"}><path d="M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z" /></svg>
}


