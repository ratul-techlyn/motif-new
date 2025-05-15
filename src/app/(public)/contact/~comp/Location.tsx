
import React from "react";


const Location = () => {
  return (
    <section className="layout_normal mt-10 md:mt-20 w-[90%] md:w-[90%] lg:w-[70%]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-6 layout_normal lg:grid-cols-3 gap-4 px-4 lg:px-0 py-6 md:py-6 mt-20 md:mt-28">
        <div className="max-w-[400px]">
          <h4 className="font-semibold  font-clash text-xl uppercase text-white">
            {" "}
            Location
          </h4>
          <p className="mt-2">
            A Globally distributed
            <br /> 100% remote-first team <br />
            with headquarters in LA <br />& New York City
          </p>
          <p className="mt-2">
            9350 Wilshire Blvd suite <br />
            203, Beverly Hills, CA <br />
            90212, United States
          </p>
          <p className="mt-2">
            447 Broadway, Suite #26,
            <br /> NYC, New York,10013,
            <br /> United States
          </p>
        </div>
        <div className="max-w-[400px]">
          <h4 className="font-semibold  font-clash text-xl uppercase text-white">
            {" "}
            New Talent
          </h4>
          <p className="mt-2">
            Come to work in the world’s
            <br /> most creative team in the world.
          </p>
          <p className="mt-2">
            Or, if you don’t think Motif is the
            <br /> most creative team in the world
            <br />
          </p>
          <p className="mt-2">
            It’s your chance to transform it <br />
            into the world’s most creative team.
          </p>
          <p className="mt-2">
            Tell us about you to <br />
            career@wemotif.com
          </p>
        </div>
        <div className="max-w-[400px]">
          <h4 className="font-semibold  font-clash text-xl uppercase text-white">
            {" "}
            Press & Media
          </h4>
          <p className="mt-2">
            Looking to feature us? Roast us?
            <br /> Uncover the secrets behind our madness? We’re game. Just make
            sure your story is
            <br /> as bold as we are.
          </p>

          <p className="mt-2">
            Just don’t ask for a boring corporate statement.
          </p>
          <p className="mt-2">
            Email: [PR@WEMOTIF.COM]
            <br />
            (We actually read them.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
