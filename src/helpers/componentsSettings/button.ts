export type ButtonVariant = "primary" | "secondary";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-slate-100 hover:bg-slate-200 text-emerald-400",
  secondary: "bg-blue-400 hover:bg-blue-500 text-white",
};
