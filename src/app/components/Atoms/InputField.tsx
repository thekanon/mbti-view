import React from "react";
import Image from "next/image";

export interface InputProps {
  status: "active" | "fill" | "default";
  type:
    | "default"
    | "code"
    | "username"
    | "email"
    | "password"
    | "normal"
    | "phone";
  theme: "light" | "dark";
  placeholder?: string;
}

// 아이콘을 렌더링하는 컴포넌트 생성
const iconMappings: {
  [theme: string]: {
    [type: string]: string;
  };
} = {
  light: {
    email: "/Iconly/Bold/Message.svg",
    username: "/Iconly/Bold/Profile.svg",
    password: "/Iconly/Bold/Lock.svg",
    phone: "/Iconly/Bold/Call.svg",
  },
  dark: {
    email: "/Iconly/Bold/Dark/Message.svg",
    username: "/Iconly/Bold/Dark/Profile.svg",
    password: "/Iconly/Bold/Dark/Lock.svg",
    phone: "/Iconly/Bold/Dark/Call.svg",
  },
};

const Icon = ({ type, theme }: { type: string; theme: string }) => {
  const iconSrc = iconMappings[theme]?.[type];

  if (iconSrc) {
    return (
      <div className="ml-2">
        <Image src={iconSrc} alt={type + " Icon"} width={20} height={20} />
      </div>
    );
  }

  return null;
};

export const InputField = ({
  status = "default",
  type = "default",
  theme = "light",
  placeholder = "",
}: InputProps) => {
  // Tailwind 클래스를 조합하여 스타일을 정의합니다.
  const baseClasses = "Large Semibold flex p-2 items-center gap-3 flex-grow";

  const statusClasses = {
    active:
      theme === "light" ? "active-input-field" : "dark-active-input-field",
    fill: theme === "light" ? "fill-input-field" : "dark-fill-input-field",
    default:
      theme === "light" ? "default-input-field" : "dark-default-input-field",
  };

  const inputType = type === "password" ? "password" : "text";

  return (
    <div
      className={`my-2 flex items-center gap-3 p-3 input-field ${statusClasses[status]} ${theme}
    `}
    >
      <Icon type={type} theme={theme} />
      <input
        type={inputType}
        className={`${baseClasses} focus:outline-none`}
        placeholder={
          placeholder === "" && type !== "default" && type !== "code"
            ? type
            : ""
        }
      />
    </div>
  );
};
