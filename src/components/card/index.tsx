import { CardActions, CardContent, CardHeader } from "@mui/material"
import { CardBase } from "./styled"
import { CardBaseProps } from "../../types/app.type"

export const BaseCard: React.FC<CardBaseProps> = ({ title, subheader, avatar, content, buttons, bgCol, borRad, justCont, padding, bord, flx, cardPadding, mobileCardPadding, height, headerFD, headerAlign, contentPadding, mobileMargin, miniTabletMargin, laptopMargin, bgImage, width }) => {
    return (
        <CardBase
            sx={{
                background: bgCol,
                borderRadius: borRad,
                border: bord,
                flex: flx,
                padding: { mobile: `${mobileCardPadding} !important`, tablet: `${cardPadding} !important` },
                height: height,
                margin: { mobile: mobileMargin, miniTablet: miniTabletMargin, laptop: laptopMargin },
                backgroundImage: bgImage,
                width:width
            }}
        >
            <CardHeader
                title={title}
                subheader={subheader}
                avatar={avatar}
                sx={{
                    justifyContent: justCont,
                    padding: `${padding} !important`,
                    flexDirection: headerFD,
                    alignItems: headerAlign,
                }}
            />
            {
                content && <CardContent
                    sx={{
                        padding: contentPadding
                    }}
                >
                    {content}
                    <div className="positionTopRightEdge"></div>
                </CardContent>
            }
            {buttons &&
                <CardActions>
                    {buttons}
                </CardActions>
            }
        </CardBase>
    )
}