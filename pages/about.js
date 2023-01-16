import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />

            <main className="mt-52 w-1/2 m-auto ">
                <div className="flex  flex-col lg:flex-row  content-center items-center gap-10 ">
                    <section className="basis-1/2">
                        <img src="/images/profile.png" alt="Raj" width={300} height={300} style={{borderRadius: "50%"}}  />
                    </section>
                    <section className="basis-1/2">
                        <h1 className="font-bold text-3xl mb-3">Hi, I'm Raj</h1>
                        <p>I am 15 years old (as of 2023) and I live in Melbourne, Australia. I love coding 💻, maths 🔢 basketball 🏀 and swimming 🏊‍♂️.</p>
                    </section>
                    
                </div>
                    <section className="w-full mt-16 mb-10 flex flex-col gap-3">
                        <h1 className="font-bold text-xl">My Journey</h1>
                        <p>I firsted started to learn coding when I was 13. I learned Python and Django (a python web development framework) as well as some data science libraries like Numpy and Matplotlib. At the time I didn't see any use in learning these data science libraries, but later in my journey I would find them to be very useful.</p>
                        <p>After mastering Python, I dabbled in Android app development with Kotlin. I even published a simple game called Number Predictor.</p>
                        <p>Following my mobile app endeavours, I went on to learn JavaScript, HTML and CSS. This was my first break into proper web development. I also learned TypeScript and the framework ReactJS.</p>
                        <p>After my web development learning, I returned to mobile app development, but this time with Flutter and Dart. Using my newly learned skills, I created a second version of Number Predictor and republished it. Funnily enough, I didn't know about versioning, so I published a whole new app. Both the old app and new app are available on the Google Play Store.</p>
                        <p>Somewhere in the middle of 2022, I discovered Artificial Intelligence (AI). The potential of AI in real-world applications absolutely astonished me. I started off learning basic ML algorithms such as Simple Linear Regression, K-Means Clustering and so on. As of 2023, I have started to dive into the world of Deep Learning and Neural Networks.</p>
                        
                    </section >
                    <section className="w-full mt-16 mb-10 flex flex-col gap-3">
                        <h1 classname="font-bold text-xl">My Passion</h1>
                        <p>I have a passion for creating cool stuff, and coding is a tool that allows me to do this. I also deeply love maths and in my opinion, it is the language of the universe. I also love how ML and DL are built on mathematical concepts, fusing my two passions together.</p>
                        <p>I always crave for a deep understanding of how something works, instead of just knowing about it from a high-level (do you know how long it took me to crack Gradient Descent?).</p>
                    </section>
                    <section className="mb-10">
                        <p>Anyways, that's pretty much everything about me. I'll make sure to keep this updated with my latest milestones. Thanks for reading!</p>
                    </section>
            </main>

            

        </>
    );
}