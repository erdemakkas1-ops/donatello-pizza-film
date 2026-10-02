"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

// pickupOnly: campaign valid for "Gel-al" only; the checkout locks delivery when one is in the cart.
export type CartLine = { key: string; name: string; variant?: string; price?: number; qty: number; pickupOnly?: boolean };
type NewLine = Omit<CartLine, "qty">;

type CartState = {
  lines: CartLine[];
  count: number;
  add: (line: NewLine) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "donatello-cart";

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside CartProvider");
  return cart;
}

// Cart lives in localStorage as a per-visitor convenience, read through an external store:
// empty on the server render, the saved cart in the browser, and in sync across open tabs.
const listeners = new Set<() => void>();
let cache: string | null = null;
const readStorage = () => { try { return localStorage.getItem(STORAGE_KEY) ?? "[]"; } catch { return "[]"; } };
const getSnapshot = () => (cache ??= readStorage());
const getServerSnapshot = () => "[]";
const subscribe = (listener: () => void) => {
  const onStorage = (e: StorageEvent) => { if (e.key === STORAGE_KEY) { cache = null; listener(); } };
  listeners.add(listener); window.addEventListener("storage", onStorage);
  return () => { listeners.delete(listener); window.removeEventListener("storage", onStorage); };
};
const parse = (raw: string): CartLine[] => {
  try { const v = JSON.parse(raw); return Array.isArray(v) ? v.filter((l) => l && typeof l.key === "string" && l.qty > 0) : []; } catch { return []; }
};
const writeLines = (update: (lines: CartLine[]) => CartLine[]) => {
  cache = JSON.stringify(update(parse(getSnapshot())));
  try { localStorage.setItem(STORAGE_KEY, cache); } catch {}
  listeners.forEach((l) => l());
};

export function CartProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const lines = useMemo(() => parse(raw), [raw]);
  const [open, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const add = useCallback((line: NewLine) => {
    writeLines((current) => {
      const existing = current.find((l) => l.key === line.key);
      return existing
        ? current.map((l) => (l.key === line.key ? { ...l, ...line, qty: l.qty + 1 } : l))
        : [...current, { ...line, qty: 1 }];
    });
    setAnnouncement(`${line.name}${line.variant ? ` (${line.variant})` : ""} sepete eklendi.`);
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    writeLines((current) => (qty <= 0 ? current.filter((l) => l.key !== key) : current.map((l) => (l.key === key ? { ...l, qty } : l))));
  }, []);

  const clear = useCallback(() => writeLines(() => []), []);
  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  const value = useMemo(() => ({ lines, count, add, setQty, clear, open, setOpen }), [lines, count, add, setQty, clear, open]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <p className="sr-only" aria-live="polite">{announcement}</p>
    </CartContext.Provider>
  );
}

// Add-to-cart button with a short confirmation state so the tap visibly registers.
export function AddButton({ line, label, className, children }: { line: NewLine; label: string; className?: string; children: ReactNode }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      data-added={added || undefined}
      onClick={() => {
        add(line);
        setAdded(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setAdded(false), 1200);
      }}
    >
      {children}
      <span className="add-icon" aria-hidden="true">{added ? "✓" : "+"}</span>
    </button>
  );
}
