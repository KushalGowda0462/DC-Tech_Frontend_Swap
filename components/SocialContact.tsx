import Link from 'next/link';
import { getContent } from "@/lib/content"

export default function ContactUs() {
    const content = getContent();
    
    return (
        <section className="bg-muted/30 pb-16 text-center">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 text-foreground">Contact Us</h2>
                <p className="text-lg text-muted-foreground mb-10">
                    We&apos;d love to hear from you! Reach out to us through any of the following methods:
                </p>

                <div className="flex-col md:flex-row gap-6 items-center flex justify-center">
                    <Link href={`#${content.contact.id}`} className="btn-primary-glow h-max px-6 py-2.5 rounded-full text-base font-bold flex flex-col items-center min-w-52">
                        <span className="text-xl font-semibold">Request Demo</span>
                        <span className="text-sm mt-2">Get in touch</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
