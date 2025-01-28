import List from "@/components/ui/List";
import { Eye, History, ThumbsUp } from "lucide-react";
import { FC } from "react";

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-col md:flex-row gap-7">
      <div className="flex flex-1">
        <video
          src="video/mymovie.mp4"
          className="w-full"
          autoPlay
          loop
          controls
        ></video>
      </div>
      <div className="flex flex-col justify-between flex-1 p-5 md:p-0">
        <div className="flex flex-col gap-4 ">
          <div className="text-2xl text-highlight font-semibold">
            An introduction
          </div>
          <div className="flex gap-4">
            <List variant="info" sizes="xs">
              <Eye size={16} />
              20,368
            </List>
            <List variant="info" sizes="xs">
              <History size={16} /> 1 month ago
            </List>
            <List variant="info" sizes="xs">
              <ThumbsUp size={16} /> 1,572
            </List>
          </div>
        </div>
        <div className="text-secondary text-sm mt-2 md:mt-0  max-w-[500px]">
          Join me, on an exciting coding journey! Together, we&apos;ll delve
          into a world of knowledge, discover innovative ideas, embrace quick
          tips, master clever tricks, conquer coding challenges, implement best
          practices, and even tackle interview questions. Hit that follow button
          on Linkedin if you&apos;ve not already done so and let&apos;s build
          something extraordinary, one line of code at a time! Contact Me on
          mail : heyambujsingh@gmail.com | ambuj.dev@outlook.com
        </div>
      </div>
    </div>
  );
};

export default Intro;
