import { configureCrochet } from 'stitches-crochet'


const stitchesConfig = {
    theme: {
        colors: {
            blue500: 'hsl(206,100%,50%)',
            green500: 'hsl(148,60%,60%)',
            red500: 'hsl(352,100%,62%)'
        },
        space: {
            1: '5px ',
            2: '10px',
            3: '15px'
        }
    },
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)'
    },
    utils: {
        red: (_value: boolean) => ({
            color: "red",
            bg: "#622"
        }),
        green: (_value: boolean) => ({
            color: "#3d3",
            bg: "#262"
        })
    },
    prefix: 'prefix-'
} as const

const crochet = configureCrochet(stitchesConfig)

export const { createStyleableComponent, StyledPrimitives: C, createTheme, css, styled } = crochet

export const darkTheme = createTheme({ colors: { green500: 'hsl(148,60%,30%)' }})
