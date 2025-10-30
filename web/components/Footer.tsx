import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">אודות המשרד</h3>
            <p className="text-gray-300 text-sm">
              משרד עורכי דין המתמחה בדיני נדל״ן, מספק שירותים משפטיים מקצועיים ללקוחות פרטיים ועסקיים.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-gray-300 hover:text-accent transition-colors">
                  תחומי התמחות
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  מאמרים
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  יצירת קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">יצירת קשר</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>טלפון: 03-1234567</li>
              <li>פקס: 03-1234568</li>
              <li>
                <a href="mailto:info@lawfirm.co.il" className="hover:text-accent transition-colors">
                  info@lawfirm.co.il
                </a>
              </li>
              <li>רחוב הדוגמה 10, תל אביב</li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">רשתות חברתיות</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="וואטסאפ"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3. Pokémon 2 3.342 4.683.474.52.88.668 1.233.683.343.014 1.068-.199 1.448-.473.38-.272 1.603-1.34 2.04-1.851.438-.512.873-.57 1.478-.297.604.272 3.816 1.798 4.471 2.128.654.33.759.495 1.128.495.369 0 1.069-.199 1.838-.863.759-.654 1.331-1.526 1.699-2.229.367-.703.184-1.091-.05-1.513-.233-.421-1.083-1.025-1.48-1.379-.397-.354-.67-.596-.931-.894-.261-.297-.toire-.297-.67-.149-.297.15-1.779.835-2.075.984-.297.149-.495.223-.67.223-.198 0-.347-.075-.495-.223-.149-.149-1.281-1.432-1.742-1.968-.462-.535-.926-.446-1.233-.297-.297.149-.57.223-1.04.521-.47.297-1.742 1.015-2.075 1.379-.331.364-.496.52-.669.52-.173 0-.347-.075-.669-.223-.322-.149-1.281-.521-2.389-1.742-.883-.99-1.48-2.129-1.653-2.427-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/lawfirm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="לינקדאין"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/lawfirm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="פייסבוק"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <Link href="/privacy-policy" className="hover:text-accent transition-colors block">
                מדיניות פרטיות
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors block">
                תנאי שימוש
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} משרד עורכי דין. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
