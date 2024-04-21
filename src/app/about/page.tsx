"use client";
import MyApp from "@/components/atoms/myapp";
import AboutPage from "@/components/templates/about_page";

export default function Profile() {
    return <MyApp Component={AboutPage} pageProps={undefined} />;
}
