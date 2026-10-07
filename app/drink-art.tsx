// Product cut-outs (public/assets/drinks and /desserts, 96x160 transparent WebP, bottom-aligned).
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
  if (/Kesme Dilim/.test(name)) return "../desserts/kesme-dilim";
  if (/Maraş (Kap|Cup)/.test(name)) return "../desserts/maras-kap";
  if (/Çikolata Rüyası/.test(name)) return "../desserts/carte-dor-cikolata";
  if (/Meyve Rüyası/.test(name)) return "../desserts/carte-dor-meyve";
  const flavour = flavours.find(([re]) => re.test(name))?.[1];
  if (!flavour) return null;
  return `${flavour}-${size === "330 ml" ? "330" : size === "2,5 lt" ? "2_5l" : "1l"}`;
}

export function DrinkArt({ name, size }: { name: string; size?: string }) {
  const file = drinkFile(name, size);
  if (!file) return null;
  return (
    <i className="drink-art">
      <img src={`/assets/drinks/${file}.webp`} alt="" width={96} height={160} loading="lazy" decoding="async" />
    </i>
  );
}
