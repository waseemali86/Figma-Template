function Footer() {
    return(
        <footer className="w-full h-auto md:flex flex-col bg-gray-500 border-y-gray-800 px-8 text-lg flex md:justify-between py-8 ">
            <div className="w-full h-auto cursor-pointer flex flex-col md:flex-row items-start m-8 md:justify-between md:gap-x-4">
                <div>
                    <p className="text-3xl font-bold p-24 pt-10 md:py-24 md:px-2">Goge Africa</p>
                </div>
                <div>
                    <p className="font-semibold md:mt-6 pb-2">About us</p>
                    <p>Home</p>
                    <p>Portfolio</p>
                    <p>Projects</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p className="font-semibold mt-6 pb-2">contact us</p>
                    <p>WhatsApp +92-3113045250</p>
                    <p>Phone +92-3093314935</p>
                    <p>Email waseemjunejo1890@gmail.com</p>
                </div>    
                <div>
                    <p className="font-semibold mt-6 pb-2">Skills</p>
                    <p>Html</p>
                    <p>Css</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>Next.js</p>
                    <p>Full-stack Developer</p>
                </div>    
                <div>
                    <p className="font-semibold md:pr-4 mt-6 pb-2">Social Media</p>
                    <p>Linkdin</p>
                    <p>Youtube</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Tiktok</p>
                </div>    
            </div>
        </footer>
    )
};

export default Footer;