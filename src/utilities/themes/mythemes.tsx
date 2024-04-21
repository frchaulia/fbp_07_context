type Theme = {
    background: string;
    color: string;
};

export type Themes = {
    dark: Theme;
    light: Theme;
};

export const themes: Record<keyof Themes, Theme> = {
    dark: {
        background: 'black',
        color: 'white',
    },
    light: {
        background: 'white',
        color: 'black',
    },
};