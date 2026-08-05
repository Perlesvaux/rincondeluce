import { LinkIcon2 } from "@/assets/LinkIcon2";
import { PlayList } from "@/assets/PlayList";
import { AppIcon } from "@/assets/AppIcon";
import { BookIcon } from "@/assets/BookIcon";
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



