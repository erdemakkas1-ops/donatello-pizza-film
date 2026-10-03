// Product cut-outs (public/assets/drinks, 96x160 transparent WebP, bottom-aligned).
// 2,5 lt bottles reuse the 1 lt image of the same drink.
const flavours: [RegExp, string][] = [
  [/Coca-Cola Zero/, "cola-zero"],
  [/Coca-Cola/, "cola"],
  [/Fanta/, "fanta"],
  [/Sprite/, "sprite"],
  [/Şeftali/, "fuse-seftali"],
  [/Limon/, "fuse-limon"],
  [/Mango/, "fuse-mango"],
];

function drinkFile(name: string, size?: string) {
  if (/Ayran/.test(name)) return /1 lt/.test(name) ? "ayran-1l" : "ayran-300";
  if (/^Su\b/.test(name)) return "su-500";
  const flavour = flavours.find(([re]) => re.test(name))?.[1];
  if (!flavour) return null;
  return `${flavour}-${size === "330 ml" ? "330" : "1l"}`;
}

export function DrinkArt({ name, size }: { name: string; size?: string }) {
  const file = drinkFile(name, size);
  return file && (
    <i className="drink-art">
      <img src={`/assets/drinks/${file}.webp`} alt="" width={96} height={160} loading="lazy" decoding="async" />
    </i>
  );
}
