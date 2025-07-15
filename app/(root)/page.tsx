import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="font-bold text-3xl md:text-4xl">
            Get Interview-Ready with AI-Powered Practise & Feedback.
          </h1>
          <p className="text-lg">
            PrepWise is an AI-powered mock interview platform designed to help
            you prepare for interviews with real-time feedback and personalized
            guidance.
          </p>
          <Button asChild className="btn-primary">
            <Link href="/interview" className="btn-primary max-sm:w-full">
              Start an Interview
            </Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col  gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
      <section className="flex flex-col  gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/*<p>You have&apos;nt no interviews yet.</p>*/}
        </div>
      </section>
    </>
  );
};

export default page;
