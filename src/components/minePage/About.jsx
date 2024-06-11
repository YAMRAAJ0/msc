const testimonials = [
  {
    name: 'Daniel Clifford',
    imgSrc: 'https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bgColor: 'bg-indigo-600',
    quote: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    detail: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
    order: 'lg:order-1',
    colSpan: 'lg:col-span-2',
  },
  {
    name: 'Jonathan Walters',
    imgSrc: 'https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bgColor: 'bg-gray-900',
    quote: 'The team was very supportive and kept me motivated',
    detail: '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”',
    order: 'lg:order-2',
    colSpan: 'lg:col-span-1',
  },
  {
    name: 'Jeanette Harmon',
    imgSrc: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bgColor: 'bg-gray-500',
    quote: 'An overall wonderful and rewarding experience',
    detail: '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
    order: 'lg:order-3',
    colSpan: 'lg:col-span-1',
  },
  {
    name: 'Patrick Abrams',
    imgSrc: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bgColor: 'bg-purple-800',
    quote: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
    detail: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”',
    order: 'lg:order-4',
    colSpan: 'lg:col-span-2',
  },
  {
    name: 'Kira Whittle',
    imgSrc: 'https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bgColor: 'bg-gray-700',
    quote: 'Such a life-changing experience. Highly recommended!',
    detail: '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”',
    order: 'lg:order-2',
    colSpan: 'lg:col-span-1 lg:row-span-4',
  },
];

const TestimonialCard = ({ name, imgSrc, bgColor, quote, detail, order, colSpan }) => (
  <div className={`${bgColor} ${order} ${colSpan} rounded-lg shadow-xl mb-5 lg:mb-0`}>
    <div className="mx-8 my-10 lg:my-8">
      <img className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 -ml-1 lg:ml-3 lg:-mt-4" src={imgSrc} alt={name} />
      <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20">{name}</h1>
      <h2 className="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20">{name}</h2>
    </div>
    <div className="px-3 -mt-6 lg:px-9 2xl:pt-6 2xl:mx-2">
      <p className="text-white text-xl 2xl:text-4xl font-bold">{quote}</p>
      <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl mt-2">{detail}</p>
    </div>
  </div>
);

function About() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default About;
