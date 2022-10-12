import { InputHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextInputRootProps { children: ReactNode };
export interface TextInputIconProps { children: ReactNode };

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded  bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputRoot.displayName = "TextInput.Root";
TextInputIcon.displayName = "TextInput.Icon";
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
