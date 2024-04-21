'use client';

import { ThemeContext } from '@/utilities/context/mycontext';
import { useState, useEffect } from 'react';
import Navbar from './navbar';
import { themes, Themes } from '@/utilities/themes/mythemes';
import { getTheme, saveTheme } from '@/utilities/themes/themeStorage';

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    const [theme, setTheme] = useState<keyof Themes>(getTheme());

    useEffect(() => {
        const currentTheme = themes[theme];
        document.body.style.backgroundColor = currentTheme.background;
        document.body.style.color = currentTheme.color;
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        saveTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: themes[theme].background,
                    color: themes[theme].color,
                }}
            >
                <Navbar />
                <Component {...pageProps} />
            </div>
        </ThemeContext.Provider>
    );
}