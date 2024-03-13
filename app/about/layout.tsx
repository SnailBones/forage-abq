import Link from "next/link";
import ContactForm from "@/components/contact/contact";
export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="blog-content">
            {children}
            <ContactForm />
        </div>
    );
}
