import Link from "next/link"
import Image from "next/image"
import { getContent } from "@/lib/content"

const content = getContent();

function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-muted/30 flex justify-center mx-auto px-4">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image 
              src={content.brand.logoPath} 
              alt={content.brand.name} 
              className="h-6 md:h-8 w-auto object-contain mb-2" 
              width={673}
              height={123}
            />
            <p className="text-sm text-muted-foreground">
              {content.brand.tagline}
            </p>
          </div>
          {content.footer.links.map((linkGroup, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-bold text-foreground">{linkGroup.label}</h4>
              <ul className="space-y-2">
                {linkGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">{content.footer.closing}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
