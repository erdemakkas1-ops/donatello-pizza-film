// Representative drink illustrations: flavour colours on generic can / bottle / cup shapes, no brand marks.
type Look = { liquid: string; label: string; band: string };

const looks: [RegExp, Look][] = [
  [/Zero/, { liquid: "#2a140c", label: "#1b1b1b", band: "#d81f26" }],
  [/Coca-Cola/, { liquid: "#2a140c", label: "#d81f26", band: "#f4f0e6" }],
  [/Fanta/, { liquid: "#ff8a00", label: "#ff7a00", band: "#1d4fa3" }],
  [/Sprite/, { liquid: "#cfe9c9", label: "#1f8a3c", band: "#f2d33b" }],
  [/Şeftali/, { liquid: "#c46a2c", label: "#f59b6e", band: "#f4f0e6" }],
  [/Limon/, { liquid: "#c98a2c", label: "#f2d33b", band: "#2f8f3a" }],
  [/Mango/, { liquid: "#d9842a", label: "#f6a723", band: "#d8452b" }],
];

const lookFor = (name: string): Look | undefined => looks.find(([re]) => re.test(name))?.[1];

function Can({ l }: { l: Look }) {
  return (
    <svg viewBox="0 0 40 64" aria-hidden="true">
      <rect x="9" y="6" width="22" height="54" rx="5" fill={l.label} />
      <rect x="11" y="3" width="18" height="5" rx="2" fill="#b9bec6" />
      <rect x="9" y="56" width="22" height="5" rx="2.5" fill="#9aa1ab" />
      <rect x="9" y="27" width="22" height="7" fill={l.band} />
      <rect x="12" y="10" width="3" height="44" rx="1.5" fill="#fff" opacity=".22" />
    </svg>
  );
}

function Bottle({ l, wide }: { l: Look; wide?: boolean }) {
  const w = wide ? 26 : 20, x = 20 - w / 2;
  return (
    <svg viewBox="0 0 40 64" aria-hidden="true">
      <rect x="16" y="1" width="8" height="5" rx="1.5" fill={l.band === "#f4f0e6" ? "#d81f26" : l.band} />
      <path d={`M17 6h6l${(w - 6) / 2} 12v40a4 4 0 0 1-4 4H${x + 4}a4 4 0 0 1-4-4V18z`} fill={l.liquid} opacity=".92" />
      <rect x={x} y="30" width={w} height="13" fill={l.label} />
      <rect x={x} y="35" width={w} height="3" fill={l.band} />
      <rect x={x + 3} y="20" width="2.5" height="36" rx="1.2" fill="#fff" opacity=".25" />
    </svg>
  );
}

function Cup() {
  return (
    <svg viewBox="0 0 40 64" aria-hidden="true">
      <path d="M9 16h22l-3 42a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z" fill="#f4f6f2" />
      <rect x="8" y="12" width="24" height="5" rx="2" fill="#d9e7f2" />
      <rect x="11" y="32" width="18" height="9" fill="#2f7fc1" />
    </svg>
  );
}

function Water() {
  return (
    <svg viewBox="0 0 40 64" aria-hidden="true">
      <rect x="16" y="2" width="8" height="5" rx="1.5" fill="#2f7fc1" />
      <path d="M17 7h6l5 10v41a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V17z" fill="#cfe6f7" opacity=".85" />
      <rect x="12" y="30" width="16" height="11" fill="#2f7fc1" />
    </svg>
  );
}

export function DrinkArt({ name, size }: { name: string; size?: string }) {
  let art = null;
  if (/Ayran/.test(name)) art = /1 lt/.test(name) ? <Bottle l={{ liquid: "#f4f6f2", label: "#2f7fc1", band: "#f4f6f2" }} /> : <Cup />;
  else if (/^Su\b/.test(name)) art = <Water />;
  else {
    const l = lookFor(name);
    if (l) art = size === "330 ml" ? <Can l={l} /> : <Bottle l={l} wide={size === "2,5 lt"} />;
  }
  return art && <i className="drink-art">{art}</i>;
}
