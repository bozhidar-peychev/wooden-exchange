import * as React from "react";

function LoginForm() {
  return (
    <form className="flex flex-col px-5 mt-5 leading-[120%] max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd497c02c5543daab0ff57d68634cf7f69547c7a6049b27128be17b82323626?apiKey=dfc542526534442cb7c445c8a744611f&"className="self-center max-w-full aspect-[1.01] w-[169px]" />

      <header className="flex gap-5 justify-between self-center py-2.5 mt-12 text-5xl font-medium text-center max-md:mt-10 max-md:text-4xl">
        <div className="flex-auto text-zinc-800 max-md:text-4xl">Log In</div>
        <div className="flex-auto text-zinc-500 max-md:text-4xl">Sign Up</div>
      </header>

      <div className="flex justify-center items-center px-16 py-4 mt-16 text-base leading-6 text-white whitespace-nowrap rounded-lg border border-solid bg-zinc-800 border-[color:var(--Black,#282828)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <a href="..." className="flex gap-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71865fb682f48df42847de52ffb68c38125e426ac8945fbf3195390c807180c?apiKey=dfc542526534442cb7c445c8a744611f&" className="w-6 aspect-square" />
          <div className="grow">Sign in with Google</div>
        </a>
      </div>

      <div className="flex justify-center items-center px-16 py-4 mt-6 text-base leading-6 text-white whitespace-nowrap rounded-lg bg-zinc-800 max-md:px-5 max-md:max-w-full">
        <a href="..." className="flex gap-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd86c1a5cf8bd42d4394924d052a2be76daa0df315aaf1a35d7af76f52343bc3?apiKey=dfc542526534442cb7c445c8a744611f&" className="w-6 aspect-square" />
          <div className="grow">Sign in with Facebook</div>
        </a>
      </div>

      <div className="self-center mt-9 text-sm text-zinc-800">OR</div>

      <div className="flex flex-col pb-3.5 mt-5 rounded-lg border border-solid bg-neutral-50 border-[color:var(----color-input-border-deffault,#606060)] max-md:max-w-full">
        <label className="text-sm font-bold text-neutral-900 max-md:max-w-full"> Email </label>
        <div className="mt-5 text-base text-zinc-600 max-md:max-w-full"> Enter your email </div>
      </div>

      <div className="flex flex-col pr-2 pb-3 mt-4 rounded-lg border border-solid bg-neutral-50 border-[color:var(----color-input-border-deffault,#606060)] max-md:max-w-full">
        <label className="text-sm font-bold text-neutral-900">Password</label>
        <div className="flex gap-5 justify-between pr-2.5 mt-4 text-base text-zinc-600">
          <div className="flex-auto">Enter your password</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80c973a071539b630358cd90b11f12a40b8a67e3f06974fa865abf136391f3ee?apiKey=dfc542526534442cb7c445c8a744611f&" className="w-6 aspect-square" />
        </div>
      </div>

      <div className="flex gap-2 justify-between mt-2 text-sm text-zinc-800 max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b3e8be907c1a8b9aae8b4df63256a5a522f7a00e6a57b704d04e58187d639e?apiKey=dfc542526534442cb7c445c8a744611f&" className="w-6 aspect-square" />
        <div className="flex-auto my-auto">Remember me</div>
      </div>

      <button className="justify-center items-center px-16 py-4 mt-16 text-base font-bold text-white uppercase whitespace-nowrap rounded-lg bg-stone-600 max-md:px-5 max-md:mt-10 max-md:max-w-full"> Log In </button>

      <div className="self-center mt-5 text-sm font-bold text-center underline whitespace-nowrap text-zinc-800"> Forgot Password </div>
    </form>
  );
}

export default LoginForm;