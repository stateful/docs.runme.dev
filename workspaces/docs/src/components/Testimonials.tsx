import React from "react";

const testimonialData = [
  {
    quote:
      "I tried your extension after seeing this post and it's a great tool so I'll give you a 5 star rating on VS Code marketplace! I hope you a successful continuation for this clever and useful project.",
    author: "Vincent Amstoutz",
    fontSize: "text-2xl",
    dividerColor: "bg-blue-default",
  },
  {
    quote: "This is actually insanely cool.",
    author: "Empole",
    fontSize: "text-[28px] w-3/4",
    dividerColor: "bg-purple-default",
  },
  {
    quote: "Damn, this'll be a godsend for all those Docker commands.",
    author: "xeonm",
    fontSize: "text-2xl",
    dividerColor: "bg-green-default",
  },
  {
    quote:
      "This is super exciting! I often find myself wishing that I could use Jupyter Notebooks in other contexts... RUNME is an ideal solution here, and brings us back towards literate computing for broader devops.",
    author: "Mike Lockhart",
    fontSize: "text-[20px]",
    dividerColor: "bg-yellow-default",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col max-w-5xl px-4 py-24 mx-auto md:px-0">
      <h3 className="mb-16 leading-relaxed tracking-[0.03em] text-5xl">
        Loved by <span className="font-semibold">awesome</span>{" "}
        <span className="relative testimonial-engineers">developers 💜</span>
      </h3>
      <div className="flex flex-col items-start grid-flow-col grid-cols-3 grid-rows-2 space-y-10 lg:space-y-0 lg:grid gap-y-6 gap-x-12">
        {testimonialData.map((testimonial, i) => (
          <div
            key={i}
            className={`flex flex-col items-start w-full space-y-1 lg:mx-auto sm:w-3/4 lg:w-full border rounded border-gray-200 shadow p-4 ${
              i === 1 || i === 2 ? "row-span-1" : "row-span-2"
            }`}
          >
            <p className={`${testimonial.fontSize} mb-3 font-light italic`}>
              {testimonial.quote}
            </p>
            <div
              className={`h-[3px] w-6 rounded-full ${testimonial.dividerColor}`}
            />
            <p className="font-[700] tracking-[0.03em]">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
