export function Hero() {
  return (
    <div class="text-center py-20 space-y-2">
      <h2 class="text-5xl xl:text-6xl 2xl:text-7xl font-bold">
        Run your README.md
      </h2>
      <h3 class="text-2xl">
        Use dev-friendly markdown to craft interactive runbooks for VS Code.
      </h3>
      <div class="flex flex-col items-center justify-center py-12 space-y-2">
        <div class="bg-[#e75b5b] py-[20px] rounded-md text-base w-[280px] h-[40px] flex items-center justify-center font-semibold">
          <a href="https://marketplace.visualstudio.com/items?itemName=stateful.runme">
            Install the extension
          </a>
        </div>

        <div class="font-medium">
          or search{" "}
          <i class="rounded text-[#EB5757] bg-[#5E5B54] p-0.5">runme</i> in
          the VS Code extension panel
        </div>
      </div>
      <div class="lg:w-3/4 mx-auto">
        <img src="/sidebyside.png" />
      </div>
    </div>
  );
}
