import { PlayList, AppIcon, BookIcon, LinkIcon2 } from '@/assets'
import { IconKindProps } from "@/types";

export function Icon({ kind }:IconKindProps){

    switch (kind) {
        case "playlist":
            return <PlayList h="24px" />


        case "app":
            return <AppIcon/>

        case "book":
            return <BookIcon/>


        default:
            return <LinkIcon2 h="24px" />
    }

}



