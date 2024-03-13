import Link from "next/link";
import ContactForm from "@/components/contact/contact";
export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="blog-content">
            {children}
            <ContactForm />
            {"Also check out some of the other stuff I've made at "}
            <Link href="https://ailanth.us">ailanth.us</Link>!
        </div>
    );
}
