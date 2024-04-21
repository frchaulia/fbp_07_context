import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import ForContact from "../molecules/forcontact";

export default function ContactPage () {
    return (
        <Section2 isFancy={true}>
            <Heading>Kontak Faricha Aulia</Heading>
            <ForContact />
        </Section2>
    );
}