import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts () {
    return (
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post 
                title="Cita Rasa Lisbon"
                body="...those pasteis de nata!"
            />
            <Post 
                title="Buenos Aires dalam irama tango"
                body="Saya menyukainya!"
            />
            <Post 
                title="Faricha Aulia"
                body="2141720155"
            />
        </Section2>
    );
}