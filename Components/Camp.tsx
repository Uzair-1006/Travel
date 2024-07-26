import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
interface CampProps {
  backgroundImage:string;
  title:string;
  subtitle:string;
  peopleJoined:string
}
const CampSite = ({backgroundImage,title,subtitle,peopleJoined} : CampProps) =>{
  return (
    <div className= {`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `} >
      <div className="flex h-full flex-col items-start
       justify-between p-6 lg:px-20 lg:py-10 ">
            <div className="flexCenter gap-4">
              <div className="rounded-full  p-4">
                <Image
                src="/folded-map.svg"
                alt="map"
                width={28}
                height={28}
                />
              </div>
              <div className="flex flex-col gap-1">
                  <h4 className="bold-18 text-white">{title}</h4>
                  <p className="regular-14 text-white">{subtitle}</p>
              </div>
            </div>
            <div className="mt-auto flexCenter gap-6">
              <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((url) =>{
                  return(
                    <Image
                    className="inline-block h-10 justify-end w-10 rounded-full" 
                    src={url}
                    key={url}
                    alt="person"
                    width={52}
                    height={52}
                    />
                  )

                })}
              </span>
              <p className="bold-18 md:bold-20 text-white">{peopleJoined}</p>
            </div>
        </div>
     </div>
  )
}
const Camp = () => {
  return (
    <section className=' 2xl:max-container
    relative flex flex-col py-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full 
      items-start justify-satart gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
        backgroundImage = "bg-bg-img-1"
        title = "Putuk Truno Camp"
        subtitle = "Prigen, Pasuram"
        peopleJoined = "50+ Joined"
        />
        <CampSite 
        backgroundImage = "bg-bg-img-2"
        title = "Mountain View Camp"
        subtitle = "Somewhere in the Wilderness"
        peopleJoined = "50+ Joined"
        />        
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px]
        xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-63 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 text-white mt-5">
            Starting from the anxiety of the climbers when 
            visiting a new climbing location, the possibility of 
            getting lost  is very large.
            That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp
// interface CampProps {
//   backgroundImage: string;
//   title: string;
//   subtitle: string;
//   peopleJoined: string;
// }

// const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
//   return (
//     <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
//       <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-blue-500">

//         <h1 className="text-2xl font-bold">{title}</h1>
//         <h2 className="text-xl">{subtitle}</h2>
//         <p className="text-lg">{peopleJoined}</p>
//       </div>
//     </div>
//   );
// }

// const Camp = () => {
//   const campSites = [
//     {
//       backgroundImage: "bg-bg-img-1",
//       title: "Putuk Truno Camp",
//       subtitle: "Prigen, Pasuruan",
//       peopleJoined: "50+ Joined"
//     },
//     // Add more campsites here if needed
//   ];

//   return (
//     <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:py-20 xl:mb-20">
//       <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
//         {campSites.map((camp, index) => (
//           <CampSite 
//             key={index}
//             backgroundImage={camp.backgroundImage}
//             title={camp.title}
//             subtitle={camp.subtitle}
//             peopleJoined={camp.peopleJoined}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Camp;
