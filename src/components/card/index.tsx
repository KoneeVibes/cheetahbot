import { CardActions, CardContent, CardHeader } from "@mui/material";
import { CardBase } from "./styled";
import { CardBaseProps } from "../../types/app.type";

export const BaseCard: React.FC<CardBaseProps> = ({ title, subheader, avatar, content, buttons, bgCol, borRad, justCont, padding, bord, flx, cardPadding, mobileCardPadding, height, headerFD, headerAlign, contentPadding, mobileMargin, miniTabletMargin, tabletMargin, laptopMargin, bgImage, width, position, top, transform, hasicon, mobilevalue, tabletvalue }) => {
    return (
        <CardBase
            hasicon={hasicon || false}
            mobilevalue={mobilevalue || 0}
            tabletvalue={tabletvalue || mobilevalue || 0}
            sx={{
                background: bgCol,
                borderRadius: borRad,
                border: bord,
                flex: flx,
                padding: { mobile: `${mobileCardPadding} !important`, tablet: `${cardPadding} !important` },
                height: height,
                margin: { mobile: mobileMargin, miniTablet: miniTabletMargin, tablet: tabletMargin, laptop: laptopMargin },
                backgroundImage: bgImage,
                width: width,
                position: { tablet: position },
                top: { tablet: top },
                transform: { tablet: transform },
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