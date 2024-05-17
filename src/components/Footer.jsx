export default function Footer() {
  return (
    <footer className="bg-slate-600 text-white p-10 font-manrope">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Sneaker Store</h1>
                <p className="text-sm">We sell the best sneakers in town</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Contact Us</h1>
                <p className="text-sm">Email:
                <a href="mailto:elishahezekiah903@gmail.com" className="text-primary-400">
                    jvkhvg
                </a>
                </p>
                <p className="text-sm">Phone: 0712345678</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Follow Us</h1>
                <div className="flex flex-row gap-2">
                    <a href="https://facebook.com" className="text-primary-400">
                        Facebook
                    </a>
                    <a href="https://twitter.com" className="text-primary-400">
                        Twitter
                    </a>
                    <a href="https://instagram.com" className="text-primary-400">
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}
