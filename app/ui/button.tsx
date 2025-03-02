import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest}
      className={clsx('flex h-10 items-center rounded-lg bg-pink-500 px-4 text-white transition-colors hover:bg-pink-400')}>
      {children}
    </button>)
}