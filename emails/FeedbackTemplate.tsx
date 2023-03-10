import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Preview } from '@react-email/preview';
import { Hr } from '@react-email/hr';

export default function FeedBackEmail({email, message}) {
    return (
        <Html>
            <Preview>You get a feedback from FeatBit client!</Preview>
            <Section style={main}>
                <Container style={container}>
                    <div style={heading}>FeatBit Feedback!</div>
                    <Hr />
                    <div style={sectionContainer}>
                        <div style={label}>User email: </div>
                        <div style={paragraph}>{email}</div>
                    </div>
                    <div style={sectionContainer}>
                        <div style={label}>Message: </div>
                        <div style={paragraph}>{message}</div>
                    </div>
                </Container>
            </Section>
        </Html>
    );
}

// Styles for the email template
const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";
const main = {
    backgroundColor: "#fff",
    fontFamily
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
};

const heading = {
    marginTop: "20px",
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
};

const sectionContainer = {
    marginTop: "16px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "5px",
}

const label = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#484848",
};

const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
};