import Image from "next/image";
function Homepage(){
  return (
      <main className="bg-white">
        {/* left side code  */}
        <div className="flex gap-8 md:flex md:gap-20 h-auto bg-orange-500 mx-1 cursor-pointer">
          <div className="text-white md:text-4xl font-bold w-48 h-auto md:w-1/3 md:ml-36 ml-24 py-24 ">
            <h2>Get Access to Unlimited Educational Resources. Everywhere, Everytime!</h2>
            <p className="text-orange-300 font-thin text-xs pt-5 md:w-96">
              Lorem, ipsum dolor sit amet lorem ipsum my profile app mollitiat app elit. consecteturas sumenda.
            </p>
            <button className="bg-white text-sm text-orange-300 rounded-full mt-6 px-6 py-2">Get Access</button><br /> <br />
            <button className="bg-white rounded-full px-2 py-1 text-sm text-orange-500 ">◀</button>
            <button className="bg-orange-400 text-sm rounded-full px-3 py-2 ml-4">▶</button>
          </div>
          {/* Right side code  */}
          <div className="md:mr-4 md:pt-3 md:w-[500px] md:h-1/2 pt-24 w-40 h-auto ">
            <Image src="/bg.png" alt="profile" width={600} height={900}></Image>
          </div>
        </div>
        {/* Section 2 */}
        <section className="bg-orange-50 cursor-pointer">
          <div className="md:flex md:justify-around md:text-center md:pt-24 md:mx-44 md:text-xs">
            <div>
              <h4 className="md:text-slate-950 md:font-bold text-lg">Unlimited Access</h4>
              <p>
                One Subscription Unlimited Access.
              </p>
            </div>
            <div>
              <h4 className="md:text-slate-950 md:font-bold text-lg">Expert Teachers</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Soluta!
              </p>
            </div>
            <div>
              <h4 className="md:text-slate-950 md:font-bold text-lg">Learn Anywhere </h4>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            </div>          
          </div>
          <div className="md:flex md:justify-between md:mx-3 ">
            {/* Right Side */}
            <div className="md:ml-32 md:w-96 md:pt-24 md:pb-4 ">
              <Image src="/img.jpg" alt="picture" width={700} height={800}></Image>
            </div>
            {/* Left Side  */}
            <div className="md:w-96 md:mr-36 md:py-24 ">
              <p className="md:text-4xl md:text-orange-400 ">Learn A SKill.</p>
              <p className="md:text-4xl md:text-orange-400 ">Build Your Portfolio.</p>
              <p className="md:font-bold md:text-4xl md:text-orange-600">Get Hired!</p><br />
              <p className="text-xs text-neutral-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae question
                nesciunt be sequi dolorum a, sed perferendis id quia veniam mollitia cumque
                sunt, error ipsam, nulla quidem quis dolore. Voluptates ab mollitia dolore
                modi dolorum quod magnam enim non saepe, ipsam itaque voluptatibus laborum
                harum. Non, qui sed? modi dolorum bring magnam enim 
              </p>
              <button className="text-white text-sm bg-orange-500 rounded-full mt-6 px-6 py-2 md:px-8" >Discover</button>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <div className="flex gap-8 md:flex md:gap-20 h-auto bg-orange-500 mx-1 cursor-pointer">
          <div className="text-white md:text-2xl font-bold w-48 h-auto md:w-56 md:ml-36 ml-24 py-24 ">
            <h2>Succes Stories From Our Students WorldWide!</h2>
            <p className="text-orange-300 font-thin text-xs pt-5 md:w-52">
              Lorem ipsum dolor sit amet, at this consectetur adipisicing elit. 
              Sint history animi a ex illum quaerat ab! Nesciunt, eum ipsam? 
              Cupiditate at tempore tempora odit enim these consectetur possimus
               fuga culpa. Impedit, ratione!Lorem, ipsum dolor sit amet lorem 
               ipsum my profile app mollitiat app elit. consecteturas.
            </p>
            <button className="bg-white text-sm text-orange-300 rounded-full mt-6 px-6 py-2 md:px-8" >Discover</button><br /> <br />
          </div>
          <div className="md:flex md:ml-72 md:pt-28 md:pb-4 ">
              {/* <Image className="md:w-14 md:h-36" src="/img3.jpg" alt="picture" width={50} height={100}></Image> */}
              <Image className="md:w-96 md:h-80" src="/bg1.jpg" alt="picture" width={100} height={150}></Image>
          </div>
          </div>
          <br />
      </main>
  );
};
export default Homepage 