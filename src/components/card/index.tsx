import { CardActions, CardContent, CardHeader } from "@mui/material"
import { CardBase } from "./styled"
import { CardBaseProps } from "../../types/app.type"

export const BaseCard: React.FC<CardBaseProps> = ({ title, subheader, avatar, content, buttons, bgCol, borRad, justCont, padding, bord, flx, cardPadding, mobileCardPadding }) => {
    return (
        <CardBase
            sx={{
                background: bgCol,
                borderRadius: borRad,
                border: bord,
                flex: flx,
                padding: { mobile: `${mobileCardPadding} !important`, tablet: `${cardPadding} !important` },
            }}
        >
            <CardHeader
                title={title}
                subheader={subheader}
                avatar={avatar}
                sx={{
                    justifyContent: justCont,
                    padding: `${padding} !important`

                }}
            />
            {
                content && <CardContent>
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