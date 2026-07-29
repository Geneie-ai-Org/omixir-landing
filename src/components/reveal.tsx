import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Element to render. Use this rather than wrapping, so grid/flex parents keep their direct children. */
  as?: "div" | "section" | "ul" | "dl" | "li" | "p" | "span";
  /** ms held after the element enters view. Keep the total across a group under ~320ms. */
  delay?: number;
  /** px travelled on the way in. */
  y?: number;
  x?: number;
  blur?: boolean;
  /** Stagger direct children instead of moving this element as one block. */
  stagger?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 14,
  x = 0,
  blur = false,
  stagger = false,
  className,
  id,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer (very old browsers, some test envs): show immediately.
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-revealed", "");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.setAttribute("data-revealed", "");
        observer.disconnect();
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealVars = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${y}px`,
    "--reveal-x": `${x}px`,
    ...style,
  } as CSSProperties;

  const attrs = {
    ref: ref as React.Ref<never>,
    className,
    id,
    style: revealVars,
    ...(stagger ? { "data-reveal-stagger": "" } : { "data-reveal": "" }),
    ...(blur ? { "data-reveal-blur": "" } : {}),
  };

  return <Tag {...attrs}>{children}</Tag>;
}
