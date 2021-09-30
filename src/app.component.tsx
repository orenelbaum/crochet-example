import React, { FC, useState } from "react"
import { createStyleableComponent, C, darkTheme, css, styled } from "./crochet-init"


const StyleableButton = createStyleableComponent("button", {})

const Comp: FC<{ className?: string, text: string }> = ({ className, text }) => (
    <div {...{ className }} >
        {text}
    </div>
)

const StyleableComp = createStyleableComponent(Comp, { color: "Blue" })


export const App: FC = () => {
    const [someBool, setSomeBool] = useState(false)

    return (
        <div>
            <StyleableButton
                props={{ 
                    type: "button",
                    onClick: () => setSomeBool(!someBool)
                }}
                background="$green500"
                fontWeight="bold"
                {...{
                    "@bp3": {
                        fontSize: "2rem"
                    }
                }}
                boolVariants={[[
                    someBool, 
                    "myClass", 
                    darkTheme, 
                    { "@bp2": { color: "$blue500" } }
                ]]}
            >
                Styleable button
            </StyleableButton>
            <StyleableComp
                props={{ text: "Wrapped React component" }}
                background="Red"
                boolVariants={[
                    [someBool, css({ padding: "10px" }), styled("a", { fontWeight: "bold" }) ],
                    [!someBool, StyleableButton, { background: "Yellow" }]
                ]}
            />
            <C.div color="YellowGreen">
                Styleable primitive
            </C.div>
        </div>
    )
}